---
pmd_subpage: true
layout: pmd-seekgeek
title: "Seek & Geek 2: The Indoor Rowing Machine"
subtitle: "Roller spacing that beats jamming, and why the resistance scales with the cube of how fast you row"
week: 2
week_label: "Week 2"
order: 2
sheet: "2.77-SG-02"
summary: "Looked at the sliding seat's roller geometry and worked the fan flywheel's power dissipation, which goes as the cube of angular velocity."
topics: ["St. Venant", "Linear guides", "Flywheel dynamics", "Drag torque"]
youtube_id: ""
video_caption: ""
---
This week, a very common piece of gym equipment — the indoor rowing machine, designed to
simulate what rowing a boat on water feels like.

![Left, a line drawing of a person seated on an indoor rowing machine showing the sliding seat, handle, chain and fan housing. Right, a photograph of the actual machine against a brick wall with its rail, seat and flywheel cage](/assets/images/courses/precision-machine-design/seek-and-geek/week-02/rowing-machine.jpg)

### The sliding seat

The first mechanism that caught my attention was how smoothly the seat rolls along the rail
despite someone sitting on it and twisting.

![Hand-drawn back view and side view of the sliding chair labelling the seat, roller wheels, roller wheel flange, mounting plate, bolt, up-stop wheels and guide rail, with notes that the roller wheel holds the weight of the person, that motion is very smooth even under load, and that the flange and mounting plates provide stability despite twisting. A side sketch gives the 7 inch roller spacing against a 3 inch width for a 2.33 to 1 ratio, annotated "St. Venant". Right, a photograph looking along the rail at the roller riding on it](/assets/images/courses/precision-machine-design/seek-and-geek/week-02/sliding-seat.jpg)

A solid shaft with a shoulder bolt — and, I assume, radial bearings — carries the rider's
weight. Flanges on the shaft limit twisting, which is what stops it jamming. An up-stop wheel
on either side of the linear guide keeps the seat from lifting off the rail entirely.

Measuring it, the roller wheels are spaced to avoid jamming despite angular misalignment of
the seat: **7" apart against a 3" width, a ratio of about 2.3**. Thank you, St. Venant.

### Under the hood

![Top left, a photograph of the chain, springs and pulleys inside the machine. Top right, a hand-drawn diagram tracing the chain in blue from F in through the pulleys to the fan flywheel and the shock cord in red back to ground. Below, a fuller free-body diagram of the bracket with three chain tensions balanced against two shock-cord springs, working sum of forces equals zero to 3T equals 2kx, then T equals two-thirds kx, and with a 22 N measurement over 0.44 m giving a shock cord stiffness of about 23 N/m](/assets/images/courses/precision-machine-design/seek-and-geek/week-02/chain-and-shock-cord.jpg)

The handle connects to a roller chain that runs around a series of pulleys to a bracket. The
first pulley the chain meets is directly coupled to the fan flywheel. The bracket is tied to
two strands of shock cord, themselves routed through pulleys and grounded to the frame —
that's the return spring that pulls the handle back between strokes. Balancing the bracket
gives a shock cord stiffness of roughly **23 N/m**.

### The flywheel is the whole trick

The flywheel stores energy between strokes to reproduce what water does. It works as a
centrifugal fan: air enters axially, the blades throw it outward, and it exits radially. The
power dissipated in dragging that air around is what you feel as resistance.

![Handwritten flywheel analysis. First a sketch noting that the input force must not only fight the shock cord spring but also accelerate the fan flywheel, and that rowing faster means accelerating it more, which simulates the drag of rowing on water. Then the power dissipation derivation: mass flow equals rho times area times r omega, energy equals half m r squared omega squared, giving P dissipated equals one half r cubed rho A omega cubed, and drag torque equals one half r cubed rho A omega squared. Finally the power-in side, showing that at constant angular velocity the applied torque equals the drag torque](/assets/images/courses/precision-machine-design/seek-and-geek/week-02/flywheel-dynamics.jpg)

The result falls out cleanly, with *r* the fan radius, *ρ* the air density, *A* the inlet
area and *ω* the fan speed:

| | |
|---|---|
| Power dissipated | P = ½ · r³ · ρ · A · ω³ |
| Drag torque | Γ = ½ · r³ · ρ · A · ω² |

**Power dissipated goes as the cube of angular velocity** — so the faster you row, the far
harder it fights back. And the term that isn't fixed by the hardware is *A*, the air inlet
area, which is exactly what the damper lever on most rowing machines adjusts. Open it up and
the fan has to move a larger mass flow, which raises the resistance you feel.

### References

- [Rowing machine teardown video](https://www.youtube.com/watch?v=z27whepQl_4)
- [The physics of ergometers — Oxford AOPP](http://eodg.atm.ox.ac.uk/user/dudhia/rowing/physics/ergometer.html)
- [Fundamentals of manufacturing — Gateway Coalition](http://www.gatewaycoalition.org/files/Fundamentals_of_manufacturing/web/synth/Ch2/2_1f.htm)
