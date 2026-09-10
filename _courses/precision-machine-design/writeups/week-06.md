---
pmd_subpage: true
layout: pmd-writeup
title: "Week 6: Finalizing the Linear Motion Slide"
subtitle: "Cutting forces to error budget to carriage geometry — and the finding that geometric error eats the budget"
week: 6
week_label: "Week 6"
order: 6
sheet: "2.77-WU-06"
summary: "Finalised the boxway carriage design, derived its stiffness from geometry, tested candidate bearing pad materials, and propagated geometric error to the tool tip with HTMs."
topics: ["Cutting forces", "Error budget", "HTMs", "Bearing pads", "Boxway design"]
attachments:
  - label: "Week 6 appendix — full drawings and analysis (PDF)"
    url: "/assets/files/coursework/precision-machine-design/week06-lms-appendix.pdf"
  - label: "Stiffness derivation — handwritten derivation of the carriage stiffness equations (PDF)"
    url: "/assets/files/coursework/precision-machine-design/week06-stiffness-derivation.pdf"
attachments_offsite:
  - label: "LMS_Analysis_RMH.xlsx — cutting forces, error apportionment, carriage geometry and T-slide analysis"
    size: "142.1 MB"
youtube_id: ""
video_caption: ""
---
*Design of a Linear Motion Slide, Part 2*

The goal this week was to finalise the linear motion module design and evolve the analysis
that predicts its stiffness, accuracy and repeatability.

### 1. Cutting forces

Following the analysis in Kalpakjan and Schmid's *Manufacturing Engineering and Technology*
(chapters 21 and 23), I built a spreadsheet predicting the cutting forces the slide will
see.

![Cutting force summary table for facing an aluminium part: 1600 rpm spindle speed, 0.5 mm depth of cut, 100 mm/min feed rate, predicted cutting force Fy of 62.5 N and thrust and normal forces Fx and Fz of 43.76 N each](/assets/images/courses/precision-machine-design/writeups/week-06/cutting-forces-table.jpg)

Those forces feed the axis error apportionment. For the lathe to hold **100 µm of total
allowable error**, the load-induced deflection from bearings and structure on one axis gets
**19.9 µm**. Working back from the expected forces and that allowance gives a net system
stiffness requirement of **3834 N/mm** — a reasonable target.

### 2. Carriage geometry and stiffness

Having settled on a boxway and T design, I built a spreadsheet that predicts carriage
stiffness about and along each axis directly from the geometry, so dimensions can be changed
in CAD and re-evaluated quickly.

![Hand-drawn carriage cross-section annotated with dimension letters A through T and the constraint relations F minus 2t greater than A plus 2B, with a second sketch below defining the effective plate lengths S, U and V used in the stiffness calculation](/assets/images/courses/precision-machine-design/writeups/week-06/carriage-geometry-sketch.jpg)

**Bearing pad material** took real thought. I found some 3M Scotch foam double-sided tape
that adheres well to aluminium and whose backing is quite slippery. Two pieces of MDF and a
tilt test gave the friction coefficient from the tangent of the sliding angle — **0.12**.
Stiffness came from sticking two pieces to an aluminium block and measuring deflection under
an extra 2.6 kg block: **204.7 N/mm**, nowhere near stiff enough for this slide.

![Three photographs of the friction and stiffness testing: tilting two taped MDF strips by hand to find the sliding angle, an aluminium cylinder standing on a taped block on the mill table, and a second aluminium mass added on top under the mill quill](/assets/images/courses/precision-machine-design/writeups/week-06/foam-tape-testing.jpg)

I then found UHMW polyethylene in my lab. Using the material properties from MatWeb, a thin
square of UHMW calculates out at **138 N/µm** — which is the number the design needed.

