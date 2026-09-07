---
layout: listing
title: Contact
sheet: "IDX-4"
permalink: /contact/
---
{% if site.email %}<div class="specs__row"><span class="tb-label">Email</span><span class="tb-value"><a href="mailto:{{ site.email }}">{{ site.email }}</a></span></div>{% endif %}
<div class="specs__row"><span class="tb-label">GitHub</span><span class="tb-value"><a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">github.com/{{ site.github_username }}</a></span></div>
<div class="specs__row"><span class="tb-label">LinkedIn</span><span class="tb-value"><a href="{{ site.linkedin_url }}" target="_blank" rel="noopener">{{ site.linkedin_url }}</a></span></div>
{% if site.resume_pdf %}<div class="specs__row"><span class="tb-label">Resume</span><span class="tb-value"><a href="{{ site.resume_pdf | relative_url }}" target="_blank" rel="noopener">Download PDF</a></span></div>{% endif %}
