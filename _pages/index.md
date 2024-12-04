---
title: paulsbruce.io - Home
layout: home
permalink: "/" # needed for simplifying masthead
---

<style type="text/css">
#main {
  max-width: 800px;
}
{% for category in site.categories %}
ul.cloud a[data-weight="{{ category.last.size }}"] { --size: {{ category.last.size }}; }
{% endfor %}
</style>

<div style="text-align:center;" markdown=1>

### Technologist by trade, engineer at heart.

I am a high tech professional who enjoys people and winning. I've worked in many areas of software, but my passion in technical sales. I am currently looking for the right team to work with full-time.

<a href="/sales-engineering/">I could be your next sales engineer!</a>

</div>

{% assign defaultVideoId = "QDaNysCCFNo" %}

<div style="clear:both">

  <div class="vid-container">
  	<iframe loading="lazy" id="vid_frame" width="560" height="315" frameborder="0" src="https://www.youtube.com/embed/{{ defaultVideoId }}?rel=0&showinfo=0&autohide=0"></iframe>
  </div>
  <div class="vid-list-container">
    <div class="vid-list">
    </div>
  </div>
  <div class="arrows">
  	<div class="arrow-left">
  		<i class="fa fa-chevron-left fa-lg"></i>
  	</div>
  	<div class="arrow-right">
  		<i class="fa fa-chevron-right fa-lg"></i>
  	</div>
  </div>
  <script>
  $(document).ready(function () {
      $(".arrow-right").bind("click", function (event) {
          event.preventDefault();
          $(".vid-list-container").stop().animate({
              scrollLeft: "+=336"
          }, 750);
      });
      $(".arrow-left").bind("click", function (event) {
          event.preventDefault();
          $(".vid-list-container").stop().animate({
              scrollLeft: "-=336"
          }, 750);
      });

      var home_playlist = "{{ '/assets/home_playlist.xml' | relative_url }}"
      $.ajax({
        type: "GET",
        url: home_playlist,
        dataType: "xml",
        success: xmlParser
      });
  });
  function xmlParser(xml) {
    var isFirst = false;
    var list = $(".vid-list")
    list.empty()
    var entries = $(xml).find("entry")
    list.css("width",(entries.length * 150)+"px")
    entries.each(function () {
      var vid = $(this).find("id").text().replace('yt:video:','');
      var txt = $(this).find("title").text();
      if(isFirst)
        $("#vid_frame").attr("src","https://www.youtube.com/embed/"+vid+"?rel=0&showinfo=0&autohide=0")
      else {
        var itm = $('<div class="vid-item" videoId="'+vid+'"><div class="vid-thumb"><img src="https://img.youtube.com/vi/'+vid+'/0.jpg" alt="'+txt+'" title="'+txt+'" /></div><div class="vid-desc"></div></div>')
        itm.on('click touchend', function() { var frm=document.getElementById('vid_frame');frm.src='http://youtube.com/embed/'+itm.attr('videoId')+'?autoplay=1&rel=0&showinfo=0&autohide=1';frm.scrollIntoView() })
        list.append(itm)
      }
      isFirst = false
    });
  }
  </script>
</div>
<div style="clear:both;margin-bottom:1em;">
&nbsp;
</div>

<div>
  {% if paginator %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.posts %}
  {% endif %}

  {% assign posts = posts | slice: 0,5 %}

  {% if posts.size > 0 %}

  <h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h3>

  {% assign entries_layout = page.entries_layout | default: 'list' %}
  <div class="entries-{{ entries_layout }}">
    {% for post in posts %}
      {% include archive-single.html type=entries_layout %}
    {% endfor %}
  </div>

  {% include paginator.html %}

  {% endif %}
</div>
<div style="clear:both;margin-bottom:1em;">
&nbsp;
</div>


<ul class="cloud" role="navigation" x-data-show-value>
{% for category in site.categories %}
  <li><a data-weight="{{ category.last.size }}" href="/categories/#{{ category | first | downcase | replace: " ", "-" | replace: ":", "-" | replace: ";", "-" }}">{{ category | first }}</a></li>
{% endfor %}
</ul>
