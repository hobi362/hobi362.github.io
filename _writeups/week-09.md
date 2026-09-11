---
pmd_subpage: true
layout: pmd-writeup
title: "Week 9: Designing the Rotary Motion Module"
subtitle: "A plain-bearing spindle, and the thermal calculation that says it jams after 18 seconds of cutting"
week: 9
week_label: "Week 9"
order: 9
sheet: "2.77-WU-09"
summary: "Designed the spindle around IGUS plain bearings, modelled its radial and axial stiffness, and calculated the frictional heating that would expand the bearings into a jam."
topics: ["Spindle design", "Plain bearings", "Thermal expansion", "PV limits", "Error budget"]
attachments:
  - label: "Week 9 appendix — calculations (PDF)"
    url: "/assets/files/coursework/precision-machine-design/week09-appendix-calculations.pdf"
  - label: "Error_Budget_Spreadsheet_RMH_Rev3.xlsx"
    url: "/assets/files/coursework/precision-machine-design/Error_Budget_Spreadsheet_RMH_Rev3.xlsx"
attachments_offsite:
  - label: "LatheDesign_RMH.xlsx — the full lathe design and stiffness calculation"
    size: "300.8 MB"
youtube_id: ""
video_caption: ""
---
*Design of a Rotary Motion Module, Part 2*

This week: fabricate and test the rotary motion module, and update the error budget —
geometric and stiffness — for the completed design.

![CAD overview of the whole lathe: the cylindrical spindle housing on its blue carriage riding one T-rail, with the three-jaw chuck facing the red tool holder on a second carriage on the perpendicular rail](/assets/images/courses/precision-machine-design/writeups/week-09/lathe-cad-overview.jpg)

### 1. Design of the rotary motion module

Knowing time would be tight, I kept the spindle as simple as I could and built it around the
plain bearings IGUS gave us in sample kits. I chose the **J3 Iglide flanged bearing** because
it is rated as resistant to unclean environments with a longer working life than its
counterparts.

To relieve friction under axial load, there are two thrust washers at either end of the
spindle, interfacing between the flanged bearing and the shaft. Two nuts tightened together
at the end of the spindle preload the spring washer. Neither the thrust washers nor the
plain washers actually need preload to work here, so the spring washer's preload is chosen
simply to keep the shaft in place under longitudinal force.

![The basic spindle design in two views, annotated with the dual-nut lock, spring washer, quarter-twenty bolts to attach to the carriage, thrust washer and lathe chuck on the outside, and in section the IGUS J3 plain bearings, steel shaft, housing, half-thirteen threads and M14 by 1 threads. Housing 143 mm long by 51 mm](/assets/images/courses/precision-machine-design/writeups/week-09/spindle-design.jpg)

Several features locate the shaft in the housing and the chuck on the shaft. The **flanges on
the plain bearings** are press-fit into the housing and give the axial reference. A **flange on
the shaft** lets the front of the spindle press against the thrust bearing, fixed axially by
the spring washer and dual nuts. And a **small step inside the chuck** means you know exactly
how far the spindle is threaded in.

The features needing tight tolerances are the shaft diameter inside the J3 bearings, the
shaft diameter seating the chuck, and the housing bore.

![Two production drawings: the spindle shaft, 207 mm long with half-thirteen threads at one end and M14 by 1 at the other and toleranced diameters through the bearing seats, and the spindle housing showing the bore, mounting holes, a 35 degree chamfer and a vee-groove 2.54 mm deep](/assets/images/courses/precision-machine-design/writeups/week-09/spindle-drawings.jpg)

![Spindle bill of materials listing the housing, two Iglide J3 bearings, the steel shaft, a mini lathe chuck, a spring washer, a sample aluminium part to face, two half-thirteen nuts, two thrust bearings and four quarter-twenty bolts](/assets/images/courses/precision-machine-design/writeups/week-09/spindle-bom.jpg)

### 2. Stiffness

To get load-induced deflections you need a stiffness model for each component under radial
and axial load.

![Handwritten radial and axial stiffness models for the spindle: a section drawing identifying shaft, plain bearing, housing, thrust roller bearing, chuck and spring washer plus nuts, beside spring networks for radial compliance -- shaft in series with the two bearings and the housing -- and axial compliance treated as a bolted joint with effective stiffnesses combining thrust, plain and spring terms](/assets/images/courses/precision-machine-design/writeups/week-09/stiffness-models.jpg)

