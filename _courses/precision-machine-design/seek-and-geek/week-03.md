---
pmd_subpage: true
layout: pmd-seekgeek
title: "Seek & Geek 3: The Ski Tow Rope"
subtitle: "What the hanging mass is for, and whether the capstan equation says the drive wheel can actually grip"
week: 3
week_label: "Week 3"
order: 3
sheet: "2.70-SG-03"
summary: "First-order analysis of a bunny-slope tow rope -- resistance force, the hanging tensioner mass, tension propagation through the pulley network, and a capstan slip check."
topics: ["Belt drives", "Capstan equation", "Pre-tension", "Free-body diagrams"]
youtube_id: ""
video_caption: ""
---
Growing up in Pensacola, Florida, I had endless opportunities to learn to ski… just kidding.
I had never skied in my life until this past weekend, when I finally took a lesson. Being the
mature — read: terrified — person that I am, I devoted an entire evening to the bunny slope.
Which gave me ample time to study a genuinely interesting mechanism: the ski tow rope.

![Three photographs taken at the ski slope at night: the drive station with its tractor wheel, guide pulleys and framework; the tow rope running up the slope with skiers holding on; and the author holding the rope, labelled "Me" with a yellow arrow](/assets/images/courses/precision-machine-design/seek-and-geek/week-03/tow-rope-photos.jpg)

A tow rope is an extremely long rope belt-drive and pulley system. Power is transmitted
through the friction connection between the rope and a tractor wheel acting as the drive
pulley. The detail that caught my eye was a **hanging mass** suspended from one of the
pulleys — as riders grabbed the rope, that pulley moved up and down.

![Hand-drawn diagram of the whole system labelled Ski Tow Rope, showing the motor and red belt-drive tractor wheel at left, the pulley network with the hanging mass suspended in a loop, and the rope running up the slope past four skiers being towed](/assets/images/courses/precision-machine-design/seek-and-geek/week-03/system-sketch.jpg)

### The resistance the rope has to overcome

![Handwritten calculation: five people at 100 lbs each gives 225 kg; a bunny hill slope of 7 degrees or 0.1222 rad; a ski-on-snow friction coefficient of 0.05. Free body diagrams resolve the weight into mg sin theta along the slope and mg cos theta normal to it, giving F resist equals mg sin theta plus mu mg cos theta, evaluated to 378 N](/assets/images/courses/precision-machine-design/seek-and-geek/week-03/resistance-force.jpg)

Five skiers at 100 lb each, a 7° slope, and a ski-on-snow friction coefficient of 0.05 give a
resistance force of about **378 N**. That covers both the friction of the skis on snow and the
component of each person's weight acting down the hill.

### Sizing the hanging mass

![Handwritten estimate of the hanging mass, sketched as a steel cylinder 5.5 inches in diameter and 12 inches long, with steel density 8050 kg per cubic metre giving a total mass of 37.6 kg](/assets/images/courses/precision-machine-design/seek-and-geek/week-03/hanging-mass.jpg)

Roughly **37.6 kg** of steel. Its job becomes clear once you write the force balance at the
pulley it hangs from: with the rope leaving at angle θ either side, 2T cos θ = mg, so

> **T = mg / (2 cos θ)** — the tension is set by the hanging angle.

### How tension propagates

If you have ever pulled on a rope you know it goes slack when it isn't in tension. Much like
preloading a spring, the tension just *before* the point where a person grabs the rope is
lower than just *after* it.

![Handwritten analysis of tension propagation through the pulley network. Top, the hanging mass free-body giving T equals mg over 2 cos theta with the note that tension varies with theta. Below, the full loop labelled with T-zero, T-A equals T-zero minus F on the loaded side and T-B equals T-zero plus F on the return, under the stated assumptions of constant angular velocity and no slip in the belt drive, resolving to theta equals arccos of mg over the quantity 2 T-zero minus F](/assets/images/courses/precision-machine-design/seek-and-geek/week-03/tension-propagation.jpg)

Working the balance at the hanging mass with the loaded and unloaded rope tensions on either
side gives the hanging angle as a function of the pre-tension and the skiers' load.

![Handwritten calculation substituting the 37.6 kg mass and 378 N resistance into the angle expression, noting the measured angle from the photographs is about 20 degrees, and solving back for a pre-tension T-zero of 385 N -- the tension in the rope before anyone grabs on. Marginal notes record the assumptions: frictionless pulleys and neglecting the weight of the rope](/assets/images/courses/precision-machine-design/seek-and-geek/week-03/initial-tension.jpg)

Reading the hanging angle off my photographs as roughly 20°, the pre-tension comes out at
**385 N** — that's the tension in the rope *before* anyone grabs it. For this first-order pass
I left out pulley efficiency losses and the weight of the rope, and assumed the rope runs
without slip over the tractor wheel at constant speed.

### Is "no slip" actually reasonable?

That assumption deserves a check, and the capstan equation provides it.

![Handwritten capstan check: T2 equals T1 times e to the mu theta, with the belt wrap angle read off the photographs as about 200 degrees or 3.5 radians. Substituting 385 plus 378 N against 385 N gives the required coefficient of friction as 0.196, annotated "Totally Reasonable!"](/assets/images/courses/precision-machine-design/seek-and-geek/week-03/capstan-check.jpg)

With about 200° of wrap on the tractor wheel, transmitting that tension without slipping
needs a friction coefficient of **0.196** — entirely reasonable for a rope on a rubber tyre.

### And will the rope hold?

Assuming the tow rope behaves like nylon, a 1.5" nylon rope has a
[breaking strength of 216 kN](https://www.engineeringtoolbox.com/nylon-rope-strength-d_1513.html).
Running the numbers at a hanging angle of 89° from vertical — nearly horizontal to the
pulleys — **24 adults at 150 lb each** could be towed with the rope at about one tenth of its
breaking stress.

Technically more than that could be pulled, but then the capstan equation becomes the
binding constraint rather than the rope: the tractor wheel has to be able to physically
transmit the tension. And in practice the hill is small, so more than about 15 people on the
rope would be unsafe anyway, purely from the spacing needed to stop inexperienced skiers
piling onto each other.

All in all, I'm glad I went skiing — and glad I took the time to understand the physics of
this thing.
