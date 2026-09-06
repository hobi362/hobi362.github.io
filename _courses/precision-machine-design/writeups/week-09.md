---
layout: pmd-writeup
title: "Week 9: Rotary Motion Module Concept Exploration"
subtitle: "Sketch-modeling a spindle and lead screw mount before committing to a design"
week: 9
week_label: "Week 9"
order: 9
sheet: "2.70-WU-09"
summary: "Compared bearing options for the spindle and sketch-modeled both RMMs before committing to a design."
topics: ["Bearing selection", "Concept modeling", "Rotary motion"]
youtube_id: ""
video_caption: ""
---
The lathe needed two distinct rotary motion modules (RMMs): the spindle that spins the
part being cut, and the lead-screw mounts that drive each linear carriage. Before
committing to either design, I built sketch models of both to find manufacturing and
design pitfalls early, while they were still cheap to fix.

The spindle came down to a real cost-versus-stiffness tradeoff. Angular contact or tapered
roller bearings in a back-to-back configuration give the best radial and axial stiffness,
but properly ABEC-rated ones from McMaster start at 7/8" and run $30–300 each. I found
unrated tapered roller bearings (17×40×12mm) for $5 each that looked promising on paper —
the catch being no tolerance rating — against the alternative of building a nylon bushing
that would be easier to source but would add friction and couldn't take thrust loads at
all. I built a sketch model using nylon-bushing "bearings" with a turned-down aluminum
shaft specifically to measure how much that tradeoff actually cost in practice, rather than
guessing from the bearing's datasheet alone.

![Testing the spindle sketch model — dial indicator measuring deflection under a hanging test mass](/assets/images/courses/precision-machine-design/week09-spindle-sketch-model.jpg)

For the lead-screw side, I tested the carriage-to-leadnut connection under simulated thrust
force (pushing by hand to approximate at least 100N) and ran a buckling-load calculation on
the lead screw itself — a check that's easy to skip when a screw looks "obviously" fine in
compression, but matters once you actually work out the slenderness ratio for a screw that
long.
