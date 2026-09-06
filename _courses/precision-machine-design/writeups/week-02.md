---
pmd_subpage: true
layout: pmd-writeup
title: "Week 2: Building the Kinematic Coupling"
subtitle: "Design, build, and test a Maxwell coupling against predicted stiffness and repeatability"
week: 2
week_label: "Week 2"
order: 2
sheet: "2.70-WU-02"
summary: "Built and tested a Maxwell coupling; measured stiffness came out ~20x lower than predicted."
topics: ["Kinematic couplings", "FRDPARRC", "Hertzian contact"]
youtube_id: ""
video_caption: ""
---
This week the coupling from Week 1 went from proposal to hardware. I started with a
FRDPARRC table (Functional Requirements, Design Parameters, Analysis, Risks, References,
Countermeasures) to force myself to nail down what "good" actually meant before cutting
anything — repeatable positioning, a target stiffness, and a cost ceiling, each backed by
a specific analysis method (Hertzian contact stress for the ball/groove interface, Abbe
error from a laser-pointer check) rather than a gut feeling.

![Kinematic coupling hardware — spheres seated in V-block grooves](/assets/images/courses/precision-machine-design/week02-kc-hardware.jpg)

I built the coupling out of wooden balls, a laser-cut baseplate, and V-groove blocks, then
measured its actual stiffness and repeatability against the spreadsheet predictions. The
measured stiffness came out roughly 20x lower than predicted — a big enough gap that it
was clearly a real effect, not noise. I chased that discrepancy the following week (see
Week 4): the flats machined onto the wooden balls weren't perfectly flush with the plate,
which is exactly the kind of manufacturing defect that quietly wrecks a kinematic
coupling's assumptions.
