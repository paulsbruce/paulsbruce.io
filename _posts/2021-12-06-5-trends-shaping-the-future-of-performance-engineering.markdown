---
layout: post
title: 5 Trends Shaping the Future of Performance Engineering
date: 2021-12-05T15:47:35.000Z
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
  - performance
  - testing
  - engineering
  - continuous
  - DevOps
tags: []
author:
  login: pbruce
  display_name: Paul Bruce
  first_name: Paul
  last_name: Bruce
permalink: /blog/2021/12/5-trends-shaping-the-future-of-performance-engineering/
---
As part of my usual duties, Tricentis asked me to name a few key themes and trends
 that I've seen during customer engineering work with forward-thinking customers,
 ones that will likely be a big part of performance engineering in 2022.

There is no predicting the future, there's only keeping your eyes and ears open
 and developing intuition, then collecting evidence for AND against hypotheses.

Before it is recorded and published on Dec 14th 2021, you can sign up [here](https://www.bigmarker.com/techwell-corporation/5-Trends-Shaping-the-Future-of-Performance-Engineering). After it is broadcast, I will update this article to provide a link to the video (may require signup).

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQCtC7zalzcJkXfSYgFXcKyFoek4pTX494cZglTU303devTx1csCx-CBb-PrCroklIaCjunraJ19SI2/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

- [1. Resiliency and controlled chaos engineering by default](#1-resiliency-and-controlled-chaos-engineering-by-default)
- [2. Deep and wide telemetry for all cloud resources](#2-deep-and-wide-telemetry-for-all-cloud-resources)
- [3. Industry standardization of metrics and instrumentation](#3-industry-standardization-of-metrics-and-instrumentation)
- [4. Intelligent readiness pre and post deployment](#4-intelligent-readiness-pre-and-post-deployment)
- [5. A common approach across custom and packaged apps](#5-a-common-approach-across-custom-and-packaged-apps)

# 1. Resiliency and controlled chaos engineering by default
Chaos engineering has been around for a while, but it often takes quite a while for
 good ideas and practices to mature in the crucible of large at-scale organizations.

Many of my largest customers have some form of failure more injection in play during
 large load tests, often using tools like Gremlin or the Chaos tools from Netflix
 to simulate infrastructure flakiness and unavailability. This is mostly in lower
 environments, though some have small pockets of already-rugged services in production
 that are regularly rotated and decommissioned as part of a plan.

They also utilize load testing because there's very little you can defensibly glean
 from injecting chaos/faults but then manually testing things out as only one user.
 Load testing, even at non-massive volumes, provides statistical relevance to errors
 observed and potentially correlated to chaos exercises.

After participating in a small back-and-forth on DevOps Unbound episode with the very
 awesome [Tammy Bryant Butow](https://www.linkedin.com/in/tammybutow/), it's clear that
 performance and reliability teams must
 work together to advocate and grow both performance testing and chaos engineering
 practices together; there's little point in doing either without seriously considering
 the other. Yes this means I'm saying that load testing alone is not enough; it's
 a good first step to exercising your systems pre-release, but the next step should
 use chaos/chaotic fault injection to really test your system's true failure states.

A few resources if you'd like to hear more about chaos/resiliency and performance testing:
- [bit.ly/chaosdeck : A slide deck I use for tech intros and workshops](https://bit.ly/chaosdeck)
- [bit.ly/chaosvideos : A playlist of really good videos on chaos testing](https://bit.ly/chaosvideos)
- NeoLoad + Gremlin: [Webinar](https://youtu.be/K-MxfuzOdU8) and [White Paper](https://d28h099uturm62.cloudfront.net/wp-content/uploads/2021/03/Datasheet-NeoLoad-Gremlin-EN.pdf)

# 2. Deep and wide telemetry for all cloud resources
In the past, we engineers have always needed more information to diagnose issues.
 This often took classic forms of monitoring servers directly: [CPU, memory, disk, and network](https://youtu.be/YlAqs8cWP2I?t=272) utilization. Though sometimes this kind of direct access is still necessary, it's problematic from
 a security and cloud-based infrastructure perspective to allow this. It's far more
 common now to see application performance monitoring (APM) agents take the responsibility
 of being on-server, in-process, actors that safely ship both classic and deeper telemetry about
 the state of our servers ***AND*** service health back to a central system (e.g. Dynatrace, Prometheus, DataDog, etc.)

But going deep isn't always enough. In distributed systems and deployments using
 shared infrastructures (think blade servers, cloud racks, Kubernetes clusters),
 it's also just as critical as 'going deep' to also be able to 'go wide'. In other words,
 measuring as many of these shared components as feasible, specifically because
 the parts affect each other. One pods spike is another pods noisy neighbor. No
 cloud VM's spec is ***guaranteed***, it's all best-effort at the end of the day.

There are also 'wide metrics', such as number of pod or VM restarts, that only a
 management layer captures since the individual component in this case dies unexpectedly.
 I also include networking infrastructure such as security firewalls, software-defined
 routers, and load balancers into 'wide metrics' because they often cause issues with
 performance yet serve many services. Not having access to firewall telemetry that
 correlates to socket timeouts in a load test can be maddening because you can't
 prove or disprove if that particular device is part of the issue or not.

Even (and sometimes especially) with SaaS providers whom you trust to fulfill their SLAs,
 their Ops teams have implemented rules for detecting and rate-limiting, which don't
 show up until you start hitting them. From [my work](https://paulsbruce.io/blog/2019/08/on-lack-of-transparency-in-saas-providers/) with clients using various Salesforce
 SaaS platforms, 'governers' (their name for these rules) are usually undocumented publicly,
 and sometimes not documented well or even at all internally, and diagnosing why
 you're hitting performance limits on their SaaS platform(s) takes weeks of back-and-forth
 with their technical teams.

The point is, the more telemetry we have, both deep into the components and wide
 across runtime management layers, the more likely we can diagnose what the biggest
 contributing factors are to a performance or reliability issue.

The future of telemetry is looking better and better year after year though. Every
 cloud provider typically has (low cardinality, low granularity) metrics about resources
 you use there. More organizations are expanding or shifting their APM platform investments
 to support cloud-based, not just in-premise, resources. And as Kubernetes adoption
 continues to grow exponentially, APMs and CNCF tooling (such as eBPF) is getting
 deeper and wider about providing centralized reporting for telemetry.

Some resources to learn more about deep and wide telemetry:
- [PromCon EU 2019: Containing Your Cardinality](https://www.youtube.com/watch?v=49BGvC1coG4)
- [PromCon 2018: OpenMetrics](https://www.youtube.com/watch?v=Za7vmKr11cQ)
- [Metrics for Kubernetes System Components](https://kubernetes.io/docs/concepts/cluster-administration/system-metrics/)
- [Blog: On Lack of Transparency in SaaS Providers](https://paulsbruce.io/blog/2019/08/on-lack-of-transparency-in-saas-providers/)
- [Prometheus Query Examples](https://prometheus.io/docs/prometheus/latest/querying/examples/)

This leads us nicely into the next topic...

# 3. Industry standardization of metrics and instrumentation
Now that there are so many ways to collect telemetry, inject tracing, and correlate logs,
 the choice for which technologies and platforms your organization should support
 is increasingly complex. Each team has their own preferences for which tools and
 technologies to implement, even if there are prescribed 'best practices' and already
 paid for platforms.

And if you were to propose that one of your important services change how it captures and
 ships telemetry (often a massive rewrite for legacy codebases), you'd likely face a huge
 battle with product teams who already have an overbooked backlog of both new features and
 tech debt items to take up their time. So how can we make this better moving forward?

The short answer is for the ***industry to standardize*** at least some of the core
 structures, formats, and SDKs for instrumenting and embedding telemetry code into
 your apps and services. A *huge* amount of effort has been going on for years
 in the CNCF OpenTelemetry (OTel) project for this exact reason. Utilizing OTel
 for all greenfield/new development is a great start, and it's not that terribly hard
 to retrofit for legacy systems instrumentation as well.

And 'observability' is not the only buzzword getting standardization love these days.
 Remember when APIs were the new cool kid on the block? Well beyond the API definition
 wars from 2015, we now see people realizing the importance of standards around
 measuring non-functional aspects of APIs as well, with the recent formulation of
 ['The API Rating Agency'](https://thenewstack.io/api-rating-agency-brings-consistency-to-api-measurements/).

There's even a high-level standard for enterprise DevOps principles and practices
 (that I and others worked on) called IEEE 2675-2021. I specifically made sure that
 the vision and outcomes statements of the Measurement, Risk Management, QM, QA, verification,
 and validation process sections had ***HEAVY*** helpings of how to accelerate telemetry
 and synthesis back in to decision processes.

But staying with performance and reliability, OTel is definately worth getting up to speed on.
 To learn more about the CNCF OpenTelemetry project, here are a few resources:

- [o11yfest.org](https://o11yfest.org) (free signup for two days of presentations)
- [Observability Primer, LYIT Guest Lecture, Paul Bruce](https://www.youtube.com/watch?v=C1nvcLapcyA&list=PLFXQmSmq7uXQU3IrbypXKetf5Tos_XWOU)
- [The New Stack: API Ratings agency...](https://thenewstack.io/api-rating-agency-brings-consistency-to-api-measurements/)
- [Announcing IEEE 2675-2021: DevOps Standard to Build Secure and Reliable Systems](https://www.youtube.com/watch?v=8Og8rhjqgQo&list=PLFXQmSmq7uXQU3IrbypXKetf5Tos_XWOU&t=63s)

# 4. Intelligent readiness pre and post deployment
When we talk about being 'ready', it matters what we precisely mean. What does it
 mean for you to be ready to release to production users? How is this different
 than being ready to deploy to a production-like environment for load testing?
 Who defines what 'ready' means in these and other contexts?

What we're really talking about in most of these cases is ***confidence*** people
 have that what they're about to do will have the anticipated affect on
 users or the business under an appropriate level of risk (never zero).

The simplest answer I can provide is that 'ready' should be:

- ***clearly defined***, in terms of
  - process to complete correctly
  - evidences of satisfactory success
  - risk mitigation plan, should issues arise
- ***measurable*** in concrete terms, such as
  - SLAs, SLOs, SLIs agreed to by all stakeholders
  - both before and after release to production users
- ***communicated*** to all stakeholders
  - what the rollout plan is
  - what success signals to look for
  - what failure signals to look for
  - how to raise your hand if something doesn't look right
- ***actively managed*** by a product team lead
  - but also include on-call plan for devs and infra/ops
  - and include appropriate status updates to stakeholders
  - and who never assumes that things are working as planned

Okay, so for performance engineering, what does 'intelligent' readiness look like?
 Well there are a lot of the points above that sound like they have to be done
 by humans (who are intelligent), but many of them are patternable and repeatable
 once some of the basic thinking is laid down, and so can and should be automated.

Performance tests shouldn't all have to be special-snowflake, big-bang, complex
 operations. In fact, most performance testing should be frequent and small, focusing
 on API, sanity, and low-volume validations early on in the development lifecycle.

As such, it is easy to 'clearly define' what the performance testing process is,
 both on your organization's wiki or knowledge management platform, and most certainly
 in the automated pipeline scripts that inscribe the repeatable process into your
 continuous delivery motions.

All testing, performance or otherwise, should produce clear and trustworthy ***exit signals***,
 both in the case of successful completion and unsuccessful. Usually my clients
 use load test SLAs/thresholds around error rate and response times under sustained
 load to determine if the test should keep going or 'fast fail'. If the load test
 infrastructure or project sources have issues, this would be what I call a 'catastrophically unsuccessful' test, as opposed to a test that completed but didn't meet the final
 performance acceptance criteria that the team agreed to. Except for short, passing sanity
 tests, all test runs and results should be retained for an appropriate amount of time.

Getting 'measurable' readiness means that you can demonstrate evidence not only
 before deployment and release to production, but afterwards as well. Some people and
 systems lend themselves to testing in production more than others, and most clients
 I see 'load testing in prod' are usually doing it against production resources that
 have not been rotated in to use by production users. This kind of capability takes
 rollout and deployment maturity many organizations still lack, so many just opt
 for pre-release load testing in either production-like staging environments or
 something close to that. The point is that the same testing you do in lower environments
 should be easy to switch over to other higher environments that need a pressure
 check before *releaseing* to production users.

***Communicating*** these efforts is important because when a load test runs somewhere,
 someone will definitely feel it, whether that's other test engineers using that environment
 or the infra/ops team getting alerts. This is usually why you don't trigger big
 performance tests on every single code check-in, not to mention the time budget,
 the system under test usually takes resources, and if shared/permanent impacts others.

***Active management*** of performance engineering tasks such as big load tests
 isn't hard; this is usually the product team asking for someone to run the test.
 What's harder is to build continuous performance testing practices that communicate
 success and failures back to the product teams A) at the right times, and B) with
 the right level of actionable detail.

There is rarely a 'silver bullet' in performance
 engineering, no single 'root cause'...until you step through things to find a specific
 issue causing lots of symptoms. Sure, 90% of the time, it's the database; but then
 there are times it's not. What people often mistake as 'single root cause' situations
 are actually a biggest contributing factor that's loud enough and that you happened upon
 first. There are always more than one contributing factor, and once we find something
 we're often too busy to look around for the others.

The point is here, there's no one optimal performance report format or easy way
 to identify 'root cause' in all cases, not without expertise and experience guiding it.
 There are however common and practical points of information in load tests, such as:

- metrics perceived by the load platform
  - RED signals: rates, errors, durations
- metrics observed via monitoring
  - USE signals: server/service side Utilization, Saturation, and Errors
  - Wide metrics: monitoring storage, management layers, and network devices
- notable moments and in-cycle events:
  - chaos testing activities
  - re-balancing or optimization rules being triggered
  - real-time manual configuration changes

By visualizing these together, calling out 'interesting moments', and constantly
 taking action to automate known faults and anti-patterns into actionable outcomes,
 product teams can effectively move performance testing into continuous delivery.


# 5. A common approach across custom and packaged apps

I often hear that "the API teams are doing their own thing" or "testing the
 apps/services we build is very different from 'commercial of the shelf' (COTS) products."
 I know what my clients are talking about, I get it. Testing Workday and JIRA
 is very different than that your organization's e-commerce site or claims processing app.

Mostly it boils down to:

- varying levels of 'testability' in the Systems Under Test (SUT)
- low expertise or experience with the intricacies of the SUT
- lack of visibility into the back-ends of the COTS apps (see prior comments about Salesforce)
- low/no direct interaction or communication with SUT dev team(s)

Especially with packaged apps, it's not so much the app itself that's causing
 performance issues, but rather all the customizations and the operational environment
 configuration that fundamentally change the definition of what a COTS vendor does
 to verify the performance and reliability of their core deliverables vs. how it
 actually works for your organization as deployed. If you've ever gone through an
 SAP enterprise implementation, you might be familiar with their 'configuration testing'
 which includes load testing once customizations and environment are loaded up.

With custom apps, you usually have more of an ability to reach out to teams internally,
 even if they're contracting, to ask questions. There are often architectural diagrams
 and systems (of record, such as APM platforms) already in use that you simply have
 to ask for access to and explain why it's important to the work you've been asked to do.
 If you find untestable situations, call them out, make sure you add a testing user
 story to the product team's backlog and get the PO and Product Management to assess
 the risk it represents. If they can't do that, call your security/compliance office.

In both custom app and packaged app cases, you can always make progress on at least
 two of the four bullet points above, immediately. It might not be easy...certainly getting
 interactions with a JIRA dev team at Atlassian is far harder than say sending
 a virtual 30min meeting invite to an internal Product Owner (PO) and their lead
 developer. Sometimes the required level of expertise with a complex web app takes
 longer than provided to build, and that's not an easy discussion to have with some
 engineering managers. And of course it's easy to blame tools and other people.

A bad engineer blames their tools. It is not the tools we use that make us good,
 but rather how we employ them.

How we employ testing tools should be guided by what approach to testing we have
 decided to take. If something proves to be inordinately hard to test, that's
 an indication to go investigate how others have solved the problem, or ask the
 persons responsible for building it how they would approach validating that it
 works well.

In a nutshell, performance engineering has been and even more needs to consolidate
 their expertise, their practices, and their tooling to scale it to others in their
 organization (don't forget that continuous pipelines are like another person too).

# Summing It All Up

In my customers and clients, I see these trends growing, some better/faster than others.
 It is encouraging to see this, but also compelling me to encourage others to grow
 and improve their performance and reliability practices.
