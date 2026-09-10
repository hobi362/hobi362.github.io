---
pmd_subpage: true
layout: pmd-writeup
title: "Week 8: Rotary Motion Module Concept Exploration"
subtitle: "Sketch-modelling a spindle and a leadscrew mount, and predicting 152.78 µm where 152.4 µm turned up"
week: 8
week_label: "Week 8"
order: 8
sheet: "2.70-WU-08"
summary: "Built sketch models of both rotary motion modules -- the spindle and the leadscrew carriage mount -- and found geometric error dominates the spindle by two orders of magnitude."
topics: ["Spindle design", "Bearing selection", "Leadscrew", "Buckling", "Error budget"]
attachments:
  - label: "RotaryMotionModule_RMH.xlsx — spindle and leadscrew analysis"
    url: "/assets/files/coursework/precision-machine-design/RotaryMotionModule_RMH.xlsx"
  - label: "Error_Budget_Spreadsheet_RMH.xlsx — the error budget at this stage"
    url: "/assets/files/coursework/precision-machine-design/Error_Budget_Spreadsheet_RMH.xlsx"
attachments_offsite:
  - label: "LatheDesign_RMH.xlsx — the full lathe design spreadsheet"
    size: "300.8 MB"
youtube_id: ""
video_caption: ""
---
*Design of a Rotary Motion Module, Part 1*

This week begins the rotary motion module. The T-based lathe needs two distinct ones: a
**spindle** to rotate the part being cut, and the **mounting of a leadscrew** to the carriages
that carry the spindle and the cutting tool. I pursued sketch models of both, to find the
manufacturing and design pitfalls while they were still cheap to discover.

![Two FRDPARRC tables side by side, one for the lead screw and one for the spindle, covering load-induced error on the carriage, range of travel around 350 mm, cost under 50 dollars and stepper-motor drive, with analysis, references, risks and countermeasures for each](/assets/images/courses/precision-machine-design/writeups/week-08/frdparrc-tables.jpg)

### 1. Spindle design

The spindle has to resist the high moment and thrust loads that come with cutting. With the
expected cutting loads already calculated, the load-induced deflections can be predicted.

High radial and axial stiffness normally means angular contact or tapered roller bearings
mounted back to back. The limitation is cost: typical angular contact bearings on
McMaster-Carr run **$30–300 each** and only start at 7/8". I found 17 × 40 × 12 mm tapered
roller bearings on vxb.com for **$5 each** — the catch being they aren't ABEC rated.

That is the real choice. Tapered roller bearings that may not hold tolerance but will
almost certainly be stiffer than any bushing I can buy or build; or a bushing that imposes
greater friction on the spindle and can't take thrust at all.

I built the sketch model with nylon extrusion acting as bushings, a turned-down aluminium
shaft and an aluminium housing.

![The spindle sketch model annotated with dial indicator, bushings, shaft, housing, clamp and the string used to hang a 5 kg mass, beside the hand-drawn sketch design showing the housing, tapered roller bearings, spacer and the point where the chuck mounts](/assets/images/courses/precision-machine-design/writeups/week-08/spindle-sketch-model.jpg)

From the sketch geometry I built a spreadsheet predicting angular and translational error at
the tip of the part, then tested it against the model. Geometric errors are the angles
produced by differences in the diameters of bearings, housing and shaft; load-induced errors
come from treating each bearing as a simple support and computing deflection at the point of
applied force.

![The geometric error derivation showing the bushing, shaft and housing diameters and the angle expressions theta equals arctan of the diameter difference over L over 2, beside a simply-supported beam diagram with reactions R1 and R2 under a load P](/assets/images/courses/precision-machine-design/writeups/week-08/spindle-error-derivation.jpg)

I measured both the geometric and load-induced errors successfully, but **the load-induced
data was lost when my computer crashed** — after the hobby shop had closed, so I couldn't
reproduce it before the deadline.

![Results table: predicted deflection from loads of 5.76 microns, predicted deflection from geometry of 152.78 microns, and measured deflection from geometry of 152.4 microns, with the load measurements marked NA](/assets/images/courses/precision-machine-design/writeups/week-08/spindle-deflection-results.jpg)

Even so, the headline result is clear: **geometric errors dominate**. The model predicted
152.78 µm of geometric error at the spindle and 152.4 µm turned up — two orders of magnitude
larger than the predicted deflection from loads. Holding tight tolerances on the shaft and
housing bearing diameters is therefore what will decide the wobble at the part/tool
interface.

### 2. Leadscrew design

