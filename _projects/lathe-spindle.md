---
title: "Lathe Spindle"
subtitle: "A team benchtop lathe that got as far as its spindle before COVID closed the shop, and the redesign I worked through on paper afterward"
org: "MIT"
period: "Spring 2020"
location: "Cambridge, MA"
role: "Spindle drawings, shaft modelling and machining; individual alternate spindle design"
course: "2.72 — Elements of Mechanical Design"
order: 12
sheet: "PRJ-12"
thumb: "/assets/images/projects/lathe-spindle/spindle-shaft-chuck.jpg"
tags: ["SolidWorks", "MATLAB", "Bearing selection", "Error budgeting", "Tolerancing", "Manual machining"]
links:
  - label: "Spindle shaft drawing (PDF, 2 sheets)"
    url: "/assets/files/projects/lathe-spindle/spindle-shaft-drawing.pdf"
---
The Spring 2020 project in 2.72 was a small benchtop lathe, designed and built in teams.
Each team owned the engineering behind every subsystem — the error budget, the cutting-force
model, the bearing selection, the drawings — and then had to machine the parts to the
tolerances it had set itself.

We started with the spindle, because everything else on a lathe is measured against it. We
got as far as designing it, drawing it and machining it. The photos below are from 9 and 10
March 2020; MIT moved classes online that same week, and the lathe was never assembled.
The rest of the semester became the [desktop CNC router assessment](/projects/desktop-cnc-router/).

### Budgeting the error

The target was 50 µm of total error on a finished part. Split by root-sum-square between the
two sensitive directions — radial (X) and axial (Z) — and then evenly across the three
subassemblies in the structural loop, that leaves the spindle **11.77 µm** per direction.
Every stiffness requirement below comes from that number.

| Budget level | Allowable error |
|---|---|
| Finished part, total | 50 µm |
| Per sensitive direction | 35.35 µm |
| Per subassembly, per direction | 11.77 µm |

The loads came from the team's MATLAB cutting-force model, run at the worst case: zero rake,
a tool–workpiece friction coefficient of 2, and the motor's full stall torque through the
belt reduction. With a 2.5 factor of safety on top, the spindle had to carry up to 500 N
radially and 400 N of thrust.

### The team spindle

A 0.75 in steel shaft on a pair of Timken LM11949/LM11910 tapered roller bearings 2.6 in
apart, preloaded to 200 N. The chuck threads onto an M14 × 1 nose, a 3/4-16 thread behind
the rear bearing carries the preload nut, and the tail is keyed for the drive pulley.

![Section view of the team spindle: the steel shaft running through a housing on two tapered roller bearings, with the chuck mounting face at the right and the spindle's key dimensions called out](/assets/images/projects/lathe-spindle/team-spindle-section.png)

I drew the shaft for manufacture, which is where the error budget turns into numbers a
machinist can actually hold. The two bearing seats are held to ±0.0005 in: the front seat
at 0.752 in, a light press fit that locates the fixed bearing, and the rear at 0.749 in, a
slide fit so the rear bearing can float and take up the preload. The seats and shoulders are
dimensioned from a common datum axis, and the shoulder fillets are toleranced one-sided so
they can't hold the bearing cones off their shoulders.

A shear, moment and stress pass along the shaft under the worst-case cutting load put the
peak bending moment, about 19 N·m, at the front bearing. The peak stress there, just under
100 MPa, sits below both the fatigue limit and yield.

![Shear force, bending moment and total stress plotted along the 0.22 m shaft: moment peaks near 19 N·m at the front bearing, and stress peaks just under 100 MPa, below a dashed fatigue limit near 125 MPa and a solid yield line at 250 MPa](/assets/images/projects/lathe-spindle/shaft-shear-moment.jpg)

### Machining it

We turned the shaft on the shop's manual lathes in the days before the shutdown.

![Me at a Sharp 1340F manual lathe in the MIT shop, safety glasses on, working the carriage handwheels while turning the spindle shaft](/assets/images/projects/lathe-spindle/machining-spindle.jpg)

![The finished spindle shaft on a bench mat: turned and threaded steel, with the three-jaw chuck threaded onto its nose](/assets/images/projects/lathe-spindle/spindle-shaft-chuck.jpg)

That shaft, with its chuck threaded on, is as far as the build got.

### After the shutdown: an alternate spindle, on paper

With the shop closed, the April assignment was individual: take the team spindle apart
analytically and design a better one. Analysing the team design showed its stiffness was
dominated by two things — the shaft's radial bending and the bearings' axial stiffness —
and that its 19.7 µm of axial deflection at the tool was well outside the 11.77 µm budget.

My alternate attacks both. The shaft grows from 0.75 in to 1.00 in. The front bearing
becomes a Timken 5205K double-row angular contact bearing, mounted back to back for axial
stiffness, and the rear becomes a Timken 205K deep-groove ball bearing floating in a close
running fit. Two wave disc springs under a 1"-12 nut set the preload.

![Section of the alternate spindle: a double-row angular contact bearing at the front with a slight interference fit, a deep-groove ball bearing at the rear in a close clearance fit, two wave disc springs under a 1-inch hex nut on the back of the shaft, and the chuck at the front](/assets/images/projects/lathe-spindle/alt-spindle-layout.png)

Preload is the main tradeoff. More preload stiffens the bearings but also costs friction
heat and motor power. I swept it: radial and axial stiffness rise steeply at first and then
flatten, while frictional heat climbs linearly. I settled on 300 N, which gets most of the
stiffness while holding heat generation under the 100 W limit.

![Bearing radial and axial stiffness and frictional heat generated, plotted against applied preload from 0 to 2000 N: both stiffness curves rise steeply then flatten, while heat rises in a straight line to about 200 W](/assets/images/projects/lathe-spindle/alt-spindle-preload.jpg)

The back-to-back arrangement also handles heat well. As the shaft warms and grows, the
inner races move outward and slightly unload the preload rather than piling more on. The
deep-groove bearing, preloaded axially so it behaves like an angular contact bearing, relaxes
the same way.

![Four load-path diagrams of the alternate spindle: thrust loading in each direction, radial loading, and thermal expansion, with the load paths traced in yellow through the bearings and housing](/assets/images/projects/lathe-spindle/alt-spindle-loading.png)

| | Team design | My alternate |
|---|---|---|
| Shaft diameter | 0.75 in | 1.00 in |
| Bearings | Timken LM11949/LM11910 tapered roller pair | Timken 5205K double-row angular contact + 205K deep-groove ball |
| Preload | 200 N | 300 N |
| Spindle + headstock deflection, X / Y / Z | 8.6 / 8.6 / 19.7 µm | 1.9 / 1.9 / 8.3 µm |
| Runout | 0.002 in | 0.0005 in |
| Bearing life, 24/7 operation | 5.9 years | 5 years |
| Bearing cost | $7.07 per bearing | $30 per set |

All three directions come in under the 11.77 µm budget, and runout drops by a factor of
four. The costs are about four times the bearing spend and a slightly shorter life, set by
the deep-groove bearing. The write-up closed with a press-and-preload assembly procedure.
The preload is set by displacement, turning the nut against a dial indicator until the disc
springs reach their rated working deflection, and then checked by pulling on the chuck with a
spring scale until the shaft starts to move.