![Screenshot of the carriage geometry sheet: rail and carriage properties in millimetres and metres, tool offsets, bearing pad width, thickness, length, Young's modulus and a resulting bearing pad stiffness of 138 N per micron, alongside material moduli for wood, aluminium and steel and the computed moments of inertia](/assets/images/courses/precision-machine-design/writeups/week-06/carriage-geometry-sheet.jpg)

Load-induced errors come from dividing the forces at the carriage's centre of stiffness by
the carriage stiffness about that axis. Geometric errors come from the manufacturing and
assembly tolerances — since the carriage is preloaded, they are dominated by how the slide
is mounted and by parallelism error from flatness. I estimated the geometric error about and
along each axis, then used homogeneous transformation matrices to carry each one through to
the tool tip in the reference frame, computing both the linear stack-up and the RMS and
taking the expected error as the average of the two.

![Screenshot of the geometric error sheet: manufacturing tolerances for rail flatness, mounting misalignment and surface finish at the top, rail geometric errors, an error gain matrix, HTMs for each of the x, y, z and rotational error terms, and the expected error at the tool tip highlighted in red](/assets/images/courses/precision-machine-design/writeups/week-06/geometric-error-sheet.jpg)

So the expected accuracy of the slide is the sum of the geometric and load-induced errors,
and its repeatability is the load-induced deflection alone.

![Summary table: load-induced errors of 0.92, 6.66 and 4.67 microns in x, y and z; geometric expected errors of 30.56, 21.27 and 67.72 microns; total slide accuracy of 31.48, 27.92 and 72.40 microns; and repeatability equal to the load-induced figures](/assets/images/courses/precision-machine-design/writeups/week-06/error-summary.jpg)

**Geometric error dominates, and will eat nearly the whole error budget.** Going forward I'll
add reference features to guarantee the two linear systems end up perpendicular.

### 3. Design and manufacture

![Annotated CAD of the linear motion slide assembly: countersunk holes to bolt the rail to the base, three balls forming a kinematic coupling locating feature for the spindle and cutting tool, bolts securing the spindle to the carriage, a keeper plate for the bearing pad, an 8 mm leadnut, set screws to preload the bearing pads, the bearing pads doubling as gibs, and pin holes for the EAC rail locating feature. Carriage dimensions 87 by 72 by 50 mm](/assets/images/courses/precision-machine-design/writeups/week-06/lms-assembly.jpg)

Several features are worth calling out. The **Tivar squares double as bearing pad and gib** —
by sizing the set screw almost as wide as the pad, the pad preloads against the rail without
uneven pressure. **Three spheres act as kinematic coupling components** to locate the spindle
and tool; here the spheres and grooves only *locate*, with bolts providing the attachment
stiffness. And **two keeper plates** bound the pads, which sit in slots milled into the inside
faces of the carriage, so they can't slide out during assembly.

![The LMS bill of materials drawing listing the T-shaped rail slide, boxway carriage, twelve UHMW polyethylene gibs, set screws, 3D-printed keeper plates, three quarter-inch ball bearings and an 8 mm leadnut, with three component drawings below for the rail, carriage and keeper plate](/assets/images/courses/precision-machine-design/writeups/week-06/bom-and-drawings.jpg)

I had intended to machine the carriage from a single piece of aluminium, but with the
schedule pressing I couldn't find stock large enough to start immediately. The choice was
to redesign the carriage around available stock, or keep the dimensions and modify it to be
made from two pieces. I took the second option so machining could start straight away.

![Beginning manufacture of the first carriage: milling the T slot into an aluminium plate clamped in the mill vise, and the two plates bolted together with the material still to be removed highlighted in purple](/assets/images/courses/precision-machine-design/writeups/week-06/carriage-machining.jpg)

Two identical 25 mm × 90 mm aluminium plates got four corner clearance holes on the CNC mill
so they can be bolted together and machined as one piece, and I milled the "T" into one of
them. Next is finishing the carriage outline and adding locating pins so the halves can be
separated, machined individually and reassembled repeatably.

### 4. Conclusions and thinking ahead

The past two weeks have been stressful. I felt genuinely behind on the error analysis, and
I'm not the fastest machinist. The linear motion module feels better now, and I'm hoping to
use spring break to gather my thoughts.

I'm torn about how to proceed next week: either manufacture two complete slide assemblies
and test them roughly, or thoroughly build and test one and take the time to reflect and
improve the design before making the second. If my classmates feel the same, perhaps we can
build and test a single assembly properly and make the second over spring break.
