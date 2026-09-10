---
pmd_subpage: true
layout: pmd-writeup
title: "Week 11: Assembling the T-Based Lathe"
subtitle: "Two linear modules and a spindle become a machine — and the error budget jumps to 0.66 mm"
week: 11
week_label: "Week 11"
order: 11
sheet: "2.70-WU-11"
summary: "Assembled the complete lathe on an 80/20 base, made a tool holder and leadscrew mounts, and traced a 0.66 mm error budget largely to the three-jaw chuck."
topics: ["System integration", "Tool holder", "Leadscrew", "Error budget", "80/20"]
attachments:
  - label: "Error_Budget_Spreadsheet_RMH_Rev3.xlsx"
    url: "/assets/files/coursework/precision-machine-design/Error_Budget_Spreadsheet_RMH_Rev3.xlsx"
  - label: "2.70 final report (PDF)"
    url: "/assets/files/coursework/precision-machine-design/2-70-final-report.pdf"
attachments_offsite:
  - label: "LatheDesign_RMH.xlsx — the full lathe design spreadsheet"
    size: "300.8 MB"
youtube_id: ""
video_caption: ""
---
*Design of a T-Based Lathe, Part 1*

The objective this week was to assemble the two linear motion modules and the rotary motion
module into a T-based lathe. Next week: test it, and compare the expected facing accuracy
against the measured part.

![The completed T-based lathe photographed on the bench beside its SolidWorks model — the spindle housing on its carriage facing the tool holder on the perpendicular axis, all mounted on an 80/20 extrusion base](/assets/images/courses/precision-machine-design/writeups/week-11/completed-lathe.jpg)

### 1. Tool holder and leadscrew mounts

Two manufacturing developments this week: a tool holder for the facing tool, and leadscrews
on the carriages.

The tool holder is modelled on the ones found on standard machine shop lathes. **Four ¼-20
screws** clamp the tool during cutting, and a **½-13 threaded hole** in the carriage both
clamps the holder down and allows the tool angle to be adjusted.

![The tool holder from above and from the side, showing the four clamping screws across the top, the half-thirteen clamping bolt hole in the middle, and the cutting tool held in the slot](/assets/images/courses/precision-machine-design/writeups/week-11/tool-holder.jpg)

The leadscrews are mounted in the pillow blocks that came with the $13 Amazon set. Not a
proper mounting technique, but sufficient here — a production version would get real bearing
supports and support blocks. I'd recommend next year's class include a **second** rotary
motion module, so students build both a spindle and a leadscrew.

![Leadscrew mounting to the carriage and to the T-rails, with the brass leadnut visible in the milled slot, beside part drawings for the LMS rail and the tool holder](/assets/images/courses/precision-machine-design/writeups/week-11/leadscrew-mounting-and-drawings.jpg)

The leadscrew stiffness model builds on work by my classmate **Akshay Harlalka** for his
rotary motion module, and is folded into the error budget spreadsheet. There is currently
nothing eliminating backlash between the leadscrew and the carriage — next week I'll
experiment to see whether anti-backlash nuts are actually necessary.

### 2. Assembly

Assembly went smoothly. I used **80/20 extrusion as the base**, for stiffness compared to
wood and because no sufficiently large piece of stock was available. Assembling it so the
cutting forces act *with* the grain of the extrusion slot makes the separate pieces behave as
a single base plate. I did initially assemble the 80/20 in the wrong orientation — visible in
the photographs — and corrected it afterwards.

For a motor coupling I used a piece of plastic hose and two hose clamps between the spindle
and a hand drill. That lets me hold the drill out of the way, transmitting torque without
putting excess reaction force into the bearings. I also repurposed the shaft clamps that came
with the leadscrews as makeshift handles — even with proper preload on the carriage bearing
pads, the leadscrews turn easily by hand.

![A part held in the three-jaw chuck on the assembled lathe, and below it the final lathe assembly on the bench with the drill coupling attached and a handwritten note reading "play with my handles!"](/assets/images/courses/precision-machine-design/writeups/week-11/first-part-and-final-assembly.jpg)

### 3. Error budget

I found last week that some error gain values were incorrectly referenced in the spreadsheet.
With those fixed, the budget now predicts **0.66 mm of error in the manufactured part** —
far above my 100 µm hope, and high enough that I'm still hunting for which sources are
actually driving it.

![Error budget results for the entire machine across seven axes, giving a vector displacement of 0.78 mm as a straight sum and 0.49 mm RSS, above the annotated CAD showing the seven coordinate systems and their offsets](/assets/images/courses/precision-machine-design/writeups/week-11/error-budget-results.jpg)

One major source is already clear: **the three-jaw chuck**. Last week's rotary module tests
put the spindle shaft at only 0.003" of radial runout, but a part clamped in the chuck jaws
comes closer to 0.04". Next week I intend to machine test parts that **thread directly onto
the spindle shaft**, eliminating the chuck entirely.

### 4. Conclusion

On schedule per the syllabus, and happy with where this is. Next week: more test parts, full
testing of the lathe, and finalising the error budget.
