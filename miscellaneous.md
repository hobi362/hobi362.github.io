---
layout: listing
title: Miscellaneous
subtitle: Short mechanism teardowns that sit outside the main projects
sheet: "MISC"
permalink: /miscellaneous/
---
### Seek & Geek teardowns

Eleven short weekly analyses from 2.77 Precision Machine Design at MIT, Spring 2018: find a
real-world mechanism, take it apart, and run a first-order analysis on it. The weekly
write-ups from the same class live with the
[T-Based Precision Lathe](/projects/t-based-lathe/#weekly-write-ups) they built toward.

<ul class="sheet-list">
{%- assign teardowns = site.seekgeeks | sort: "order" -%}
{%- for s in teardowns %}
  <li class="sheet-list__row">
    <span class="sheet-list__code">{{ s.sheet | remove: "2.77-" }}</span>
    <a href="{{ s.url | relative_url }}" class="sheet-list__title">{{ s.title }}</a>
    {%- if s.summary %}
    <p class="sheet-list__desc">{{ s.summary }}</p>
    {%- endif %}
  </li>
{%- endfor %}
</ul>
