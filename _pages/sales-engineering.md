---
layout: default
permalink: "/sales-engineering/"
---

<style type="text/css">
.summary-sections {
    max-width: 1024px;
    margin: auto;
    padding-left:2em;
    padding-right:2em;
}
.flex-container {
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: stretch;
    gap: 2em;
}
.tab {
    width: 400px;
    margin: auto;
}
</style>

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'tldr')">TL;DR</button>
  <button class="tablinks" onclick="openCity(event, 'record')">Track Record</button>
  <button class="tablinks" onclick="openCity(event, 'summary')">Values/Contact</button>
</div>

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

- Now: seeking a full-time role
    - Senior Sales Engineer; Enterprise, Federal, Mid-market
- Post-acquisition, a few years:
    - 2023 - 2024 (Tricentis): PM in Platform Services, Identity Management (got asked to do something, didn't work out)
    - 2022 - 2023 (Tricentis): Head of Incubation Engineering (tried something novel, didn't work out)
- **For 5 years**:
    - **2020 - 2022 (Neotys/Tricentis): Head of Customer Engineering (a.k.a. advanced pre/post sales and solutions engineering)**
    - **2017 - 2020 (Neotys): Senior Sales Engineer, Performance and Load Testing**
- For 2 years:
    - 2015 - 2016 (SmartBear, Perfecto): Stint in Product Marketing, not my cup of tea
- **For 2.5 years**:
    - **2013 - 2015 (SmartBear): First time Sales Engineer on complex performance products**

</div>

</div>

</div>

<style type="text/css">
/* Style the tab */
.tab {
  overflow: hidden;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

.tablinks {
    color: #fff;
}
/* Change background color of buttons on hover */
.tab button:hover {
  
}

/* Create an active/current tablink class */
.tab button.active {
  
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
}

.tabcontent {
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>

<script type="text/javascript">
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>