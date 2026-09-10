---
pmd_subpage: true
layout: pmd-writeup
title: "Week 7: Fabricating and Testing the Linear Motion Slide"
subtitle: "The week the model was wrong, the re-analysis fixed it, and the carriage fell apart"
week: 7
week_label: "Week 7"
order: 7
sheet: "2.70-WU-07"
summary: "Finished the first linear motion slide, measured its stiffness and accuracy, and rebuilt the yaw and pitch model after measurements came in 10x and 20x below prediction."
topics: ["CNC milling", "Stiffness testing", "Model correction", "Metrology", "Design for test"]
attachments:
  - label: "Week 7 appendix — updated drawings (PDF)"
    url: "/assets/files/coursework/precision-machine-design/week07-lms-appendix.pdf"
attachments_offsite:
  - label: "LMS_Analysis_RMH.xlsx — including the LMSTesting sheet with all measurement data"
    size: "142.1 MB"
youtube_id: ""
video_caption: ""
---
*Design of a Linear Motion Slide, Part 3*

The goal this week was to finish fabricating the linear motion slide and complete the
stiffness, accuracy and repeatability testing — while keeping notes on the manufacturing
techniques so I could build the second slide over spring break.

### 1. Design updates

![Annotated CAD of the original linear motion slide design, with callouts for the countersunk rail mounting holes, the three kinematic coupling balls, the bolts securing the spindle to the carriage, the keeper plate, the 8 mm leadnut, the set screws preloading the bearing pads, and the clearance holes for clamping the two carriage halves. Carriage 101 by 87 by 51 mm](/assets/images/courses/precision-machine-design/writeups/week-07/original-design.jpg)

Two changes from the original. The rail is no longer an I-beam but a **pure T-beam**. And the
carriage is no longer one piece of aluminium but **two pieces of 25.4 × 87 × 101 mm stock,
bolted and JB Welded together**.

### 2. Manufacturing

The first slide took much longer than expected. I hadn't used a mill in a while, so it was
slow going until I learned the CNC features, which sped things up considerably. I took a lot
of drawing and design notes while machining so the features and drawings would be clearer
and easier to program next time.

![Two handwritten drawing markups covered in dimensions, tapped-hole callouts and correction notes taken at the machine during the machining process](/assets/images/courses/precision-machine-design/writeups/week-07/machining-notes.jpg)

Two aspects are worth elaborating on.

**Designing in the test features.** I knew going in that the carriage needed features that
would let me test its stiffness and accuracy. Every stiffness value can be reached with a
½-13 tapped bolt hole on the top *and* on the side of the carriage: with an eye-hook bolt,
pulling on the two configurations in different directions applies a specific, known moment
or force about a chosen axis. I also cut perpendicular vee-grooves to mount a laser pointer
along the carriage's x and z axes, for rotational stiffness plus yaw and pitch accuracy and
repeatability.

**Machining the side and keeper plates from one piece of stock.** Doing it this way meant all
the features — the bearing pad slots and the T-rail slots — got machined at once, and the
two halves could then be separated accurately and with confidence that the parts are
symmetric.

![Machining the slots for the gibs and bearing pads with the two halves still connected as a single piece of stock, and machining an insert for the T-rail on the mill](/assets/images/courses/precision-machine-design/writeups/week-07/machining-halves-together.jpg)

![The finished slide assembly on the bench, annotated with the vee-grooves for mounting the laser pointer, the large bolt holes for testing stiffness, and the top plate made from a single piece of stock, with the T-rail lying alongside](/assets/images/courses/precision-machine-design/writeups/week-07/finished-assembly.jpg)

### 3. Testing

![The test setup: the slide mounted with its rails in the vise jaws, the laser mounted in a vee-groove, the side-mounted testing bolt fixture, lubrication applied to the rail, and the x, y and z axes marked](/assets/images/courses/precision-machine-design/writeups/week-07/test-setup.jpg)

Rotational and linear stiffness were tested with 100 N spring scales. Rotational stiffness
came from applying a moment about x, y and z separately and measuring deflection with the
laser projected **8 metres** away.

