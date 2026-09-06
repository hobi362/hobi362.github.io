---
layout: pmd-writeup
title: "Week 5: Linear Motion Slide Concept Exploration"
subtitle: "Comparing three carriage designs for a lathe axis"
week: 5
week_label: "Week 5"
order: 5
sheet: "2.70-WU-05"
summary: "Compared a U-groove bearing carriage, a shaft-and-leadscrew design, and a dovetail/T-rail design."
topics: ["Linear motion systems", "Concept selection", "Cutting force analysis"]
youtube_id: ""
video_caption: ""
---
Starting this week, the semester's focus shifted from small couplings to the final
project: a self-built precision lathe, built axis by axis. My first linear motion slide
(LMS) needed to serve as one axis of a T-based lathe, which meant sizing it against real
cutting loads rather than an arbitrary stiffness target.

I researched cutting forces for turning 1" aluminum stock with a hand-drill-as-spindle
setup and found published values ranging from 40N to 170N — I designed against the high
end (170N) to stay conservative. For the drive, I sized an 8mm leadscrew against a NEMA 17
stepper (59 N·cm) and checked it against the estimated frictional and cutting loads.

![Three linear-motion carriage concepts under evaluation, plus early stiffness/deflection results](/assets/images/courses/precision-machine-design/week05-lms-concepts.jpg)

I built quick sketch models of three concepts — U-groove bearings, a classic double-shaft
and leadscrew, and a dovetail/T-rail design built from 80/20 extrusion — and scored each on
a first-order error-motion prediction before picking a direction to commit to for
fabrication.
