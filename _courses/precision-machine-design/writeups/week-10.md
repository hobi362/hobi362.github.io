---
pmd_subpage: true
layout: pmd-writeup
title: "Week 10: Fabricating and Testing the Spindle"
subtitle: "0.019mm measured runout against a 0.013mm prediction"
week: 10
week_label: "Week 10"
order: 10
sheet: "2.70-WU-10"
summary: "Machined the spindle housing and shaft, then measured runout within 6 microns of the predicted value."
topics: ["Precision metrology", "Manufacturing", "Runout testing"]
youtube_id: ""
video_caption: ""
---
The spindle housing and shaft came together over several days in the machine shop, with
few real complications — enough that, despite running on plain bushings rather than
precision ball bearings, I could spin the finished shaft by hand and feel it turn smoothly.

![Finished spindle next to its SolidWorks model](/assets/images/courses/precision-machine-design/week10-spindle-vs-cad.jpg)

Testing was the satisfying part. I measured chuck runout, part radial runout, part axial
runout, and the torque required to spin the shaft — both unloaded and under a 10kg
simulated load — and compared every number against the Week 9 stiffness model.

![Testing spindle runout and drive torque on the bench](/assets/images/courses/precision-machine-design/week10-runout-test.jpg)

Axial runout measured 0.019mm against a predicted 0.013mm — a 6 micron gap, which for a
plain-bearing spindle built on a student budget and timeline is a genuinely good result. It
told me the stiffness model from Week 9 was capturing the real behavior of the system, not
just producing a number that happened to be in the right ballpark.
