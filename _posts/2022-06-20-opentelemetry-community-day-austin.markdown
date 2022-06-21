---
layout: post
title: "OpenTelemetry Community Day Austin 2022"
date: 2022-06-21T21:13:41.000Z
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
  - "OpenTelemetry"
  - devops
  - kubernetes
  - CNCF
  - "Cloud-native"
tags: []
author:
  login: pbruce
  display_name: Paul Bruce
  first_name: Paul
  last_name: Bruce
permalink: /blog/2022/06/opentelemetry-community-day-austin-2022
---

Preface: this blog post is just my travel log, personal reflections, and thoughts
 from my time conversing with other community members at [OpenTelemetry Community Day
 in Austin on June 20th, 2022](https://events.linuxfoundation.org/open-telemetry-community-day/). If any corrections or retractions need be made, [let me know](http://localhost:4000/contact/) and I'll be happy to do so!
 
![Before conferencing, debauchery of the best kind]({{ site.baseurl }}/assets/images/2022/06/20220619_105324.jpg)

- [TL;DR - One Community Day Is Not Enough!](#tldr---one-community-day-is-not-enough)
- [What is OpenTelemetry in Three Sentences](#what-is-opentelemetry-in-three-sentences)
- [Why OpenTelemetry Community Rocks](#why-opentelemetry-community-rocks)
- [Session Takeaways](#session-takeaways)
- [After-thoughts from Austin back to Boston](#after-thoughts-from-austin-back-to-boston)
- [Summary](#summary)

# TL;DR - One Community Day Is Not Enough!

- OTel adoption, use cases, and its community continue to grow rapidly
- Those that could show up, did, and it was worth the trip
- Need more consumer uses/lessons presentations, but...
- ...the un-conference afternoon sessions were fantastic!
- The project NEEDS more contributors, to everything really
- Regional and regular meetups on OTel will carry the community forward

# What is OpenTelemetry in Three Sentences

"OpenTelemetry is a collection of tools, APIs, and SDKs. Use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyze your software’s performance and behavior. OpenTelemetry is generally available across several languages and is suitable for use." - [opentelemetry.io](https://opentelemetry.io)

The above three sentences are a great start, but of course there's more to it than that:

- It provides a ***vendor-agnostic model for emitting traces and metrics*** (soon logs and profiling data) from systems
- Once implemented, it provides a staggering and necessary amount of backward and forward compatibility to not only its own componentry, but to a plethora of:
  - back-ends (a.k.a. DIY or hosted storage and insights solutions
  - processing filters (pipelines)
  - languages / runtimes / frameworks to encourage visibility into new and legacy systems
  - telemetry transformations
- It is a project in the CNCF that as of [August 26, 2021](https://www.cncf.io/blog/2021/08/26/opentelemetry-becomes-a-cncf-incubating-project/) is Incubating (next is graduated)
- It includes auto-instrumentation packages for top popular runtimes including (but not limited to):
  - [Java](https://opentelemetry.io/docs/instrumentation/java/automatic/)
  - [Python](https://opentelemetry.io/docs/instrumentation/python/automatic/)
  - [Ruby](https://opentelemetry.io/docs/instrumentation/ruby/automatic/)
  - [.NET](https://opentelemetry.io/docs/instrumentation/net/automatic/)
  - [Node.js](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/#instrumentation-modules)
- Its many parts are maintained by many really fantastic individuals, some working for/with vendors, others working as consumers and community contributors
- As its key componentries intersect many languages and runtimes, various SDKs are a changing tapestry of readiness [statuses](https://opentelemetry.io/status/)

![The least-complicated view of the complex landscape of OTel componentry statuses]({{ site.baseurl }}/assets/images/2022/06/20220620_091204.jpg)


# Why OpenTelemetry Community Rocks

In 2018-2019 I had a number of conversations ([re](https://www.youtube.com/watch?v=1O6hO8YLDwA)) with contributors to the OpenCensus and OpenTracing projects as they were realizing they needed to combine efforts into one project, OpenTelemetry. Unlike other online and project-driven "communities" I've experienced in the past, there was a sense of vendor-neutrality (though there's plenty of vendors in the observability space) and that this was an idea whose time had come.

Since then, my contribution has been to cultivate an inclusive and non-insular community of people that want to learn, share, and (maybe even) contribute back to the OpenTelemetry project. For three consecutive years, I've been organizing [o11yfest](https://o11yfest.org), an observability-focused and community-driven event. Each year, [we donate equal or greater than the operating budget](/blog/2021/12/accounting-for-privilege/) of the conference to some [really good causes](https://o11yfest.org/sponsor#contributor-sponsorship-details). It is purposely NOT part of the CNCF, as we want it to remain independent from that financial machine.

We also encourage contribution from everyone, not just voices from the CNCF and OpenTelemetry project, and put a fair bit of effort into [screening out vendor/sales pitches](https://o11yfest.org/sponsor#call-for-proposals) and blah blahs. This year (2022) in May, we saw more attendee engagement than the past two years, and even had a number of people submit ["pre-action" videos](https://o11yfest.org/2022/preaction) since all of our pre-recorded talks were available before the conference.

Community is what you make it. So I'm doing my part, what I can, and looking forward to encouraging others to do so as well. In the next coming months, we'll be partnering with regional OpenTelemetry and observability meetup groups to double-down on contributing (hopefully and specifically about helping OpenTelemetry with their documentation needs).

# Session Takeaways

## Keynote: State of the OpenTelemetry Community

Alolita started out with some project milestones and history.

![OpenTelemetry Milestones](https://pbs.twimg.com/media/FVs7MxgVIAAdTVN?format=jpg)

- Metrics delayed b/c ... priorities and proper core
- A variable landscape of readiness, with logs on the horizon
- OTel is growing! - how "community" is measured, only contributions?

![Contribution Sources](https://pbs.twimg.com/media/FVs7WtfUsAAkmzO?format=jpg)

- "Independent" contribution group adds up
- "Compliance tests" (re: prometheus collaborations)
- Semantic Conventions, EU Feedback, Client Telemetry (front and back end signals)
- Client Instrumentation, Agent Management, and Profiling (re: [Ryan Perry, Pyroscope.io](https://pyroscope.io)!)
- So [maybe too] many ways to get involved; priorities and batch-fit to bandwidth
  - Running OpenTelemetry meetups and publishing to the otel site

## Community Updates

OTel Comms SIG lead Austin Parker shared additional/complimentary info and thoughts
 about the community at large

- It's been to years since the last (virtual) OTel Community Day, almost all new faces
- Growth! 2x contributors, 3x contributions
- "Public Adopters"; and info shared by "vendor-partners"
- "Documentation needs help!" - CNCF Slack #otel-comms
- CNCF now accepting ["OpenTelemetry Ambassadors"](https://www.cncf.io/people/ambassadors/)

![Community Update, Austin Parker, 2x growth in contributors, 3x growth in contributions. Impressive.]({{ site.baseurl }}/assets/images/2022/06/20220620_093444.jpg)

## Unconference Session Topics

## Maintainers Panel

![Panel: Austin, Daniel Dyla, Jack Berg, Aaron Clawson, and Amir Blum]({{ site.baseurl }}/assets/images/2022/06/20220620_110008.jpg)

- challenges
  - ??? (something I missed, need to coordinate with others)
  - [contrib repo](https://github.com/open-telemetry/opentelemetry-collector-contrib): how is it maintained, patches applied, etc.
    - single owners for specific instrumentation libraries
  - not enough engineering hours
    - note: how would we incentivize contributions (not just usage and issues)
- Q: how do you relate [slack](https://cloud-native.slack.com/archives/C03JFUAJXT4/p1655738403456849)
  - Dan: bubble of "enlightened"...??? (will reach out to Dan in CNCF for actual point made)
  - Jack: if your biz has dependencies on an OSS thing, it's strategic to have eng knowledge via contrib
  - Aaron: start small, even 10% of time is a big ask; easier to "made a fix, can I release?"
  - Amir: I don't do it for the vendor...infers trust over "planned work vs. bandwidth"
- Q: Biggest challenge getting library authors to instrument their libraries natively...? [slack](https://cloud-native.slack.com/archives/C03JFUAJXT4/p1655738729865949)
  - Amir: implementing natively right now may be...complicated...as some things aren't yet GA'd
  - Ted (Young): not quite yet, need things to be stable
  - Dan: wouldn't want to ask someone to make effort only to break it for them later
- NOTE (Austin): need help with OTel Collector and output being 'certified' in supply-chain
- Q: What have been the biggest challenges with implementing the API and SDK across the supported languages in a standardized way? How much does the SDK configuration feel 'native' to the language?
  - Dan: forcing things like naming conventions
  - Jack: the spec is more ergonomic guidance
- Q (Audience): [observability at Adobe] For other SIGs, planning to add auto-instrumentation as standard across
  - Jack: (Trask? should have been here, Java auto-instrumentation)
  - Dan: When APIs aren't stable yet, any change means changing lots of dependencies
  - Dan: JS backwards-compat esp. around Node packages has been tricky; we're working on it
  - Aaron: it's tough for Go, can't patch just wrap things; it's a monumental task, maybe wrapping is the best
  - Dan: the Operator DOES do some automatic injection...Node, Python, Java
- Q: What's the recommendation on PULL/PUSH based methods, and how does OpenMetrics fit in?
  - Aaron: if you have something that's working, use that. OTel collector is a bridge between app and backends.
  - Dan: challenge the assumption that Pull-based "won", common deployment is to chain collectors
  - Jack: The collector is your friend, it's a translator and an enricher of telemetry
  - Dan: about interoperability, we've been working a lot with Prometheus team closely
- Q: If you *did have all the contributor bandwidth you could desire, how would it be put to best use?
  - Dan: seeking and placing diversity of skills and expertise that isn’t already in the project
  - Amir on ease-of-adoption, which I think is already starting to be changed via the End-user Feedback group.

## OpenTelemetry and Service Meshes

![Michael Haberman being awesome in a very short period of time]({{ site.baseurl }}/assets/images/2022/06/20220620_110634.jpg)

After beers with the Aspecto team on Sunday at [Easy Tiger](https://www.easytigerusa.com/), it was clear that these guys are on a mission to put a [much needed] dent in our universe. On the walk back, Eran talked about how being a founder in this space requires an extreme amount of focus, which IMO they have and are demonstrating on multiple fronts.

Without betraying any particular details, the conversation revolved around themes like "how contributing to OTel isn't at all about what your employer pays you to do", "how much 'magic' people expect without doing anything", regulated industry constraints with adopting recent/moving/early OTel components, and how much interest there is in the thriving observability community in Tel Aviv.

The short is, for a Boston boy like me, these guys know their shit and work hard as fuck.

Michael, who coincidentally [spoke about Malabi at o11yfest in Ma](https://o11yfest.org/speakers/michael-haberman)y, made the following great points:

- just because you turn on traces doesn't mean that you are doing tracing
- traces without shared context are just more noise to signal ratio
- the context added via mesh about service paths is critical to understanding versioned routing
- deployed in a service mesh, the mesh IS part of the app, no just wrapping
- trace "brokenness" includes no root span; gaps in traces indicate a critical lack of context propagation
- bad news:
  - increase cost (more spans)
    - what about selective/adaptive propagation?
  - head sampling (only percentage, thus some waste)
    - based on root from client? - lots of work
  - Configuration (Envoy changes needed to export OTLP)
    - Maybe next year, we'll have it all solved
- what's interesting about meshes
  - many companies he talks to who are using meshes, are also using an ecosystem of additional functionality
  - just like plugins, they can cause issues when combined together
  - which means we NEED better telemetry and tracing

![Aspecto founders, Eran Grabiner and Michael Haberman, and the very excellent OTel maintainer, Amir Blum]({{ site.baseurl }}/assets/images/2022/06/20220620_134449.jpg)

## Personal: Hiring Break

I then took time to meet with a late-stage candidate for Product Manager of our Incubation Engineering group.
[My group](https://www.tricentis.com/company/careers/) got to an offer acceptance, so that was a really nice lift going in to the afternoon sessions.

![This happened because we volitioned it into the universe]({{ site.baseurl }}/assets/images/2022/06/2022-06-21-closed-on-inceng-pm.png)

## Lunch and Networking

Since the event was somewhere between 50 and 75 attendees, I found it very easy to be cycling back through the clusters of folks who I had already chatted up, all within about 45 mins. This was actually nice as a forcing function to really strike up or contribute to meaningful dialog, since there was very little room to wander.

![Sharr Creeden, Henrik Rexed and me!]({{ site.baseurl }}/assets/images/2022/06/20220620_085532.jpg)

## Debugging OpenTelemetry

Sadly, having had to take a call, I the first part of this lightning talk from Ted Young. However, subsequent comments from other attendees confirmed what everyone already knows which is Ted is awesome and 80% of the time he speaks it is useful...all the time. [His 2021 o11yfest presy about The Value of Design in OpenTelemetry](https://o11yfest.org/speakers/ted-young) stands as true amidst a year of major efforts to GA as it did back then.

However, I spent the better part of the afternoon in un-conference discussions
 with Ted and other attendees about Tracing and Testing topics, so while I missed
 his most recent incarnation of coolness, and his body of work speaks for itself.

## Breakout Sessions

### eBPF and auto-instrumentation

The best part of the day, seriously, but as open and engaged conversations go, I
 was more invested in the people in the room than taking notes on my laptop.

The short is that most people in the room needed a simple description of what [eBPF](https://ebpf.io/) is
 and very few people who were versed on the topic. Key taking points are:

- lots of buzzword interest in "eBPF" as an emerging topic
- many people looking for a magic solve to "observability" via auto-instrumentation
- how does eBPF improve the auto-instrumentation motion
- auto-instrumentation...does it help teams adopt better telemetry or impede intentional thought
- how auto-instrumentation is a stepping stone to make teams want more...and do more to get it

Fortunately, we had an amazing person (Libby) who volunteered to capture topics on
 the sketch board.

![Topics and key points from the discussion on eBPF and auto-instrumentation]({{ site.baseurl }}/assets/images/2022/06/20220620_143354.jpg)

### Sessions I didn't attend (but would want to)

Sadly, I cannot physically be in two rooms at once. Hopefully there was a recording
 of this discussion, but if not and someone has notes, I would LOVE to link to them
 from this post here.

- Intermediate OpenTelemetry and Signal Correlation
- Continuous Profiling
- OpenTelemetry Collector


### Tracing / Open Telemetry for Testing

Again, being invested in the conversation and capturing meaningful topics was more
 important than taking copious notes. As such, I did take the cue from Libby and
 make sure that at least some of the key points of the discussion were documented:

![Key discussion points about OpenTelemetry and Testing]({{ site.baseurl }}/assets/images/2022/06/20220620_160056.jpg)

# Summary

Worth the trip. Lots going on in this space. Needs contributors, not simply adopters.
 Get involved. Reach out to me or any of the visible core maintainers. Expect growth.
 Come be part of the community as it thrives.

<!--
# After-thoughts from Austin back to Boston

- OTel is a way for tools to truly be "part of the chain"
  - you must respect inbound, not just outbound context
- Get involved in the End-User Feedback and Profiling SIGs
  - Profiling: Pixie is the big player, but Pyroscope is fully OSS -->
