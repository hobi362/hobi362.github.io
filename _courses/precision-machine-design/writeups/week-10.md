---
pmd_subpage: true
layout: pmd-writeup
title: "Week 10: Fabricating and Testing the Spindle"
subtitle: "The spindle came out well — and then the chuck turned out to be eating the entire error budget"
week: 10
week_label: "Week 10"
order: 10
sheet: "2.70-WU-10"
summary: "Machined and tested the spindle, measuring runout at three locations, and found the chuck contributes an order of magnitude more error than the shaft."
topics: ["Spindle", "Runout", "Plain bearings", "Stiffness modelling", "Error budget"]
attachments:
  - label: "Error_Budget_Spreadsheet_RMH_Rev2.xlsx"
    url: "/assets/files/coursework/precision-machine-design/Error_Budget_Spreadsheet_RMH_Rev2.xlsx"
  - label: "Week 10 appendix — calculations (PDF)"
    url: "/assets/files/coursework/precision-machine-design/week09-appendix-calculations.pdf"
attachments_offsite:
  - label: "LatheDesign_RMH.xlsx — the full lathe design and stiffness calculation"
    size: "300.8 MB"
youtube_id: ""
video_caption: ""
---
*Design of a Rotary Motion Module, Part 3*

Fabricating and testing the rotary motion module, and updating the error budget for the
completed design.

### 1. Fabrication

The spindle housing and shaft were machined in LMP over several days. Few complications, and
I'm satisfied with the result — despite running on bushings rather than rolling-element
bearings, **I can turn the spindle by hand.**

![The manufactured spindle beside its SolidWorks model — the aluminium housing with the three-jaw chuck threaded on the front and the dual-nut lock at the rear, matching the CAD closely](/assets/images/courses/precision-machine-design/writeups/week-10/spindle-vs-cad.jpg)

### 2. Testing

The spindle went to the Hobby Shop and was clamped to a bench with three clamps. A dial
indicator measured radial runout, axial runout and stiffness. I measured radial runout at
**three locations** — on the spindle shaft, on the mini-chuck, and on a simulated part tip,
using a spherical ball on a post from the dial indicator set to stand in for the part.
Further tests measured the torque needed to turn the spindle with and without cutting loads.

![Four testing photographs: (a) chuck runout with the dial indicator against the chuck body, (b) part radial runout with the indicator on a ball tip held in the chuck, (c) part axial runout with the indicator on the chuck face, and (d) the torque test with a wrench on the shaft and the spindle clamped to the bench](/assets/images/courses/precision-machine-design/writeups/week-10/runout-testing.jpg)

I also drove the shaft with a drill. Spinning it at speed makes the runout error at the part
very apparent.

![Using a cordless drill to actuate the spindle shaft, with the spindle clamped to the workbench and the dial indicator set up against the chuck](/assets/images/courses/precision-machine-design/writeups/week-10/drill-actuation.jpg)

### 3. Results

![Three results tables. Torque to rotate the shaft, comparing predicted against measured for four cases -- no thrust bearings with and without a 10 kg load, and with thrust bearings under both conditions -- agreeing to within a few hundredths of a newton metre. Stiffness at the shaft tip, predicted 1,367,753 N/m against 1,307,087 measured. And radial runout measured from the spindle shaft, the chuck and the part ball tip, at 0.019, 0.064 and 0.305 mm against predictions of 0.052, 0.052 and 0.087 mm](/assets/images/courses/precision-machine-design/writeups/week-10/torque-stiffness-runout-results.jpg)

I was pleased with how well the calculations lined up with the measurements. Initially I
measured radial runout with the indicator on the hub of the chuck, and was shocked at how bad
the readings were given the care I'd put into machining the housing and shaft. On a
classmate's suggestion I measured at other locations too — directly on the shaft, and at the
part tip.

| Measured at | Radial runout |
|---|---|
| Spindle shaft | **0.019 mm** |
| Chuck | 0.064 mm |
| Part ball tip | **0.305 mm** |

**The shaft is fine; the chuck is the problem.** I had assumed the chuck wouldn't be a
concern, and instead it eats nearly the whole error budget on its own. It now needs to go
into the spreadsheets, and I need a more accurate way to attach it to the spindle.

![Axial runout table: 0.019 mm measured against 0.013 mm predicted, a difference of 0.006 mm](/assets/images/courses/precision-machine-design/writeups/week-10/axial-runout.jpg)

Axial runout agrees reasonably with prediction, which suggests the model in the spreadsheet
is right.

**The stiffness model needed a correction.** It originally predicted nearly ten times the
stiffness I measured. Reviewing the class notes, I didn't fully follow the derivation
Professor Slocum was doing with pressure profiles — but an intuitive version works: assume
only a small fraction of the bushing is actually carrying the load and elastically deforming.
Taking **one-third to one-fifth of the bushing's projected area** as bearing the reaction
forces brings the model remarkably close to the measurement.

Finally, I estimated the friction torque from the plain bearing sleeves and from their
flanges in contact with the shaft. Since I can turn the spindle with my fingertips, I'm
satisfied those estimates are about right — and the torque table bears it out.

### 4. Error budget

![Error budget spreadsheet results for the entire machine across seven axes, giving deltaX, deltaY and deltaZ as sum, RSS and average, with a vector displacement of 66.57 microns sum and 66.17 RSS](/assets/images/courses/precision-machine-design/writeups/week-10/error-budget-results.jpg)

I updated the spreadsheet with the spindle's radial and axial runout plus the errors from
the linear motion module. Surprisingly I'm **still inside the 100 µm target**, though I'll
keep looking for pitfalls and errors I've missed.
