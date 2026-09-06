---
pmd_subpage: true
layout: pmd-writeup
title: "Week 6: Finalizing the Linear Motion Slide"
subtitle: "Cutting-force analysis, stiffness modeling, and starting fabrication"
week: 6
week_label: "Week 6"
order: 6
sheet: "2.70-WU-06"
summary: "Predicted a 3834 N/mm stiffness requirement from cutting forces, then began machining the carriage."
topics: ["Error budgeting", "Cutting mechanics", "Manufacturing"]
youtube_id: ""
video_caption: ""
---
With a concept chosen, this week was about locking down the analysis and starting to cut
metal. Using cutting-mechanics references for facing aluminum (1600 RPM spindle speed,
0.5mm depth of cut, 100 mm/min feed), I predicted a cutting force of 62.5N and thrust/normal
forces of 43.76N each.

Working backward from a 100 µm total error budget for the finished lathe, I apportioned
19.9 µm of allowable load-induced deflection to this axis, which set a required system
stiffness of roughly 3834 N/mm — a concrete number I could actually design bearings and
structure against, instead of guessing at "stiff enough."

![Beginning machining of the first linear-motion-slide carriage](/assets/images/courses/precision-machine-design/week06-lms-machining.jpg)

By the end of the week the geometric-error and load-induced-error predictions across all
three axes were: 0.92, 6.46, and 4.67 µm load-induced, against 30.56, 21.27, and 67.72 µm
geometric — giving a predicted total accuracy around 31–72 µm depending on axis, which
became the number I'd check the finished hardware against.
