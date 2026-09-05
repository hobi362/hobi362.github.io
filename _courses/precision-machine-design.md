---
title: "Precision Machine Design"
institution: "Massachusetts Institute of Technology"
term: "Fall term, MIT MechE"
course_code: "2.77"
order: 17
tags: ["Kinematic couplings", "Error budgeting", "Bearings", "Actuators"]
key_project: "Designed and laser-cut a Maxwell-style kinematic coupling, then used homogeneous transform matrices to predict and analyze its positioning error."
---
Taught by Prof. Alex Slocum — this class is about designing machines and systems for
accuracy, repeatability, and resolution, covering linkages, power transmission, screws and
gears, actuators, bearings, and error budgeting, all considered from both a physics and a
mechanics-of-materials angle.

The project that's stuck with me most is the kinematic coupling write-up: designing a
Maxwell-style coupling (three sphere/v-block pairs constraining all six degrees of freedom)
and actually fabricating it on a laser cutter. Getting the theory right was the easy part —
the laser cutter introduced its own error source I hadn't planned for, tapering the cut
edges on thicker material and producing slightly parallelogram-shaped parts despite careful
parameter tuning (three passes, 100% power, 10% speed, refocusing between passes). The
follow-up analysis using homogeneous transformation matrices to predict end-effector
position error from individual translational/rotational error sources was where the class
really clicked for me — treating each error source independently and then composing them
into a single error matrix.
