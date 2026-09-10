---
pmd_subpage: true
layout: pmd-seekgeek
title: "Seek & Geek 1: The Zippo Lighter"
subtitle: "Why the sparks are hot, why the case survives being sat on, and how the lid stays where you put it"
week: 1
week_label: "Week 1"
order: 1
sheet: "2.77-SG-01"
summary: "Took a Zippo apart and worked through the oxidation physics behind the spark, a plate-yield estimate on the case, and the bi-stable cam that holds the lid."
topics: ["Reverse engineering", "Bi-stable mechanism", "Plate bending", "FRDPARRC"]
youtube_id: ""
video_caption: ""
---
Sitting down to work one morning, I lit some incense — and realised that in all the years
I've carried this Zippo, I had never taken it apart for any reason other than refilling it.
That seemed like a Seek & Geek waiting to happen.

![Left, a hand-drawn engineering notebook page headed "Seek n Geek #1 Zippo", labelling the body, hinge, brass sheetstock with chrome finish, flint wheel, chimney, bi-stable cam with spring, tube for spring, threads, wick, flint, flint spring, screw, rayon balls and felt pad. Right, a labelled cutaway of the assembled lighter showing the wick, flint wheel, flint, rayon balls, spring, felt pad and screw](/assets/images/courses/precision-machine-design/seek-and-geek/week-01/teardown-sketch-and-cutaway.jpg)

### How it actually works

Fuel goes in through a hole under the felt pad and is absorbed by the rayon balls. Capillary
action draws it up the wick to the exposed section beside the flint wheel, where it
evaporates, so the wick sits in a small cloud of fuel vapour. Run a thumb down the flint
wheel and the spring-preloaded flint scrapes tiny pieces off it.

**Then the interesting part.** Firesteels are steel or a pyrophoric iron alloy such as
ferrocerium. Iron exposed to oxygen oxidises — that's rust — and oxidation is strongly
exothermic. We never notice the heat because everyday iron is large: ambient temperature and
a big surface area carry the heat away as fast as it appears.

Shave the same metal into specks and the ratio inverts. The freshly exposed surface is
enormous relative to the volume of the shaving, so as that surface oxidises there is
nowhere for the heat to go. The temperature jumps and the particle emits light and heat —
a spark.

![Two microscope images of flint shavings on a gridded surface, the left annotated with a 0.15 mm scale arrow showing a single fine shaving, the right annotated with a 1 mm scale arrow showing a scattering of larger particles](/assets/images/courses/precision-machine-design/seek-and-geek/week-01/flint-shavings-micrograph.jpg)

Those sparks ignite the vapour around the wick, capillary action keeps pulling fuel up from
the soaked rayon balls, and the flame's own heat keeps evaporating it into the reaction.

The windproofing is the chimney. It admits just enough airflow around the exposed wick to
set up a vortex that holds the flame tip above the chimney's rim — but not so tall that you
burn yourself closing the lid.

### Reverse-engineering the requirements

Working backwards from the design, the functional requirements look like:

1. Ignite in windy conditions
2. Robust case against the hazards of daily life
3. One-handed operation
4. Safe
5. Long lifetime

**The case.** Stamped brass, nickel-coated, chrome-plated — the nickel is there because
chrome won't adhere to brass directly. Approximating the outer case as a plate with three
simply supported edges and one free edge gives a first-order yield estimate.

![Handwritten calculation treating the lighter case as a simply-supported plate with one free edge under distributed load P, using Roark's formulas with a equals 38.5 mm, b equals 12.75 mm and t equals 0.5 mm, an a-over-b ratio of about 3 giving beta 0.36 and alpha 0.064, and a brass yield stress of 135 MPa, arriving at a yield force of 283 N or 63 lbf](/assets/images/courses/precision-machine-design/seek-and-geek/week-01/case-yield-calculation.jpg)

**63 lbf to yield** — which says the bare case will deform if a normal person sits on it. The
calculation ignores the stiffness the insert adds, though, and the insert is what actually
prevents it. So I tested it: standing on the case *without* the insert deformed it, though
not beyond repair. Standing on it *with* the insert in place did not.

**The lid.** The mechanism I hadn't noticed in years of use is a bi-stable cam and spring.
The cam's shape plus a spring plate holds the lid both open and closed until the user
decides otherwise.

![Close-up photograph of the inside of the lighter case with the cam and spring plate mechanism circled in red beside the flint wheel](/assets/images/courses/precision-machine-design/seek-and-geek/week-01/bistable-cam.jpg)

![Handwritten stability analysis of the cam showing the two stable configurations, a marginally stable case, and a sequence of sketches tracking the spring force and reaction force through the cam's rotation, with the note that the curvature of the cam lets the spring force act through the pivot point in equilibrium and that the curved cam does not interfere with hinge operation](/assets/images/courses/precision-machine-design/seek-and-geek/week-01/cam-stability-analysis.jpg)

The spring exerts enough torque on the cam about its pivot to stop the lid moving without
input. Working the moment balance through the cam and the lid gives the thumb force needed
to break it out of a stable position.

![Handwritten force calculation working through the cam geometry -- 8 mm, 1.75 mm and 7 mm lever arms and a 38.5 mm lid -- to F thumb equals F spring times 0.097, then a minimum thumb force of 1 N, noted as easily doable by human fingers, implying a spring preload of about 10 N](/assets/images/courses/precision-machine-design/seek-and-geek/week-01/cam-force-calculation.jpg)

**1 N to start the lid moving**, from a spring preload of roughly 10 N — comfortably within
what an adult can apply with a thumb, which is exactly where you'd want it.

### The design process, reconstructed

![FRDPARRC table for the Zippo with rows for igniting under windy conditions, a robust case, one-handed operation, safety and long life, each broken out into design parameters, analysis, references, risks and countermeasures -- referencing the National Fire Protection Association, Roark's, Beer and Johnston, ANSUR II, ASTM F400-97 and Shigley](/assets/images/courses/precision-machine-design/seek-and-geek/week-01/frdparrc-table.jpg)

### References

All authentic Zippos are still made in Bradford, Pennsylvania, and there is a very good
[*How It's Made* segment](https://www.youtube.com/watch?v=XUAnHNA2IP0) on the process.

- [US2704447 — the original Zippo patent](https://www.google.com/patents/US2704447)
- [US5044933](https://www.google.com/patents/US5044933) · [US6247920](https://www.google.com/patents/US6247920) · [US20040209211](https://www.google.com/patents/US20040209211)
- [Zippo — About Us](https://www.zippo.com/pages/about-us)
- [Flint and steel: what causes the sparks](http://survivaltopics.com/flint-and-steel-what-causes-the-sparks/)
- [How lighters are made](http://www.madehow.com/Volume-7/Lighter.html)
