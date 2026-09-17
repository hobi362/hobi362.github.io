---
layout: listing
title: Skills & Stack
subtitle: What I work with, and the pages that show me using it
sheet: "IDX-5"
permalink: /skills/
---
One index, in two halves. **Skills** are what I can do; **Stack** is the specific software,
hardware, mechanisms and methods I used. Every entry links to the work that demonstrates
it, and nothing is listed without a page behind it. Driven from `_data/skills.yml`, so this
page and the rest of the site cannot drift apart.

{%- assign skill_groups = "Design,Analysis,Build,Controls & software,Robotics & sensing,Test & quality,Medical devices,Process & communication" | split: "," -%}
{%- assign stack_groups = "Software & languages,Hardware & electronics,Drives & mechanisms,Methods & domains,Standards & products" | split: "," -%}

<nav class="skills-index" aria-label="Sections">
  <span class="skills-index__label">Skills</span>
  {%- for g in skill_groups %}
  <a href="#{{ g | slugify }}">{{ g }}</a>
  {%- endfor %}
  <span class="skills-index__label">Stack</span>
  {%- for g in stack_groups %}
  <a href="#{{ g | slugify }}">{{ g }}</a>
  {%- endfor %}
</nav>

{%- for g in skill_groups %}
<section class="skill-group" id="{{ g | slugify }}">
  <h3 class="section-heading">{{ g }}</h3>
  {%- for s in site.data.skills %}
  {%- if s.kind == "skill" and s.group == g %}
  {%- include skill-entry.html s=s %}
  {%- endif %}
  {%- endfor %}
</section>
{%- endfor %}

<h2 class="section-heading section-heading--major" id="stack">Stack</h2>

{%- for g in stack_groups %}
<section class="skill-group" id="{{ g | slugify }}">
  <h3 class="section-heading">{{ g }}</h3>
  {%- for s in site.data.skills %}
  {%- if s.kind == "stack" and s.group == g %}
  {%- include skill-entry.html s=s %}
  {%- endif %}
  {%- endfor %}
</section>
{%- endfor %}
