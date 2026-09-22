---
layout: listing
title: Skills & Stack
subtitle: What I work with, and the pages that show me using it
sheet: "IDX-5"
permalink: /skills/
---
{%- assign skill_groups = "Design,Analysis,Build,Controls & software,Robotics & sensing,Test & quality,Medical devices,Process & communication" | split: "," -%}
{%- assign stack_groups = "Software & languages,Hardware & electronics,Drives & mechanisms,Methods & domains,Standards & products" | split: "," -%}

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
