---
layout: post
title: "Greenhouse Prototyping - Part 1 - Arduino and Microbit"
date: 2024-08-15T08:31:41.000Z
type: post
parent_id: '0'
published: false
password: ''
status: publish
categories:
  - microbit
  - arduino
  - technology
  - tinkering
tags: []
author:
  login: pbruce
  display_name: Paul Bruce
  first_name: Paul
  last_name: Bruce
permalink: /blog/2024/2024-08-15-greenhouse-prototyping-part-one-arduino-and-microbit
---

![Earn context. Incubate ideas. Be a ‘we’. Picture of a self-standing, Lego-based sensor prototyping system.](/assets/images/2024/2024-08-15-greenhouse-prototyping-part-one-arduino-and-microbit.jpg)

Over the past month, one of my 'fun' summer side-projects has been to revive the Arduino stuff shoved away for almost a decade in storage. Adding to that, I also have a bunch of Microbit (v1) stuff and all the analog and digital sensors from Keyestudio, Adafruit, and the random assortment of less-documented vendors. 

Fair warning: if you simply want a tutorial on robotics stuff, this post is more context than tech show-and-tell. After more time in tech than I'd like to admit, I have come to the belief that a problem is equally and more often important to understand than simply generating things that look like 'solutions' or ideas for how to address the immediate circumstance, only sometimes synonymous with 'the problem'.

So I *do* have an impetus, besides geeking out like the former kid I am, regarding my current device work and expressed in user story format, which is:

> As a greenhouse operator, I want to be able to check in on its conditions as well as be notified when specific conditions are (or are not) met.

# Haven't These Things Been Addressed Before?

The answer is 'yes' and 'no' and everything in between depending on the problems and conditions to be addressed. At the end of the day, it's almost always in some way about money. How much of your money do you spend to solve problems you don't want/need to solve? Many independent farms eventually end up using spreadsheets because either the system(s) they've tried don't solve real problems, they're inflexible or non-augmentable with custom approaches, or simply don't encourage collaboration and customization enough.

There are a variety of consumer product which already help ***some*** of the logistics required for a cogent and resilient greenhouse management solution, and there are hyper-proprietary large-scale commercial solutions...but these are almost always cost-prohibitive to real farmers unless they make more than $2.5M/year in gross revenue. Scoped specifically to greenhousing, the objectives and outcomes of the farm operators ultimately dictate what is needed in a right-fit 'digital' (e.g. software and hardware based platform) solution. If you're not solving your consumers biggest challenges, needs, problems, or pains then what in the unholy fuck are you doing?

# The Conditions Depend on the Greenhouse 

These conditions include directly observable environmental variables such as temperature, humidity, light, wind, atmospheric pressure, airflow, and soil moisture which should be independent from the power grid and should provide their data to centrally managed data aggregation resources as real-time as feasable. This means relying on stored solar power as well as occasional dial-in to upload data.

Greenhouses are also often affected by indirect conditional factors such as power to various electronic devices (fans, heaters, pumps, and controllers), pressure of irrigation-related components, and things that are inside it which may or may not exacurbate the need for particular dynamics.

Ultimately the value of greenhousing requires competent and intentional management which from a strictly for-profit perspective cannot be commidotized easily, notwithstanding the [Nordic and Scandinavian](https://www.diva-portal.org/smash/get/diva2:1621813/FULLTEXT01.pdf) modern sensibilities over the matter of sustainable agriculture, and requires a contextually deeper conversation around land/space management and more importantly ownership.

# Field Examples

The first example comes from helping out at the [New Entry Sustainable Farming Project](https://nesfp.nutrition.tufts.edu/), a 25-year running Tufts extension program that used to be in Dracut and now is a bit closer to me in Hamilton MA. They have at many greenhouses, some lent to the independent farming businesses that they help to incubate, but others used to process their own produce for local restaurants and their [CSA](https://nesfp.localfoodmarketplace.com/Products).

In the past two weeks, we've harvested at least five half-acre long rows of white and red onions, and processed them for storage. One greenhouse simply has wood frames with wire mesh that the onions dry off on for a few days before then being further cleaned and processed into boxes for consumer use. The greenhouses are at least 40x20 meters with industrial fans installed at both ends for airflow and even on a sunny day top out at around 30C (~90F) degrees. Key is their use of greenhouse resources, which is ALWAYS seasonal and today is the need to dry out onions.

The second example is from Marshview Farm in Ipswitch, and much simpler. They use greenhouses in the early season largely to grow their planting starts. The limited greenhouses are only then used in the after-season for workshops on things like crafting wreaths and other winter activities, and NOT to grow greens all year long because heating greenhouses for some five colder months is not economically feasable for the particulars of that operation.

The third example is on a much smaller farm on the other side of my town. Some of their greenhouses are used to grow a variety of veg all year long, but in the main season they are still used prodigiously to grow awesome veg for their restaurant deliveries and personal use. The rest is a cut-flower business of which the owners are amazing, their crew is fantastic, and their outcomes are an equally pleasant surprise year long. All manner of peppers to eggplants to tomatoes to melons...thrive in very warm and breezy conditions. These conditions take careful management including constant weeding, multiple types of irrigation, timed airflow, compact spacing, minimization of human-driven disease transfer, intentional transplanting and [paper chain pots](https://paperpot.co/what-are-paper-chain-pots/), thinning and airflow management...

The point of all this context is to underpin the need for entrepreneuers to understand the long-running context, constraints, and dynamics of geograpically and ecologically specific farming opportunities everywhere. For me and my small spaces, personal or volunteering, the underline is both independent and communal. There is a clear gap between the value of (largely tech hosted) spreadsheets and (now, largely under-subsidised) independent agricultural advocacy. These are SMBs (FPO or NPO) farm owners and operators, everywhere I'm sure, but for me as a US national and an intentional citizen of the Commonwealth of Massachusetts, holds true despite four-hundred years of colonialist cradeism that I've selected into.

# Technological Stop-break 

So if you've scrolled or read your way through all this context, you are in the rarified space where you A) have internet access, and B) understand why the application of computing, in all its ways and faults, is still considered by some 'human ingenuity'. There is a neocortical uniqueness to the arts, the formal sciences, recursing of where/what we've done prior, and as I would put forth...the 'knee work' required by all individuals in order to propose any socio-acceptable solutions.