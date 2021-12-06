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
- [4. Intelligent readiness pre- and post-deployment](#4-intelligent-readiness-pre--and-post-deployment)
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

# 2. Deep and wide telemetry for all cloud resources
# 3. Industry standardization of metrics and instrumentation
# 4. Intelligent readiness pre- and post-deployment
# 5. A common approach across custom and packaged apps
