---
layout: tabbed
permalink: "/sales-engineering/"
tabs:
  - id: tldr
    button: "TL;DR"
  - id: record
    button: "Track Record"
  - id: testimonials
    button: "Testimonials"
  - id: summary
    button: "Values"
  - id: articles
    button: "Thoughts"
---

<div class="summary-sections">

<div id="tldr" class="tabcontent active" style="display: block;">

<div markdown="1">

# I'm your next Sales Engineer!

Let's cut to the chase: I'm best when doing what I know well, getting to close-won on opportunities.

I am an excellent wingman to sales executives, partner channel, and product management in front of prospects and customers.

I can demo precisely, handle objections gracefully, and develop champions consistently in top tier accounts.

</div>

</div>

<div id="summary" class="flex-container tabcontent">

<div markdown="1">

## What's it like to work with me?

- [Strong Work Ethic](/working-with-paul/#strong-work-ethic)
- [Health and Family First](/working-with-paul/#health-and-family-first)
- [Outcomes Over Output](/working-with-paul/#outcomes-over-output)
- [Success With Others](/working-with-paul/#success-with-others)
- [More...](/working-with-paul/)

</div>

<div markdown="1">

## Connect on Social

- [LinkedIn: paulsbruce](https://www.linkedin.com/in/paulsbruce/)

</div>

</div>

<div id="record" class="tabcontent">

<div markdown="1">

## Track Record: solid...with experiments behind

The short is, I've never been one to climb corporate ladders or narrowly seek a single path. For a few years after exiting full-time dev work, I also tried marketing and product.

I now know that my balance of successful and happy lives in sales engineering.

- **Now: seeking a full-time role in:**
    - Senior Sales Engineer; Enterprise, Federal, Mid-market
- For 3 years (post-acquisition) [more](#){: #pm-years-toggle-link .li-more}
    - Summer of 2024
        - Sabbatical, volunteering on local farms
        - Co-organized DevOpsDays Boston for fifth year in a row
        - Kickoff of side project, [Growgistics](https://growgistics.io) (agricultural tech inbubator)
    - 2023 - 2024 (Tricentis): PM in Platform Services, Identity Management
        - got asked to work on Federated Identity Management and platform services, initiative cancelled due to cost-cutting measures
    - 2022 - 2023 (Tricentis): Head of Incubation Engineering
        - tried something novel, non-priority for corporate leadership
        - multiple patents filed
        - due-diligence analysis over 40+ potential acquisitions
        - new product initiatives approved and staged for 2024 initiation
- **For 5 years**:
    - **2020 - 2022 (Neotys/Tricentis): Head of Customer Engineering (a.k.a. advanced pre/post sales and solutions engineering)**
        - Team attainment 126%, individual non-sales performance goals 100%
        - President's Club award
    - **2017 - 2020 (Neotys): Senior Sales Engineer, Performance and Load Testing**
        - Individual goals and team attainment higher than 115% each year
        - 3 years of President's Club awards
- For 2 years:
    - 2015 - 2016 (SmartBear, Perfecto): Stint in Product Marketing, learned that product marketing was not my cup of tea but product evangelism is
- **For 2.5 years**:
    - **2013 - 2015 (SmartBear): First time Sales Engineer on complex performance products**

</div>

</div>

<div id="testimonials" class="tabcontent">

<div style="display:flex;flex-direction:row-reverse;">
    <a href="/personal-testimonials/#_executive">More testimonials</a>
</div>

{% include testimonials_by_collection.html category="sales" default_tab="sales" %}

</div>

<div id="articles" class="tabcontent">

{% assign posts = site.tags['sales engineering'] %}
<ul>
{% for post in posts %}
    {% if post.url %}
        <li>{{post.date | date: "%Y"}}: <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>

</div>

</div>

<style type="text/css">
a.li-more {
  cursor: pointer;
  color: #ccc;
  font-size: 0.7em;
}
.li-more-hidden {
  display: none;
}
</style>

<script type="text/javascript">
(function() {
  var elements = [$("#pm-years-toggle-link")]
  $(elements).each(function(i,a) {
    a.removeClass('li-more-hidden')
    a.click(toggleListMore);
    a.removeAttr('href')
    setListMoreVisibility(a,false)
  })

})();

function toggleListMore() {
  var a = $(this)
  var li = a.parent()
  var ul = li.find('ul')
  setListMoreVisibility(a,ul.hasClass('li-more-hidden'))
}
function setListMoreVisibility(a,isVisible) {
  var li = a.parent()
  var ul = li.find('ul')
  if(isVisible) {
    a.text('... [hide detail]')
    ul.removeClass('li-more-hidden')
  } else {
    a.text('... [show detail]')
    ul.addClass('li-more-hidden')
  }
}
</script>