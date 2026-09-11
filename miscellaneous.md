---
layout: listing
title: Miscellaneous
subtitle: Mechanism teardowns and coursework that sit outside the main projects
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

### Other coursework

Classes where the value was the material rather than a single built artefact. Most recent
first.

<ul class="sheet-list">
{%- assign classes = site.courses | sort: "sort_date" | reverse -%}
{%- for c in classes %}
  <li class="sheet-list__row">
    <span class="sheet-list__code">{{ c.course_code }}</span>
    <a href="{{ c.url | relative_url }}" class="sheet-list__title">{{ c.title }}</a>
    <span class="sheet-list__meta">{{ c.institution }}</span>
    <span class="sheet-list__meta sheet-list__meta--period">{{ c.term }}</span>
  </li>
{%- endfor %}
</ul>
