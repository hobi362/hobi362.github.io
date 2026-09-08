---
pmd_subpage: true
layout: pmd-writeup
title: "Week 9: Designing the Rotary Motion Module"
subtitle: "The spindle for the lathe's cutting axis"
week: 9
week_label: "Week 9"
order: 9
sheet: "2.70-WU-09"
summary: "Designed and modeled a simple, IGUS-bearing spindle for the lathe, sized against radial and axial stiffness."
topics: ["Spindle design", "Bearing selection", "Stiffness modeling"]
youtube_id: ""
video_caption: ""
---
With both linear axes done, this week turned to the lathe's rotary motion module (RMM) —
the spindle that actually spins the workpiece. Knowing time was tight, I kept the spindle
design deliberately simple: J3 Iglide flanged plain bearings from our IGUS sample kits
(chosen for their resistance to unclean environments), with thrust washers on either end to
handle axial loading and a dual-nut arrangement providing preload against a spring washer.

![CAD assembly of the rotary motion module mounted on the linear slide, plus the raw shaft and chuck stock](/assets/images/courses/precision-machine-design/week09-rmm-cad.jpg)

Locating features do double duty here: the bearing flanges reference the housing axially,
a flange on the spindle shaft itself locates against a thrust bearing, and a small step
inside the chuck tells you exactly how far the spindle is threaded in. I modeled radial and
axial stiffness by putting the shaft, bearing, and housing stiffnesses in series, which is
what actually determines how much the spindle deflects under cutting load at the tool tip
— not just how stiff any one component is on its own.

![Raw spindle shaft stock and chuck before machining](/assets/images/courses/precision-machine-design/week09-spindle-stock.jpg)
