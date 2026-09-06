---
layout: pmd-writeup
title: "Week 3: Elastically Averaged Coupling"
subtitle: "Trading exact constraint for many compliant contact points"
week: 3
week_label: "Week 3"
order: 3
sheet: "2.70-WU-03"
summary: "Designed and tested an elastically averaged coupling — repeatability improves with more contact points."
topics: ["Elastic averaging", "Compliant mechanisms"]
youtube_id: ""
video_caption: ""
---
Where a kinematic coupling uses exactly six contact points, an elastically averaged
coupling (EAC) deliberately uses many more — often well over six — and gets away with it
by making one side of the interface compliant enough that the whole assembly behaves like
a network of springs rather than an over-constrained rigid system. The classic mental model
is pins into slightly-misaligned holes: rigid pins would jam or gouge, but pins designed to
deflect elastically (without yielding) average out the misalignment instead.

![FRDPARRC table for the elastically averaged coupling design](/assets/images/courses/precision-machine-design/week03-frdparrc-table.jpg)

The appeal of an EAC is that its repeatability *improves* as roughly the square root of
the number of contact features — more pins genuinely means more averaging, not more
over-constraint, as long as the compliant side stays elastic. I built mine with flexure
pins engaging slotted features, targeting 5 µm repeatability, and used a spreadsheet model
(force = k·x on each flexure) to predict stiffness and accuracy ahead of testing.

![Assembled elastically averaged coupling with a laser-pointer mount for repeatability testing](/assets/images/courses/precision-machine-design/week03-eac-assembled.jpg)