![Testing roll and pitch stiffness by pulling on an eye-hook bolt with a spring scale, with the slide clamped in the vise and the laser projecting toward a target sheet](/assets/images/courses/precision-machine-design/writeups/week-07/roll-pitch-testing.jpg)

Linear stiffness along y and z used a dial indicator fixed to the vise base. **Neither axis
showed measurable deflection** — the system is stiffer than my instruments can resolve.

Pitch (θz) and yaw (θy) accuracy and repeatability came from marking where the laser landed
with the carriage at each extreme of its travel.

![The laser target sheet covered in marked data points in red, green and blue clusters, with an 11 mm scale reference noted](/assets/images/courses/precision-machine-design/writeups/week-07/laser-data-collection.jpg)

#### The model was wrong, and fixing it

Roll stiffness agreed reasonably with the spreadsheet. **Yaw came in about 1/10th of
prediction and pitch about 1/20th.**

My original model treated the entire carriage as a simply supported beam under various
moment loads. I swept the sensitive parameters and found that *no* reasonable set of carriage
values would produce the stiffness I was actually measuring — which is the useful kind of
negative result, because it says the model form is wrong rather than its inputs.

Re-analysing the carriage: the top is 25.4 mm thick aluminium, so any deflection I measured
was almost certainly the **side and bottom plates bending**, not the whole carriage acting as
a beam. I rewrote the analysis so pitch stiffness is a torsional load on the bottom plates
and yaw stiffness a torsional load on the side plates. With only small parameter tweaks —
thickness, length — the prediction matched the measurement.

![Stiffness testing summary table comparing calculated against predicted stiffness for yaw, pitch and roll and for linear y and z, with predicted-to-measured ratios of 1.18, 1.01 and 0.91](/assets/images/courses/precision-machine-design/writeups/week-07/stiffness-summary.jpg)

Ratios of 1.18, 1.01 and 0.91 — the corrected model tracks the hardware.

#### Accuracy along the rail

Yaw and pitch accuracy came from the distance between the average positions of the data
clusters as the carriage travelled rear to front. Vertical separation between cluster means
indicates pitch error from the flatness of the slide; horizontal separation indicates yaw
error. Repeatability is the standard deviation within each cluster.

![Flatness error data collection: the marked target sheet with the rear and front clusters labelled and the separations noted as 8.4 mm, 5 mm, 4 mm, 3 mm and 2 mm](/assets/images/courses/precision-machine-design/writeups/week-07/flatness-error-data.jpg)

![Yaw and pitch accuracy and repeatability table: accuracy of 0.375 mrad in yaw and 0.5 mrad in pitch, repeatability of 0.375 mrad in yaw and 0.25 mrad in pitch](/assets/images/courses/precision-machine-design/writeups/week-07/yaw-pitch-accuracy.jpg)

There is a lot of error as the carriage travels the length of the rail. A large part of it is
that I haven't worked out how to manufacture the bearing pads accurately and repeatably —
they were cut on the band saw, and I think the testing reflects exactly that. Finding a
more consistent process is a spring break job.

![Spreadsheet output showing applied loads, forces and moments on the carriage centre, load-induced errors of 0.19, 26.40 and 19.81 microns in x, y and z, and a stiffness block comparing each axis against requirement with measured yaw, pitch and roll values and their predicted-to-measured ratios](/assets/images/courses/precision-machine-design/writeups/week-07/error-output-sheet.jpg)

With that correction in place, I believe the spreadsheet can now predict the accuracy of a
part manufactured on this slide.

### Then chaos struck

While I was writing this report and handling the carriage, **one of the sides fell off.**

![The carriage in pieces on the workbench, one aluminium side plate detached and lying beside the rest of the assembly](/assets/images/courses/precision-machine-design/writeups/week-07/broken-carriage.jpg)

There's a chance I didn't prepare the surface well enough before epoxying. I did clean it,
apply the epoxy, clamp the pieces and leave them 15 hours — but perhaps they needed longer.

Luckily all the testing was already done. Part of me wonders whether the measured-versus-
predicted discrepancy was partly the epoxy joint all along. I'll retest the module once
I've properly re-bonded the carriage and made some decent bearing pads.
