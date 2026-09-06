---
pmd_subpage: true
layout: pmd-writeup
title: "Week 4: Closing the Loop on KC and EAC"
subtitle: "Chasing down why measured stiffness didn't match predictions"
week: 4
week_label: "Week 4"
order: 4
sheet: "2.70-WU-04"
summary: "Root-caused the kinematic coupling's stiffness gap and re-fabricated the EAC with more contact points."
topics: ["Error analysis", "Design iteration"]
youtube_id: ""
video_caption: ""
---
Week 4 was a reflection week rather than a new build — going back through the kinematic
coupling and EAC work from the previous two weeks and following up on staff feedback
rather than starting something new. Two things stand out from it.

First, I chased down why the kinematic coupling's measured stiffness was ~20x lower than
predicted (flagged in Week 2). Watching the coupling under load, I noticed the flats
machined onto the wooden spheres weren't perfectly flush against the plate — a small
manufacturing defect that's exactly the kind of thing a first-order spreadsheet model can't
see, and exactly the kind of thing that matters most in a system whose entire value
proposition is deterministic contact.

Second, I rebuilt the EAC with five additional slots — nine pin-slot features total instead
of four — plus a machined concentric hole in each plate specifically to test radial
accuracy independent of the flexure features. That's the elastic-averaging prediction in
action: more features should mean better averaged accuracy, and I wanted a test that
isolated that effect cleanly rather than reading it off noisy aggregate measurements.
