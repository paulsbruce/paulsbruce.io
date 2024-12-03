---
layout: post
title: Sales Engineering in the Age of AI
date: 2024-11-02T08:31:41.000Z
type: post
parent_id: '0'
published: true
status: publish
categories:
  - sales engineering
  - artificial intelligence
  - career
  - LLM
  - RAG
  - cloud
tags: []
author:
  login: pbruce
  display_name: Paul Bruce
  first_name: Paul
  last_name: Bruce
permalink: /blog/2024/2024-11-02-sales-engineering-in-the-age-of-ai
---
![Sales Engineering in the Age of AI](/assets/images/2024/2024-11-02-sales-engineering-in-the-age-of-ai.jpg)

# TL;DR

- Human sales engineering isn't going away
- People who are better using AI will sell more
- Your experiences and expertise are still integral to closing well
- Explore both common and uncommon AI-based use cases

## Contents

<!-- toc -->

- [Preface: Looking Forward to Technical Sales with an Eye for AI](#preface-looking-forward-to-technical-sales-with-an-eye-for-ai)
- [The Big Changes In High Tech](#the-big-changes-in-high-tech)
- [The Changes in Customer Behavior](#the-changes-in-customer-behavior)
- [Adjusting to These Changes as a Sales Engineer](#adjusting-to-these-changes-as-a-sales-engineer)
  * [Time-saving Maybe's (the old tricks)](#time-saving-maybes-the-old-tricks)
  * [Use Cases in Tools and Platforms](#use-cases-in-tools-and-platforms)
    + [Customer Relationship Management (CRM)](#customer-relationship-management-crm)
    + [Example: How AI can help your relationships with account managers](#example-how-ai-can-help-your-relationships-with-account-managers)
  * [Be Prepared to Help with Integrations](#be-prepared-to-help-with-integrations)
- [Still-Human Areas for 'Finesse'](#still-human-areas-for-finesse)
  * [New Areas of Potential Impact](#new-areas-of-potential-impact)
- [Conclusion](#conclusion)

<!-- tocstop -->

# Preface: Looking Forward to Technical Sales with an Eye for AI

I have been known to be a bit of a skeptic, especially when there's a lot of unqualified human hype about a particular technology-related topic. It seems there's always some new shiny object to chase instead of closing out the planned and critical work with the known tools and processes at hand. 

Certainly in my summer projects, there's been a lot of hands-on grunt work, either in stealth prototyping or migrating some services from the cloud to my home lab. Just like the field work I've been doing as a volunteer on farms, these side-projects have kept my technical muscles exercised and ready to be put to future career use.

However, for the better part of a year now, I've been actively implementing LLMs both in my professional and personal writing. I also use Retrieval Augmented Generation (RAG) pretty extensively in my incubator work with [Growgistics](https://growgistics.io). Because I know this side-hustle needs a longer runway to get off the ground than I can afford right now, it takes second priority to getting a new full-time job.

As I pivot my professional career back to Sales Engineering, I bring these new approaches with me. After seven years of working either as a pre-sales engineer, customer engineer, or something else closely related and customer-facing, it's important to share my current thinking around how I approach new opportunities in technical sales and my future colleagues.

# The Big Changes In High Tech

AI isn't the only thing that's seismically shifted in the high tech sector. Post-pandemic return-to-office, workforce reductions, and Zero Interest Rate Phenomenon (ZIRP) bursting all play a part in why many software companies have gone through disappointing quarterly revenue realizations and have tightened their hiring and recruiting funnels. High tech has always been a volatile industry, but money is not easy to waste anymore. Many organizations have undergone some form of cloud reverse-migration or at the very least budgeting squeezes that make it near impossible to re-platform. Innovation budget isn't a real thing anymore in board rooms.

It's at this point, like with all other buzzwords, that every company must become an AI-driven one in some form or another, if for no other reason but to have an answer to the question from investors and customers alike, "So what's your AI strategy anyway?" In part, AI is buzz-worthy again thanks to LLMs which owe their existence to big data and large-scale compute. There's an existing ecosystem of BigCo's who store much of the world's data and tightly couple their storage and compute resources (as proven by your own ingestion and egress cloud bills). Data has always been their strategy, despite the last fifteen years of DevOps blah blah to get everyone to migrate to their clouds for reliability and automation reasons. 

> "Kubernetes is like cigarettes, an over-subscribable and costly delivery device used by cloud addicts." - me

# The Changes in Customer Behavior

But many companies are getting wise about how 'cloud transformations' aren't all that they're cracked up to be when, after over a decade and often multiple flip-flops from one BigCo cloud to another, still landing CFOs with BigCo sprawl and multiple contracts. This is especially true for companies that acquire other companies, and specifically due to the tech stacks being acquired with less than sufficient due diligence in the first place, even if acquirer post-acquisition architecture is (or worse is not) in place to assess compatibility.

To maintain customer interest and retention, BigCo's had to do something their less-ready customers couldn't in the foreseeable present, namely to create 'magic boxes' requiring massive compute resources to train, and only modestly more cloud specialized resources to realistically take advantage of at scale by their customers. And voila, you have LLMs, not simply the 1-100GB models themselves, but entire ecosystems of 'AI-as-a-service' profiteers. Of course at the top are BigCo clouds where the data and resources live, but then there's all manner of derivative middleware and packaged services companies more than happy to "add value" and charge premiums that cover the premiums they're being charged by the clouds they run on themselves. The LLM industry is an inevitable result of combining big data and it's need for oversized compute.

We should now ask, "who's customer are you anyway", evoking imagery of a formulaic stand-up comedy show that gets people to laugh at absurdity in the face of chaos. The customer is the one paying for something they can't/won't/shouldn't do themselves. Can you train your own LLM? Sure, though there are far more specific machine-learning model training uses your company has already invested in that are paying off in production. Will you train your own LLM? Probably not, due to cost and time. So, no matter what industry or level of skill your company has, it's likely better to just pay a piper so long as they can prove to you before AND after purchase the Return On Investment (ROI) of their solution within YOUR context. This was important before the recent resurgence of AI potion-vendors, but it's terribly important now since the budget you get now as two stipulations: 1) it must have 'AI' written on the front, and B) if it turns out to be a sham, those in the decision process of that spend are on the chopping block.

# Adjusting to These Changes as a Sales Engineer

A good sales engineer is equally proficient at technology and people. A great sales engineer seeks to regularly expand (not simply maintain) those areas of proficiency. The 'magic box' of LLMs can remain a box that you don't have to know everything about simply to benefit from it, though at times it's very fun to be curious about how things work on the inside. The question is: 

> How much of the AI craze is being forced on you instead of you proactively seeking which places AI is truly useful to apply?

Sales engineers already have to think on their feet, on live calls and customer visits, in discussions with their account executives and product managers, especially with their own leadership when discussing pipeline and commitments. There's a deluge of tasks and distractions throughout the day leaving little time to step back and think objectively about where to save time and improve engagements. It's not enough to be running a race; you need to know your direction, your position, and your ultimate destination.

In exploring this topic, and with a decade of experience in all manner of sales, marketing, product, and management experiences, I've come up with a few key areas and details beneath them that sales engineers and teams might benefit from discussing together.

## Time-saving Maybe's (the old tricks)

Below are some obvious use cases for LLMs such as ChatGPT in sales engineering activities. Some of these are likely already baked into existing CRMs, chat, video conferencing, and email platforms you use. Some might be in trial by colleagues or other teams such as product management, and it's useful to know where else and with whom AI technologies are being used (e.g. ask about your 'AI enablement strategy' if you haven't already/)

Some easy 'low hanging fruit' areas that increase productivity and proficiency in sales are:

- draft emails
- qualify or vet prospects
- create presentations (versions)
- simplify demo scripts
- draft optimal narrations for new features
- guide answers to live questions
- draft responses to RFPs and questionnaires
- pseudo/code examples

Note: it also really benefits sales engineers to use one-on-ones with other team leads or even host informal weekly sharing sessions across the company to provide space to learn what others are doing. In prior employment, I often held a 'mugclub' 30-minute chat twice a week, one in the morning and the other in evening, to encourage involvement from teams in Europe and Asia alike. Those who participated often came away with some new learning, but always at least some positive human connection.

## Use Cases in Tools and Platforms

### Customer Relationship Management (CRM)

Whether you like it or not, your company's CRM is the backbone of sales (as well as marketing and revenue recognition) operations. It's usually got a wealth of information about your customers including qualification notes, requirement documents, and forms they need filled out. This is like your take-home reading homework and, since details are progressively added during sales cycles, you should favorite or subscribe to all changes to opportunities you're involved in.

**Use cases:**
  - account status and at-a-glance summarization
  - customer activity on website, topical interest from pages and white papers
  - recent organizational and team structure changes
  - history of communications and thread summarization
  - messaging and value proposition delivery by account reps

**Tools and Platforms:**
  - [Salesforce 'Einstein'](https://www.salesforce.com/sales/artificial-intelligence/generative-ai-for-sales/) - draft emails, call summaries, close plans, account research, 'sales coach'
  - [HubSpot 'Breeze Copilot'](https://www.hubspot.com/products/artificial-intelligence-varb)
  - [Pipedrive](https://www.pipedrive.com/en/products/ai-crm/ai-automation) - email thread summarization, sentiment analysis
  - [Sugar CRM](https://www.sugarcrm.com/platform-features/intelligence/) - account summarization, revenue intel, response drafting
  - [Zoho CRM 'Zia'](https://www.zoho.com/crm/zia.html)
  - [Microsoft Dynamics 365 'Copilot for Sales'](https://learn.microsoft.com/en-us/dynamics365/sales/copilot-overview)

Because much of your team's interactions with customers are driven by your CRM, it's important to know how the AI features already in place work before talking about integrations. However, integrations are important because much of your customer interactions are done using other platforms such as email, chat/messaging, and video conferencing (conversation transcripts).

Pro tip: if your SalesOps teams have done a good job, they've (at least partially) locked down info on accounts and opportunities based on the related sales team members and corporate roles. So if you don't have access to information you need to know as much about your prospects and deals as possible, drive a conversation with your sales leaders and CRM administrators with specific needs and reasons.

### Example: How AI can help your relationships with account managers

Giving the people who feed you what they need is critical to healthy relationships between technical and business sales team members. As a sales engineer, you're an account rep's 'wingman' (ref: a co-pilot to the primary pilot) and should not only do your core job, but look out for blind spots and threats that they might be too busy to see. This depends on how seasoned and effective the rep is, but over time it pays off to help them to deliver in ways they personally value, and maybe better too.

AI (specifically LLMs like ChatGPT) can really help to improve your interactions with these important business partners by A) making your responses more succinct, B) including aspects of the engagement you otherwise would have missed, and C) accelerating your searches for important info.

Case in point: In 2019, I would regularly review some of the email drafts from my account reps, not to wordsmith, but simply to be on the same page in terms of key value propositions within the specific vertical or context of a prospect. Many modern AI integrations now pull things like pains out of prospect emails and might even provide differentiations to lead with. Likely though, your rep is going so fast that there are a few places where more optimal references to capabilities or customer stories would satisfy. Look out for these and maybe there's even a chance to refactor this back into the model training in use.

## Be Prepared to Help with Integrations

It's likely that, even after over a year of the above features in products being past their beta stage, your company will still be behind a bit on their efforts to integrate sales tools and corporate platforms together. This is to be expected and the best thing that you can do is to know which integrations offer the greatest benefits to your team. As mentioned earlier, conversations with other cross-team colleagues will help round out your speculations and option areas. Still, you need to do the context-specific research for yourself, even if it's just from your couch before or after logging in for the day.

In my experience, no integration across vendors is close to perfect. The more eyes are on it doesn't translate to the better polished it will be. The simple fact is that, and you seasoned sales engineers know this, product teams are often driven to prioritize features they can control all aspects of over capabilities that depend on factors outside their control, such as 3rd-party APIs and partner platform features. Unless a customer was oversold the importance of a specific integration and is shouting at the team about it, or if the integration causes unanticipated service reliability issues that affect the whole platform (often the case in high data ingest or export cases), there's always other integration surface area to deal with or promised features to deliver.

With this in mind, don't expect integrations between even your most utilized platforms to be bulletproof until your company has had enough time to proof and iterate on them. There should be an undeniably valuable business case, just like you make to your customers, for the additional cost and implementation effort each integration will have. As someone on the front lines and in the trenches, your part in this is to help your company make informed and right-timed decisions about valuable cross-platform integrations, starting with...you guessed it...pains in the form of cost (deals lost to speed or context, time savings per week on AI-assisted activities, etc.)

For further investigation, some additional integration areas to consider:

- Chat / Messaging
  - The ['Summarize' option in Slack](https://slack.com/help/articles/25076892548883-Guide-to-Slack-AI) is great for private/internal channels dedicated to a specific customer
- Email
  - [Outlook Copilot](https://support.microsoft.com/en-us/office/summarize-an-email-thread-with-copilot-in-outlook-a79873f2-396b-46dc-b852-7fe5947ab640) can summarize, draft, and coach you on responses
  - [Gmail includes 'Smart' reply, compose, and nudging features](https://blog.google/products/gmail/gmail-ai-features/) to make email communications a little more bearable
- Video/Voice Conferencing
  - [Zoom has AI-driven summary, catch-up, and prioritize capabilities](https://www.zoom.com/en/ai-assistant/) built in to their chat window
- Product Usage Analytics
- Support Desk

# Still-Human Areas for 'Finesse'

There are plenty of places where humans have the upper hand on (what someone recently said to me was the missing element to a prior candidate) 'finesse'. These are things that, at least for now, people can't answer on their own using Google or ChatGPT. They are statements and questions which include subconscious or unstated concerns easy for experienced professionals to pick up on and where an auto-generated answer would stand out as trite. A few areas from my experience are:

- Questions like "How easy is it to do business with your company?"
- Stories from first-person experience working with other customers
- Reference champions willing to take a call (which requires relationship development over time)
- Point-of-trust between (human) buyers and sellers
- Accountability for commitments between leadership and account management

Ultimately, the prospects or customers you talk to will unlikely ever entrust their final decision to AI responses, but unfortunately they may trust themselves to think they know your product or services based on AI or only public content. Again, the power of a great sales engineer isn't just to run canned demos and be likable, it's to listen and get to the root of what someone is really challenged with, then to map that to a provable solution.

From [a reddit thread](https://www.reddit.com/r/salesengineers/comments/11cwo6q/comment/ja5nn0h/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) I found, I think many responses were spot on, but in particular this one stood out to me:

> I think the human element sales engineers bring matters a lot. We are able to communicate with a business and technical audience, gather pain points, business value, etc. and craft a story and demonstration of how our product can be a solution for them. I don’t foresee AI being able to do that quite as well as humans, except maybe put together a canned demo video of a product for a prospect to see, but who wants that?

## New Areas of Potential Impact

Beyond the common AI use cases in sales engineering mentioned above, though maybe not yet implemented by your organization and you should, there are some other uncommon 'exploratory' places that I would love to investigate or hear word from others about.

- personal and targeted approach
  - corporate target specificity, challenges and initiatives
  - enrichment with industry/vertical domain context
  - coach professionals on succinct and direct communications
  - auto-completion of traditional frameworks like MEDDIC and 'boxing out the competition'
- improving of knowledge systems
  - use of AI / RAG over external documentation
  - use of AI / RAG over internal support case notes
  - additional sources of context for AI / RAG
- feedback loops
  - message recipient and conversation sentiment analysis as NPS
  - sales team internal insights and 'next steps' for improvement

# Conclusion

Everything has one or more 'hype cycle' phases and AI is no different. Like cloud transformations, AI transformations will never live up to all the expectations we tend to put on new shiny objects. That doesn't remove us from having to complete work in the traditional manners in place, try new approaches that balance speed and quality of our work, make the case to implement what works well, and reject what is fake.

It's our job to find the truly useful parts, and not the job of AI, at least not yet.
