---
layout: default
permalink: "/personal-testimonials/"
---

{% assign page_tabs = "" | split: ',' %}

{% for tab in site.data.testimonials.tabs %}
  {% assign page_tabs = page_tabs | push: tab %}
{% endfor %}

{% assign first_id = page_tabs.first.id %}

{% include tabbed_explicit.html tabs=page_tabs %}

<!-- div id="tldr" class="tabcontent active" style="display: block;" -->

<div class="summary-sections">

{% for tab in page_tabs %}

{% assign tab_id = tab.id %}

{% if tab_id == first_id %}
<div id="{{tab_id}}" class="tabcontent default" style="display:block;">
{% else %}
<div id="{{tab_id}}" class="tabcontent">
{% endif %}

{% include testimonials_by_collection.html tab=tab_id %}

</div>

{% endfor %}

</div>