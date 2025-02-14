---
layout: post
title: SSL for My Homelab
date: 2025-02-13T08:31:41.000Z
type: post
parent_id: '0'
published: true
status: publish
categories:
  - security
  - homelab
  - devops
author:
  login: pbruce
  display_name: Paul Bruce
  first_name: Paul
  last_name: Bruce
permalink: /blog/2025/2025-02-12-ssl-for-my-homelab
---
!["SSL for my Homelab"](/assets/images/2025/2025-02-12-ssl-for-my-homelab.jpg)

# TL;DR

<!-- toc -->

- [Context](#context)
- [Certificates 101: Hostnames Matter with SSL certificates](#certificates-101-hostnames-matter-with-ssl-certificates)
  * [What do I mean by "work easily" with SSL certificates](#what-do-i-mean-by-work-easily-with-ssl-certificates)
  * [A quick note on my homelab traffic routing strategy](#a-quick-note-on-my-homelab-traffic-routing-strategy)
  * [What's in a Name: Think about your consumers](#whats-in-a-name-think-about-your-consumers)
  * [IPTABLES isn't sufficient to forward SSL](#iptables-isnt-sufficient-to-forward-ssl)
  * [Tying hostnames to SSL certificates with certbot](#tying-hostnames-to-ssl-certificates-with-certbot)
- [Terminating TLS/SSL at the Proxy Server](#terminating-tlsssl-at-the-proxy-server)
  * [Leaving Room for Future Architectural Decisions](#leaving-room-for-future-architectural-decisions)
  * [Services Requiring Client Certificates](#services-requiring-client-certificates)
  * [What is 'Enough' Data-in-Transit Encryption](#what-is-enough-data-in-transit-encryption)
- [Key Moments in My SSL Journey This Week](#key-moments-in-my-ssl-journey-this-week)

<!-- tocstop -->

# Context

For numerous reasons, I have a 'homelab', my own little cloud at home. Amongst other things, it hosts services such as:

- Gitlab for private repos
- Bitwarden (self-hosted)
- some personal APIs for garden data and administrative processes
- some databases for long-term metrics archiving
- an observability stack including OTel, Grafana and Prometheus
- (sometimes) Jenkins (for demos mostly)
- Open WebUI and Ollama (on dedicated GPU-ready microk8s nodes)

I want them all to be available over globally resolvable DNS hostnames, though most of them are locked down by origin IP. I also want them accessible *only* by https or otherwise TLS protocols, no port 80s involved because some specific components (Bitwarden) REALLY demand encryption-in-transit as well as most services should.

The recent tricky part was how (really where) to employ certificates, which I'll describe in this article in the hopes that it helps someone else (such as my local Boston DevOps community noobs). In short, I chose to ***terminate TLS*** on the front-end rather than forwarding that responsibility way downstream to the individual service components.

Continue to read on...if you are the curious type.

# Certificates 101: Hostnames Matter with SSL certificates

I have to talk a little bit about my DNS hostnames setup before we can talk SSL certificates because the latter ultimately needs the former to work one-shot. Whether you're ripping certs that are unique to single resources and one hostname, or you're looking to use a single cert with multiple ["Subject Alternative Name"](https://support.dnsimple.com/articles/what-is-ssl-san/) entries, the simple fact is that SSL won't work easily if a certificate doesn't match the hostname being used to access the service secured with it.

## What do I mean by "work easily" with SSL certificates

In short, most internet clients (browsers, command-line utilities, SSL libraries used in apps) know to validate protocols used to encrypt inbound and outbound communications using standard mechanisms. These include certificate authority (CA) and signing chains, encryption algorithms, NAMES matching DNS, and other aspects of crypto.

Just about every software component you'll use, from distributions of Linux to apps like cURL and openssl embedded in container images, rely on these established standards. So if you deviate from any of these mechanisms, like forgoing a CA b y using a self-signed certificate or not specifying additional hostnames as Subject Alternative Names, *everything breaks* unless you go *WAY out of your way* to circumvent the mechanisms (like injecting your own CA into the client's trusted CA stores). To fiddle with these things is more trouble than simply finding a way to comply with the techno-norms.

The good news for us homelab enthusiasts is that you can use services like [certbot](https://certbot.eff.org/pages/about) from the [Electronic Frontier Foundation](https://www.eff.org/) to create valid SSL certificates so long as you follow some basic steps...which later in this article we'll review. Isn't it nice that there is a "leading nonprofit defending digital privacy, free speech, and innovation"?

## A quick note on my homelab traffic routing strategy

Most of my homelab hostnames route into service containers defined on my Kubernetes cluster via a static IP assigned to a small cloud instance acting as a reverse proxy. For economical reasons, I don't use 3rd-party ssh tunneling platforms like ngrok or CloudFlare because their kubernetes nativeness is...lacking even after 10 years of hype cycle. And I think there's value in figuring out EVERY key component and communication line between the outside world and my homelab. 

In short, I host my own openvpn components and route very specific things between connected VPN clients. If you really want to learn more, [schedule a meeting with me](https://calendly.com/paulsbruce/website-inbound-inquiry) and *be prepared to show your own homelab situation* before learning more about my own trusted connectivity setup. :D

## What's in a Name: Think about your consumers

For my homelab, I'm really the only 'consumer' which means I only need to respect my own personal logic about naming and namespacing conventions. In corporate, or more relevant public, exposures of conventions you use, they are far longer-living than a homelab.

In either personal or professional context, when faced with questions about what to name something, assume that you'll need to change it in the future and act accordingly. For my homelab DNS, I control both the clients (code in containers relying on other services) and many of the services (Vault, config management, other APIs, etc.) they rely on so I can change these things 'willy nilly' at my own peril. Regardless, I tend to use subdomains as 'namespaces' and then be clear about specific services within that namespace, such as:

- garden-api.mylab.mydomain.com
- openwebui.mylab.mydomain.com
- actual.vpn.domain.org
- second.mongo.domain.org

The point is that your DNS naming (and subsequently your SSL certificate names) conventions should follow some form of comprehensible strategy so that whoever uses it doesn't get confused when documentation or unanticipated changes confuse the matter.

## IPTABLES isn't sufficient to forward SSL

For my purposes on an nginx reverse proxy, [this](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04) was the article that resolved many questions. After trying to use iptables on port 443 for hours only to find that [my brain was not braining](https://serverfault.com/questions/548898/how-to-redirect-http-to-https-using-iptables/548902#548902), I realized that simply terminating the SSL at the front-end was an overall better solution. This is how most cloud provisioned load balancing works, so it was a known pattern.

Of course then I would have to pass down Layer-7 communications from the proxy to non-SSL endpoints for target services, but we can deal with the internal SSL comms issue at a later time.

## Tying hostnames to SSL certificates with certbot

Whether you're using nginx or not, [certbot can generate](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04#step-4-obtaining-an-ssl-certificate) (and likely validate) the hostname(s) you intend to use. See the '--help' option about '--standalone', '--webroot', or '--manual' arguments. For me, it was:

'''
sudo certbot --nginx -d some-service.namespace.mydomain.org
'''

A decision to provide extra Subject Alternative Names using additional -d arguments is...yours to make. Usually, I would only do this when a certificate is used for ***the same service***, not different services. Using the same certificate, just like wildcards in hostnames, just asks for overuse and cross-dependency. In my experience, it's best to generate certificates to identify unique service components and manage their lifecycles together.

The other thing that certbot executed from the server does is dynamically inject the proof endpoints needed from the certbot hosted service to automatically verify your ownership over the DNS and server connected to your hostname(s). This is yet another reason why deciding on hostnames and working out your network resolution approach is necessary before generating SSL certificates.

# Terminating TLS/SSL at the Proxy Server

Similar to how cloud load balancers often do by default, I chose to 'terminate the TLS on the front end' in my nginx proxy. This means that the certificates I generated are applied in nginx enabled-sites .conf file(s) and all traffic between external clients and my services use those certificates. My Kubernetes cluster then doesn't have to know anything about *that* layer of TLS and I can manage the proxy-to-cluster communications separately.

## Leaving Room for Future Architectural Decisions

This is not a permanent approach, since traffic between the proxy and my Kubernetes cluster is also encrypted with internally certified mechanisms, and leaves flexibility for future architectural decisions. For now, my internal services only require that clients are interacting with them over SSL/HTTPS, and do not need end-to-end validation that the service component uses the same certificate as what is provided to the clients. There may be future use cases for this, but there's only so much one can do in a single morning.

Again, this is my own homelab, but the point of having one is to allow myself the space to explore how informed decisions work out over the long run.

## Services Requiring Client Certificates

In a future article, I'll describe what it takes to implement client-side certificates over an end-to-end process. My sense is that this is how I would optimally want my devices to validate themselves against highly important services such as Bitwarden.

There are a few challenges I forsee while implementing client-side certificates:

1. Client and server side certificate eventually need a shared certificate (or intermediate) authority, so trust comes in to play
2. The process to get client certificates installed on clients (both workstation and mobile devices) is likely to be additional steps I will have to personally administrate, not just implement as a user
3. Certificate expiration time windows should be reasonably tight and not overly wide, especially if you're [pretending to be a legit security vendor](https://melih.com/will-crowdstrikes-expiring-certificate-trigger-a-cybersecurity-meltdown/) but don't have the staff to support your stated SLAs, but even as a small-time tinkerer, more certificates means more weekend administrivia
4. Ultimately, end-to-end certificates expect that the service components are able to validate client certificates, which further relies on a single-source-of-truth service that is likely 3rd party in my case

## What is 'Enough' Data-in-Transit Encryption

In corporate environments, communications between *EVERY* higher-order software service should be encrypted, period. Not just browser, but service-to-service components benefit from SSL which is not the overhead it once was, otherwise logs and intercepting components have full access to anything that goes across the wire/less. Even the overly complicated Kubernetes ecosystem since 2016 has had automated renewal of certs (I was there in Pittsburg at Abstractions when Kelsey snickered his way through a live demo of lossless cert replacement).

Putting aside fears of quantum decryption making current certificate generation processes irrelevant, using SSL on your own services is still the most responsible thing to learn how to do in your homelab. If for no other reason, it teaches you to distrust when these practices are not in place and encourages you to appreciate the work it takes to make sure they are in place at your job.

# Key Moments in My SSL Journey This Week

To sum up this bizarre week of technical work (and waiting on job offers), here are a few things I would pull out of all the research, trials, errors, and successes.

- IPTABLES does not forward SSL problems downward
- DNS naming patterns should align with your service architecture
- Choices in where to use SSL certificates should be future-flexible
- Terminating SSL to simplify things is a temporary but useful hack
- You can't do everything in a Kubernetes manifest, so don't try
- Metallb only handles Layer-2 communications, really
- Don't forget to think through every possible firewall component

At the end of the day, there is no end to the day with a homelab. You can do what you want but all at your own peril. Thinking through your network stack, your secure communications approach, and your naming conventions are all useful muscles to exercise even if there are already existing 'good practices' in your professional or corporate work. The heart of a true engineer is to take things apart and fix them.
