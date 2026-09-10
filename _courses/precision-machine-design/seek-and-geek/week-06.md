---
pmd_subpage: true
layout: pmd-seekgeek
title: "Seek & Geek 6: The Fencing Foil"
subtitle: "A Rayleigh-Ritz buckling load for a tapered blade — and why it has to buckle upward"
week: 6
week_label: "Week 6"
order: 6
sheet: "2.70-SG-06"
summary: "Analysed the buckling of a fencing foil with Rayleigh-Ritz, and looked at how the semi-circular cross section and eccentric loading force it to bend the safe way."
topics: ["Buckling", "Rayleigh-Ritz", "Tapered beams", "Eccentric loading", "Design for safety"]
youtube_id: ""
video_caption: ""
---
This past weekend I went fencing for the first time, and became fascinated by the sword —
a foil. When one fencer hits another, the foil buckles and deflects upward at the middle.

**That direction is critical.** If the foil deflects the wrong way — downward — the tip can
slide up under the opponent's protective mask.

So this week: the buckling of a fencing foil, and how its cross-sectional geometry might
guarantee it buckles in the right direction.

![Three annotated photographs of the foil: the spring-loaded button at the tip that registers a hit, the wires running along the length of the blade, and a close-up showing the semi-circular cross section](/assets/images/courses/precision-machine-design/seek-and-geek/week-06/foil-features.jpg)

### Buckling is the point

It's worth noting that the sword buckling is *desirable*. It takes roughly **7.5 N** on the
button at the tip to register a hit, and fencers are taught to impart more than the minimum
to make sure the hit lands. That extra force is what buckles the blade.

Looking closely at the foil afterwards, I noticed the semi-circular cross section and the
taper along its length, and my instinct said both were deliberate.

![Handwritten setup. The semi-circular cross section is characterised with centroid at 4r over 3 pi and I-xc of approximately 0.11 r to the fourth. The tip button is sketched with its 0.5 inch and 0.25 inch diameters, noted as spring loaded and requiring 750 g, about 7.5 N, to register a hit per Bay State Fencers. A sketch of a hit shows the blade bowing. The problem is then framed as a fixed, simply-supported tapered beam 90 cm long, to be solved by Rayleigh-Ritz, with four boundary conditions requiring a fourth-order shape function](/assets/images/courses/precision-machine-design/seek-and-geek/week-06/setup-and-boundary-conditions.jpg)

Four boundary conditions — zero slope and displacement at the fixed end, zero displacement
and moment at the tip — mean a fourth-order trial function.

![Handwritten solution for the shape function coefficients, working through the boundary conditions to a-1 equals minus 5 L over 2 and a-2 equals 3 L squared over 2, boxing the result phi equals x to the fourth minus five halves L x cubed plus three halves L squared x squared, along with its first and second derivatives, and the Rayleigh-Ritz quotient for the critical load](/assets/images/courses/precision-machine-design/seek-and-geek/week-06/shape-function.jpg)

### The taper makes it messy

![Handwritten treatment of the varying moment of inertia. The radius is written as a linear function of position along the blade, giving I-xc as 0.11 times that function to the fourth power, which when substituted into the Rayleigh-Ritz integral produces an expression annotated "this is a total mess to figure out!" For simplicity on a first pass, a constant average moment of inertia of 1.11 by 10 to the minus 11 is used with a Young's modulus of 200 GPa for tempered annealed low carbon steel, giving EI of about 2.23](/assets/images/courses/precision-machine-design/seek-and-geek/week-06/moment-of-inertia.jpg)

The radius varies along the blade, so the moment of inertia does too — and carrying that
through the Rayleigh-Ritz integral gets ugly fast. For a first pass I took a constant average
moment of inertia instead, giving EI ≈ 2.23.

![Handwritten evaluation of the Rayleigh-Ritz quotient, expanding and integrating both polynomials over the blade length and dividing, arriving at a critical load of 55 N. The note reads that a thrust force of 55 N, about 5.5 kg, is required to buckle the fencing foil, and that this is a bit greater than experiments found online showing about 37.8 N of force bends the foil to shorten it by 17.5 cm](/assets/images/courses/precision-machine-design/seek-and-geek/week-06/critical-load.jpg)

| | |
|---|---|
| **Predicted buckling load** | **55 N** (≈ 5.5 kg) |
| Published experiment | ~37.8 N to shorten the foil by 17.5 cm |

Higher than the measured value, and there are good reasons why.

### Why the prediction runs high

![Handwritten discussion noting that the Rayleigh-Ritz calculation is not an exact solution, which accounts for some of the difference, and — importantly — that the analysis does not include the eccentricity of the sword or its initial deflection under gravity, sketched as an initial imperfection w-nought. Below, two sketches contrast a "good" upward bend against a bend that leaves a gap where the tip can slide under someone's mask and hurt them, with the conclusion that the orientation of the cross section and the initial displacement force it to bend a certain way](/assets/images/courses/precision-machine-design/seek-and-geek/week-06/buckling-direction.jpg)

Rayleigh-Ritz gives an upper bound rather than an exact answer, so some overshoot is
expected. More importantly, the analysis leaves out the **eccentricity** of the blade and its
**initial deflection under gravity** — a real foil is never the perfectly straight column the
idealisation assumes.

And that imperfection is exactly what makes the mechanism safe.

![Handwritten explanation of eccentric loading: a cross-section sketch shows the force F applied at a point beneath the neutral axis, so the load is eccentric and produces a bending moment that bows the blade upward. Below, a second pair of sketches shows that gravity acting on the sword pre-inclines it, adding an initial deflection w-nought that biases which way it buckles](/assets/images/courses/precision-machine-design/seek-and-geek/week-06/eccentric-loading.jpg)

The force lands *beneath the neutral axis* of the semi-circular section, so the loading is
eccentric — it carries a moment that bows the blade in one particular direction. Gravity
adds an initial deflection that biases it the same way.

Between the cross-section orientation and that initial displacement, the foil is made to
bend upward, away from the opponent's mask. A safety property falling out of the section
geometry rather than a separate mechanism.
