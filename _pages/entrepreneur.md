---
layout: tabbed
permalink: "/entrepreneur/"
tabs:
  - id: direction
    button: "Direction"
  - id: growgistics
    button: "Growgistics"
  - id: technical-advisor
    button: "Techical Advisor"
  - id: farm-ops
    button: "Farm Operations"
---

<div class="summary-sections">

<div id="direction" class="tabcontent active" style="display: block;">

<div markdown="1">

# My Own Direction

If you're not directing your own journey, someone else will. After more than twenty years in high tech, I learned that my own career must include some level of entrepreneurship.

I keep my eyes and ears open for full-time positions that provide the right money, culture, and mission. I also maintain other avenues of compensation and career research.

For now, this includes tech and farm work, as well as a few volunteer efforts.

</div>

</div>

<div id="growgistics" class="tabcontent">

<div markdown="1">

# Not Your Average AgTech Startup

[Growgistics](https://growgistics.io) is my own LLC which has pivoted to become a tech incubator for independent agriculturalists. By 'incubator', for now this means "growing useful ideas and experiments" and in the future could expand to useful products and services.

Currently, the work I do under this entity focuses on technical assistance to agro-SMBs (small to mid-size teams) which includes:

* Greenhouse and field operations
* Web presence and marketing automation
* Grant discovery and mapping to business plans
* Community organizing and event logistics
* Ad-hoc technology and mechanical support

This phase in the Growgistics business plan is part of a longer-term (3-5 year) goal of developing a repeatable, beneficial, and sustainable startup product offering. For now, gaining context, developing connections, and establishing expertise in agro-related areas of business operations is required input to future direction.

</div>

</div>

<div id="technical-advisor" class="tabcontent">

<div markdown="1">

# Head in the Cloud, Boots on the Ground

I am a tech contractor! Aside from the two decades of experience with all sorts of technologies, rapidly learning and adapting to the tech landscape is my real superpower.

I help a small portfolio of businesses with:

* Software delivery and release practices
* Cloud infrastructure architecture and implementation
* Capacity planning and reliability engineering
* Technology cost and risk management

Most of the work I do is under NDA, so publicizing my portfolio here doesn't make much sense. What I can say is that I work ***a lot*** on AWS, Kubernetes, and CI/CD tools.

If you're looking for help with something specific or want to touch base with me, [reach out](/contact/).

</div>

</div>

<div id="farm-ops" class="tabcontent">

<div markdown="1">

# Intern in Farm Operations

[I work on a farm](https://farming.paulsbruce.io/), part time, between tech contracts. This provides me 'field research opportuntities' quite literally...growing/planting/harvesting a wide variety of vegetable produce, learning about the activities of a farm team, digging for potatoes, tending to livestock, researching pest and disease management techniques...and so much more.

This work also provides necessary 'headspace' from my technical work (on screens) and grows my capability to reflectively think through behaviors of complex systems.

I run my efforts as if it was a PhD self-directed program...with just the right amount of farm team input to make sure I'm on the right track.

Over the 2025 summer, I'll be [publishing about my 'field work' frequently](https://farming.paulsbruce.io/). Stay tuned! 

# Blog Posts about Farming
{% assign posts = site.categories['farming'] %}
<ul>
{% for post in posts %}
    {% if post.url %}
        <li>{{post.date | date: "%Y"}}: <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>

</div>

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