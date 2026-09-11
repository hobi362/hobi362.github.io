---
title: "Analysis and Design of Feedback Control Systems"
institution: "MIT"
term: "Spring 2016"
sort_date: "2016-05"
course_code: "2.140"
order: 25
tags: ["Feedback control", "Loop shaping", "Motor modeling", "LabVIEW", "Hardware in the loop"]
---
The graduate feedback control course in MechE — classical and state-space design worked
through real electromechanical hardware rather than on paper alone. Modeling DC motors
from first principles, identifying the plant you actually have instead of the one in the
datasheet, then designing and tuning compensators against it.

The lab work paired analysis with LabVIEW-instrumented benches, which meant every design
had to survive contact with sensor noise, quantization, and actuator saturation. Loop
shaping is a much more interesting exercise when the phase margin you calculated has to
hold up on a motor that has backlash.

Together with [2.151](/coursework/advanced-system-dynamics-control/) and
[2.160](/coursework/identification-estimation-learning/), this is the controls sequence
behind the robotics and precision-motion work elsewhere in this portfolio.
