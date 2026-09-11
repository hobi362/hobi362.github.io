---
title: "T-Based Precision Lathe"
subtitle: "A mini lathe built from raw stock, with every axis backed by a real error budget rather than \"it looks stiff enough\""
org: "MIT"
period: "Spring 2018"
location: "Cambridge, MA"
role: "Sole designer and machinist"
course: "2.77 — Precision Machine Design"
order: 9
sheet: "PRJ-09"
thumb: "/assets/images/courses/precision-machine-design/week11-completed-lathe.jpg"
tags: [SolidWorks, "Error budgeting", "Precision metrology", "CNC machining", "HTMs"]
links:
  - label: "Weekly write-ups and Seek & Geeks — the full 2.77 coursework"
    url: "/coursework/precision-machine-design/"
  - label: "Analysis code — error budget, HTMs, spindle and slide deflection"
    url: "https://github.com/hobi362/2-70-precision-machine-design"
---
The final project in 2.77 is a semester-long build: design and machine your own small
precision lathe from raw stock, with every axis backed by a real error budget rather than
"it looks stiff enough." Mine came together as a T-based lathe — two linear motion slides
(the X and Z axes, [Weeks 5–7](/coursework/precision-machine-design/writeups/week-05/)) and
a rotary spindle ([Weeks 8–10](/coursework/precision-machine-design/writeups/week-08/)),
assembled into one machine in [Week 11](/coursework/precision-machine-design/writeups/week-11/)
and written up in full in [Week 12](/coursework/precision-machine-design/writeups/week-12/).
In a conventional lathe the tool moves on two axes while the spindle stays fixed; in a
T-based lathe, the spindle itself rides on one linear axis and the tool on a second axis
perpendicular to it, forming a "T."

![The completed T-based lathe](/assets/images/courses/precision-machine-design/final-lathe-hero.jpg)

### Design approach

Every subsystem traces back to the same error budget: start from a total accuracy target
for the finished part, apportion allowable error across geometric (manufacturing and
assembly) and load-induced (stiffness) sources for each axis, then design components against
those individual numbers. Targeting 100 µm total part accuracy, cutting-force predictions
(100N tangential, 70N radial/thrust for a 1mm facing pass in aluminum) set a required
system stiffness of about 6 N/µm per axis.

The linear motion modules went through several sketch-model concepts — a two-rail slider
came out most sensitive to manufacturing error, and its stiffness varied depending on where
the carriage sat along the rail — so I settled on a boxway design instead: an aluminum
carriage riding on Delrin bearing pads (chosen for stiffness and low friction), preloaded
against a T-rail with set screws to eliminate rattle. The spindle used J3 Iglide plain
bearings from a sample kit IGUS brought to class, turned into a housing machined from 3"
6061-T6 stock, with a mini 3-jaw chuck threaded onto the shaft.

Testing the carriage's rotational stiffness turned up a real modeling gap: measured roll
stiffness matched the prediction well, but measured yaw and pitch stiffness came in at
roughly 1/10th and 1/20th of predicted — the original model treated the whole carriage as a
simply-supported beam, which turned out not to capture the real compliance path.

### Results — closing the loop

I cut two test parts: one held in the three-jaw chuck, one threaded directly onto the
spindle shaft, specifically to separate the lathe's own accuracy from the chuck's
contribution to error.

![Two test parts, faced with the chuck (left) and mounted directly on the spindle (right)](/assets/images/courses/precision-machine-design/final-cut-parts.jpg)

Each part got two independent measurements: a dial indicator dragged across the surface in
30° increments to map overall contour (accuracy), and interferometer surface-finish
readings (repeatability).

![Contour plots comparing the part faced with the chuck (left) against the part mounted directly on the spindle (right)](/assets/images/courses/precision-machine-design/final-contour-plots.jpg)

The contour plot for the direct-spindle part revealed something the dial-indicator data
alone wouldn't have shown outright: a consistent slant suggesting the two linear axes
weren't quite perpendicular. Working backward from the contour, I calculated that
misalignment at 1.45°.

**The numbers that mattered most:** accounting for two standard deviations (95% confidence),
the part faced directly on the spindle came out accurate to within **112.5 µm**, and the
part faced through the chuck to within **187.9 µm**. My error budget spreadsheet had
predicted a worst-case error of **255.7 µm** (233 µm from loading, 22.7 µm from random
error) — meaning the real lathe beat its own worst-case prediction by about 70 µm. That's
just outside the original 100 µm target, but well inside the predicted error band, which is
the result I actually cared about: the model and the physical machine agreed.

### What I'd change

Two things, with more time: correct the 1.45° axis-perpendicularity error the contour plot
uncovered, and revisit the yaw/pitch stiffness model for the carriage now that testing shows
the simply-supported-beam assumption understates real compliance by an order of magnitude.
Both are exactly the kind of gap this class is designed to surface — a first-order model
gets you most of the way, and building the real thing is what tells you where it doesn't.
