---
layout: listing
title: Publications
subtitle: Journal papers, conference papers, and theses
sheet: "PUB"
permalink: /publications/
---
Most recent first within each group. Driven from `_data/publications.yml`, so this page and
the home page cannot drift apart.

{% assign groups = "Theses,Journal Publications,Conference Publications" | split: "," %}
{% for g in groups %}
### {{ g }}

{% assign items = site.data.publications | where: "group", g | sort: "year" | reverse %}
{% for p in items %}
<div class="pub-entry">
  <p class="pub-title">{{ p.title }}</p>
  <p class="pub-meta">{{ p.meta }}{% if p.award %} <strong>{{ p.award }}.</strong>{% endif %}</p>
  {% if p.links %}
  <p class="pub-links">
    {% for l in p.links %}{% unless forloop.first %} · {% endunless %}<a href="{{ l.url }}"{% if l.external %} target="_blank" rel="noopener"{% endif %}>{{ l.label }}</a>{% endfor %}
  </p>
  {% endif %}
</div>
{% endfor %}
{% endfor %}