The carriages also have to be actuated. My method is a leadscrew attached to the centre of
the carriage. By design and by what stock was available, my carriage and rail are extremely
chunky and stiff — the translational z and y stiffness wasn't even measurable with a dial
indicator. That means either the carriage-to-leadnut connection or the leadscrew mount has
to be compliant, so it isn't fighting a far stiffer carriage.

I bored a hole through a single block of aluminium and cut it in half to make two bearing
blocks, then turned nylon bushings on the lathe to a transition fit with the leadscrew.

Not wanting to drill into the carriage before the design was final — and short of time to
make a proper leadnut bracket — I used the vee-groove test feature as a seat for the leadnut
and hot-glued it in place.

![Testing the connection between the leadnut and the carriage, annotated with the lead nuts, the hot glue connection, the carriage, spacing blocks, clamps, a tap handle used as a lever, and a hand moving the carriage with one finger](/assets/images/courses/precision-machine-design/writeups/week-08/leadnut-connection-test.jpg)

On the first tests, pulling the carriage sheared the hot glue and separated the leadnut. The
quick fix was a **second leadnut on the other side of the carriage**, so one nut is always
pushing rather than pulling. That worked beautifully — I could apply a lot of load and still
move the carriage easily. Only push and pull forces need transmitting to the carriage, so
the hot-glued connection is fine for this purpose.

![Pushing on the carriage to simulate thrust force, annotated with an arrow marked F push at least 100 N and a note that the carriage is still being moved with two fingers](/assets/images/courses/precision-machine-design/writeups/week-08/thrust-force-test.jpg)

This test was more qualitative than quantitative — the point was to see how the carriage
moves with a cheap Amazon leadscrew mounted deliberately inaccurately, and to confirm that
mounting the screw badly wouldn't put undue stress on the carriage. A friend pushed hard on a
bolt sticking out of the side of the carriage — at least 100 N — and I could still move the
carriage through its full 350 mm of travel with two fingers. Hanging a 10 kg weight from the
same bolt made no difference either.

It is not accurate, and it still has backlash. I plan to mill a slot in the top of the
carriage for the leadscrew and bolt it down, probably with a spring and a second leadnut to
take out backlash. Now that I know the stiffness is completely dominated by the carriage, I
can machine a bracket in an accessible location without worrying the screw will bind.

One real problem: **nylon bushings support the leadscrew smoothly but take no thrust load at
all.** I'll turn down and thread the ends of the leadscrew so thrust bearings can go on with
nuts and spring washers at either end.

I also checked buckling, considering four mounting cases.

![Buckling calculation for the lead screw: a 300 mm screw of 8 mm root diameter, with buckling loads tabulated for fixed-free, fixed-simple, simple-simple and fixed-fixed configurations at carriage positions L/2 and L, alongside diagrams of each case. The conclusion reads that there is no danger of buckling even cutting at the far edge of the lead screw](/assets/images/courses/precision-machine-design/writeups/week-08/buckling-analysis.jpg)

Even in the least stiff configuration (fixed-free) and assuming genuinely poor steel — taking
Young's modulus as aluminium's — there is still a **factor of safety of 5** against the
cutting loads.

As a sanity check I compared the leadscrew stiffness model against measured deflection under
load.

![Leadscrew deflection test with a dial indicator over the screw, bearing blocks marked and a 5 kg mass hanging, beside a table giving measured deflections of 0.16 mm fixed-fixed and 0.35 mm fixed-simply-supported against predictions of 0.12 mm and 0.2 mm](/assets/images/courses/precision-machine-design/writeups/week-08/leadscrew-deflection-test.jpg)

Measured and modelled agree reasonably. I think the remaining discrepancy comes from the
nylon bushings and from my having measured with a tape measure and a certain amount of
eyeballing — varying the parameters by a few millimetres in the spreadsheet brings predicted
and measured into line.

![The simple assembly used for the error budget spreadsheet — a CAD model of the rail, carriage, spindle housing and tool in green, blue and red — beside the handwritten coordinate frame sketch and the table of x, y and z offsets for each numbered frame](/assets/images/courses/precision-machine-design/writeups/week-08/error-budget-assembly.jpg)

### 3. Conclusion

These sketch models did their job: they identified the danger zones before I commit to
manufacturing the real modules. For the spindle, geometric error is the worry — I am not the
best lathe operator, so I'll have to be creative making the shaft and bearing housing. For
the leadscrew, fixing the leadnut securely to the carriage should be manageable; I'll track
the forces the leadscrew misalignment exerts on the carriage and add them to the error
budget, and modify the screw to handle thrust.

Honestly, I think the cheap pillow bearings that came with the leadscrew could handle the
lathe's thrust loads perfectly well — but that doesn't feel like it's in the spirit of the
class.