Radial compliance at the centre of stiffness means computing the effective stiffness of the
members carrying the cutting force — the shaft in series with the bearing and housing
stiffness. Axial stiffness is the shaft acting as a **bolt** clamping the plain bearings,
thrust washers and housing together.

### 3. Error motions

The plain bearing and shaft need a transition fit, so there will be angular error depending
on the difference between the bearing's inner diameter and the shaft's outer diameter. I
expect that to dominate the spindle's geometric error. The other contributors are the
straightness and concentricity of the housing bore, the concentricity of the bearings, and
the straightness and concentricity of the shaft.

![Handwritten derivation of the spindle's error motions from the clearance between shaft and bearings, giving the tilt angle phi as arctan of the diameter difference over L over two, then propagating it to errors at the spindle centre and at the part tip](/assets/images/courses/precision-machine-design/writeups/week-09/error-motions.jpg)

### 4. Friction and heat generation

The concern that might undo this design is frictional heat while spinning. To check the
spindle won't jam from thermal expansion, I estimated the expansion of the shaft and the J3
bearings from the power dissipated in friction — and calculated the bearings' PV value to
confirm the cutting loads won't overstress them.

![Handwritten PV calculation for the plain bearing giving a projected contact area, a pressure of 41 psi, a surface velocity of 164 fpm and a PV of 6758 psi-fpm with all criteria met, beside a journal bearing friction derivation arriving at the frictional torque opposing the motor torque](/assets/images/courses/precision-machine-design/writeups/week-09/pv-and-friction.jpg)

The thermal argument runs: knowing the allowable expansion between bearing and shaft, find
the temperature rise that produces it, then use the frictional power to find how long that
rise takes.

![Two equations: power dissipated times time equals m c delta T, and delta r equals r alpha delta T](/assets/images/courses/precision-machine-design/writeups/week-09/thermal-eqs.jpg)

![The combined result: time equals m c over P dissipated, times delta r over r alpha](/assets/images/courses/precision-machine-design/writeups/week-09/thermal-time-eq.jpg)

The bearings' coefficient of thermal expansion was on the datasheet but the specific heat
capacity wasn't, so I estimated it as similar to Delrin.

| | |
|---|---|
| Steel shaft expands enough to jam after | about 1 hour |
| **J3 bearings expand enough to jam after** | **18 seconds of cutting** |

Not a comforting result, and a good illustration of why plain bearings aren't normally used
this way. I want to proceed regardless, but with lubricant to cut the friction coefficient
and ventilation holes in the spindle to help dissipate heat.

### 5. Error budget

![The error budget configuration: an annotated CAD model showing seven coordinate systems from the tool tip through the x-carriage, x-rail, base plate, z-rail, z-carriage and spindle, with a table of each frame's x, y and z offsets in millimetres and the handwritten working that produced them](/assets/images/courses/precision-machine-design/writeups/week-09/error-budget-configuration.jpg)

![Error budget spreadsheet summary showing all seven axes' geometric errors as sum, RSS and average, with a vector displacement of 0.104116 in the sum column and 0.057446 RSS](/assets/images/courses/precision-machine-design/writeups/week-09/error-budget-results.jpg)

The results summary puts the net vector displacement at **0.08 mm**, though there are still
gaps. Next week I need to add the stiffness of the rails and of the bolted joints connecting
rails to base and spindle to carriage — I expect those to be stiff enough not to invalidate
the 0.08 mm, but they belong in the model.

I'm also still working out exactly where each error portion goes and how they combine.
Working the HTMs for the linear slide alone made sense at the time; assembling the whole
machine is harder. It would help if the spreadsheet had one place to keep a running list of
all the random and parallelism errors you can calculate from geometry, and then combined
them for you. Perhaps there is and I haven't spotted it.

### 6. Machining

![The stock for the spindle laid out: a length of steel round bar, a rectangular aluminium block for the housing, and the mini lathe three-jaw chuck](/assets/images/courses/precision-machine-design/writeups/week-09/spindle-stock.jpg)

This week I prepared the stock for the spindle — the exact aluminium and steel alloys for
housing and shaft are still unknown. I also managed to find one of the old 2.72 mini-lathe
chucks to use, which I'm pretty excited about.
