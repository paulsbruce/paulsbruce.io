---
layout: post
title: Dirty Little Secrets
date: 2025-02-08T08:31:41.000Z
type: post
parent_id: '0'
published: true
status: publish
categories:
  - career
  - sales engineering
  - secrets management
  - product review
  - security
  - devops
author:
  login: pbruce
  display_name: Paul Bruce
  first_name: Paul
  last_name: Bruce
permalink: /blog/2025/2025-02-08-dirty-little-secrets
---
!["Dirty Little Secrets"](/assets/images/2025/2025-02-08-dirty-little-secrets.jpg)

# TL;DR

<!-- toc -->

- [Context](#context)
- [Secrets in software are more prevalent than you think](#secrets-in-software-are-more-prevalent-than-you-think)
  * [What are 'secrets'?](#what-are-secrets)
  * [Why do secrets exist?](#why-do-secrets-exist)
  * [How prevalent is it for secrets to leak?](#how-prevalent-is-it-for-secrets-to-leak)
  * ["Practitioner, steel thyself!"](#practitioner-steel-thyself)
  * [Why are mishandled secrets so dangerous](#why-are-mishandled-secrets-so-dangerous)
- [What you don't know WILL hurt you](#what-you-dont-know-will-hurt-you)
  * [1. Identify the areas where secrets show up](#1-identify-the-areas-where-secrets-show-up)
  * [2. Make secrets exposure a *Work that is Visible*](#2-make-secrets-exposure-a-work-that-is-visible)
  * [3. Share what you find with your leadership](#3-share-what-you-find-with-your-leadership)
- [My recent experience as an interviewee](#my-recent-experience-as-an-interviewee)
- [Secrets management in my own homelab](#secrets-management-in-my-own-homelab)
  * [Obviously, this is overkill, right?](#obviously-this-is-overkill-right)

<!-- tocstop -->

# Context

Having just gone through an extensive interviewing process with a software vendor in the secrets management space, here's a few things I learned. By no means am I a security expert, but I have decades of time writing, testing, and selling software so it would be a waste of the experience not to share what I've found.

# Secrets in software are more prevalent than you think

Before I convince you about how important something is, it's probably a good thing to have level understanding, at least the same terminology, between us.

## What are 'secrets'?

Secrets are any identity or permissive credential which can be used to operate as a person or impersonate a service. Think username and password, API keys, SSH and SSL certificates, and even temporary OAuth tokens. Basically anything that you can use with some software to act as a particular human or non-human identity.

## Why do secrets exist?

Secrets are critical for automating process and infrastructure, not to mention employee and contractor access, so it's not like they shouldn't exist. Without them, there would be no 'security' to speak of, and your apps and services wouldn't start when spinning them up in production environments, scaling them with more resources, or communicating with other services and 3rd parties.

It's just that they eventually leak out to places they don't belong, such as written down on post-its, in plain text files, copied around in chat and collaboration tools, stored in databases and file systems, and imbued into automation artifacts like Infrastructure as Code (IaC) scripts.

## How prevalent is it for secrets to leak?

According to a yearly survey, the [State of Secrets Sprawl](https://www.gitguardian.com/state-of-secrets-sprawl-report-2024) from a trustworthy vendor in the space, millions of secrets are leaked in public code repositories yearly. In my own research, I found that:

- $4.5M avg / breach ([ref](https://www.ibm.com/reports/data-breach))
- 1 in 10 authors leak secrets
- %2.5 of all secrets leaked are revoked in one hour or less
- 90% of detected secrets are still valid more than five days later
- 86% of breaches involve stolen credentials (a.k.a. secrets) [ref](https://services.google.com/fh/files/blogs/gcat_threathorizons_full_jul2023.pdf)

## "Practitioner, steel thyself!"

In my small homelab and demos setups, I'm generally very good at *NOT* hard-coding 'secrets'. I've been programming and DevOps-ing for many years and every time I need to handle a secret, I generally avoid putting them somewhere that isn't encrypted or purpose-built to regularly rotate and manage them.

That said, using a tool like GitGuardian Shield (ggshield) command-line interface (CLI), I found a few in my local private repos. I'm certainly not going to use something like ['semgrep'](https://semgrep.dev/) anymore, since they diddled around with close-sourcing and re-licensing, causing a [shitstorm](https://www.thestack.technology/semgrep-fork-opengrep/) for their users and leading to [OpenGrep](https://github.com/opengrep/opengrep).

Everyone makes a mistake from time to time and once made visible, it's hard to say "I'll fix that later" when screen-sharing and secrets are plainly visible to your audience. But this is just my dinky homelab, not a corporate honeyhole of Personally Identifiable Information (PII) or digital infrastructure, so I fix the few and no money lost...right?

## Why are mishandled secrets so dangerous

In corporate and government systems, leaking a secret can lead to disastrous consequences. In the past few years, a few examples:

- [breaches of national security and intelligence operative lists](https://www.cnn.com/2025/01/10/politics/chinese-hackers-breach-committee-on-foreign-investment-in-the-us/index.html)
- [leak of customer data, even from test environments](https://www.strongdm.com/what-is/t-mobile-data-breach)
- [corporate systems hacked by a teen](https://www.theverge.com/2022/9/16/23356213/uber-hack-teen-slack-google-cloud-credentials-powershell)
- [wide-reaching supply chain attacks](https://www.gao.gov/blog/solarwinds-cyberattack-demands-significant-federal-and-private-sector-response-infographic) exposing [incompetent management](https://en.wikipedia.org/wiki/SolarWinds#:~:text=On%20December%207%2C%202020%2C%20CEO,through%20the%20recent%20cyber%20attack.)
- [public data leaked due to administrator password in plain text](https://macpas.com/the-2024-national-public-data-breach/#:~:text=contained%20credentials%20for%20the%20website%E2%80%99s%20administrator%20stored%20in%20plaintext)

Well anyway, you get the point. We don't take secrets management (or financial retribution for leaks) seriously enough as an industry. But as mentioned, some of us do...even so far as to get their [masters degree](https://www.linkedin.com/in/ericfourrier/details/education/) and [start companies](https://www.crunchbase.com/organization/gitguardian) to address this problem (almost a decade ago).

# What you don't know WILL hurt you

When asked about secrets sprawl, many people in technology are either ignorant of the problem or too egotistical to be honest about it. I don't mean this malevolently, it's just the way humans are when they first encounter a new fact. The fact is, you have secrets and likely they've gone places you didn't expect them to.

Nevermind the armchair psychology (or psychiatry) that goes into IT culture...when you can get factual visibility on how sprawled secrets are in your organization. How do you do that though?

## 1. Identify the areas where secrets show up

If we stick to a 'data at rest' paradigm to start, sources of secrets are typically:

- hard-coded in ***source code repositories***
- non-encrypted ***databases***
- messages in ***chat and other collaboration tools***
- ***ticket details*** in issue tracking and ITSM systems
- not masked (or mask-togglable) ***configuration screens***
- running systems via ***environment variables*** printout
- ***test data*** sets and sources
- ***workstation configuration*** and settings saved locally
- stored ***photos and videos (screen sharing) recordings***

Note: you don't HAVE to cover ALL of these areas right up front...you can take bites off the apple, starting with systems you own or have appropriate access to. For instance, imagine you're the team lead in a DevOps organization and you have at least 'read access' to a handful of other teams' repositories; don't start with other peoples' problems, start with your own. Scan the repos you maintain first and remediate secrets exposure in them first before presuming to highlight problems elsewhere.

## 2. Make secrets exposure a *Work that is Visible*

You WILL most certainly find exposed secrets you didn't think were problematic, and you rightly will feel a sense of urgency to remediate these incidents. Don't panic, and don't knee-jerk react to them because in a rush to yank some exposed credentials, you'll likely take down services that other people depend on. First, collect feedback from the owners or maintainers, then come up with a plan for remediation.

After spending about a week working with the [GitGuardian](https://www.gitguardian.com/) platform, I have learned that it's fundamental to know which A) detects secrets in the above systems, and B) track the remediation of these secrets across multiple platforms. Having proof that an API token once copied into Slack, used in code, and then in a Docker container ***IS REVOKED*** really helps me sleep better at night.

As you incorporate more sources and honestly assess your surface area of secrets sprawl, a platform that automates the communication and remediation process across many teams and systems is just about the only way to get a handle over this stuff at scale. Any company *not* doing this ***WILL*** eventually get 'popped' and lose a lot of money.

## 3. Share what you find with your leadership

Many companies have a strong external posture about privacy and security, with plenty of corporate tools such as SSO, MFA, and maybe even a vaulting strategy or two in place to look like they've got a handle on secrets sprawl. But unless the CEO, CTO, and CISO are fully aligned on the danger of leaked secrets and the need for vigilance on secrets management, it eventually becomes a big problem (again and again). 

> Without an automated 'inoculant' to prevent bad behaviors from creeping back in, executives should *not feel like they deserve a good night's sleep* because the people-source of the problem is never checksummed.

Many companies have some level or structure around 'Application Security' (a.k.a. AppSec). It is the job of AppSec not only to advise and protect software and operations engineers around good practices relating to security, it is also an imperative that these teams report the complete and accurate state of secrets sprawl to their executives.

At least presented quarterly but maintained continuously, there should be data to prove that your organization is meeting its desired risk level in relation to application security and specifically the involvement of secrets. This is why both dashboards AND data exports for custom reporting by team is a critical part of whatever secrets management platform you chose. Maybe grouped by team or source systems, this data should include:

- **criticality** (how dangerous is the leaked secret)
- **validity (is the secret still working or not)
- **timeframes** (how long has it been a problem, how long did it take to remediate)
- **severity** (a combination of automated and human prioritization factors)
- **status** (is it open, being worked on, remediated, or resolved otherwise)

(Coincidentally, this is why I started a [repo](https://github.com/paulsbruce/ggdata) for companion tooling to GitGuardian's API, making metrics extracts in automated processes easy and customizable.)

# My recent experience as an interviewee

Last week I had the opportunity to share a presentation of the platform back to some folks at GitGuardian, eventually leading to a sit-down with their CEO. Like other France-based companies I've had the pleasure of working with in the past, the process was intentional and professional, and the people were genuine and driven. I would like to be one of their awesome [sales engineers](/sales-engineering/) because that's what I find I love doing at this stage in my life.

At a later time, I'll add a re-recording of my presentation here, though [my slide deck](https://docs.google.com/presentation/d/13QPBD-NdgTvY5JDKFtLUX1VDkYJZFXu3yW_gV4o4Ank/edit?usp=sharing) is available with speaker notes of what was said.

The two main things besides prep and practice work that got me to this interview over other candidates were: A) spinning up a from-scratch tech stack to demonstrate technical competence over their platform, and B) driving home the value in development cycles about 'no rework', which their sales VP absolutely loved.

I also called in a favor...quite literally...one of my prior account champions from a [very large health care provider] had a few minutes to talk with Eric the CEO about my involvement in a $1.3M deal. At the beginning of the interview, I asked if he would welcome a quick call considering his schedule was short, and surprisingly his response was positive and a bit pleasantly surprised too. Afterwards over text, my thanks to this champ resulted in them asking for an intro because...unsurprisingly...as it turns out, that big large company also sees secrets sprawl as a huge potential problem area that needs to be addressed. So, maybe that's Account #1 :D

My sense is that, even if we don't work together, we can look at this as a good learning experience about how genuine and driven people think alike. I respect the thing they've built and will happily recommend it to folks along my way.

# Secrets management in my own homelab

Well if I told you, it wouldn't be a secret now would it?

Just kidding, it's a mixture of:

- For self-hosted password manager, I use ~~Bitwarden~~ -> KeePass (has a mobile app)
- For my Kubernetes stuff, OSS Vault (even though I dislike Hashicorp for their Terraform licensing [tomfoolery](https://www.env0.com/blog/hashicorp-license-change) of 2023) which I can get around with the [OpenTofu provider](https://search.opentofu.org/provider/opentofu/vault/v4.4.0)
- Combination of [Cosmian](https://github.com/Cosmian/kms) and cloud-provided KMS
- Minimization of secrets in environment variables, preferring to use my own wrapper framework which uses [HVAC](https://python-hvac.org/en/stable/overview.html) for Python projects
- Secrets expiration of 1 month on almost all stored values
- Scripts to automate the rotation of app secrets with interactive admin credentials
- Notes (private git, Obsidian) on how to rotate admin credentials not including the admin secrets

## Obviously, this is overkill, right?

Nope. I like to know how things work, especially when it comes to personal digital security and privacy. Everything above is also represented in my data backup and recovery strategy. I also like to have multiple levels of use cases for *disaster recovery* that I can exercise on a semi-frequent basis. 

For me, this is like mowing my yard...there's a simple pleasure in curating and maintaining things that I know how they work. Like interviewing, it was nice to see a little bit into how a cool company works and take a solid crack at driving a job offer.

!["Image of a git commit for this article with the GitGuardian Shield command line interface reporting 'no secrets have been found'](/assets/images/2025/2025-02-09-dirty-little-secrets-commit-none-found.png)