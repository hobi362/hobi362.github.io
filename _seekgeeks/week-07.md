---
pmd_subpage: true
layout: pmd-seekgeek
title: "Seek & Geek 7: Merlin's Apprentice at Legoland"
subtitle: "Hydraulic pressure and total drive power for a kids' ride, from photographs and a stopwatch"
week: 7
week_label: "Week 7"
order: 7
sheet: "2.77-SG-07"
summary: "Estimated the hydraulic piston force, cylinder pressure and total drive power for a spinning Legoland ride from photographs and ride timings."
topics: ["Hydraulics", "Free-body diagrams", "Rotational inertia", "Power estimation"]
youtube_id: ""
video_caption: ""
---
This week I bought tickets for Legoland adult night here in Boston and got to be a kid again
for a few hours. While there I rode a children's ride called Merlin's Apprentice.

![Two photographs from Legoland Boston: the author sitting on a bench beside a life-size Lego minifigure in the play area, and the themed entrance to the Merlin's Apprentice ride with its wooden sign and wizard figure](/assets/images/courses/precision-machine-design/seek-and-geek/week-07/legoland.jpg)

The ride is carriages on linkage arms, attached to a central tower that spins, with a
hydraulic cylinder raising and lowering each arm. A fun mechanism to run a first-order
analysis on.

![The ride photographed from a carriage, annotated with arrows identifying the linkage arm, the central spinning tower, the hydraulic piston and a carriage, with the wizard-hat canopies and red seats visible around the tower](/assets/images/courses/precision-machine-design/seek-and-geek/week-07/ride-mechanism.jpg)

I wanted the forces on the system and the power the hydraulic piston needs to raise and lower
each carriage, plus the power to rotationally accelerate all the carriages about the tower.

### The force balance

One feature that simplifies things: the free-body equations don't really change as the
carriage rises and falls. The arm angle changes, but the underlying function stays the same.

![Hand-drawn free body diagram of the linkage arm, 3 m long with the piston attached 1 m from the pivot at A. The weight W acts at the far end, resolved into W cos theta-3 and W sin theta-3, and the piston force F-p is resolved into components F-1 equals F-p sin theta-2 and F-2 equals F-p cos theta-2. Taking moments about A and solving gives F-p equals W cos theta-3 times 3 m, over the quantity sin theta-2 cos theta-3 plus cos theta-2 sin theta-3, times 1 m. Angles estimated from photographs are theta-2 about 75 degrees, theta-3 about 7 degrees resting and about 30 degrees elevated](/assets/images/courses/precision-machine-design/seek-and-geek/week-07/free-body-diagram.jpg)

Because it's a kids' ride, only one adult was allowed per carriage — so it holds two children
or one adult, which bounds the load.

![Handwritten load estimate: two kids or one adult, an average adult at 175 lb so no more than 350 lb of person, plus a ride frame probably weighing at least 100 lb, taken as a total of about 300 lb or 136 kg, giving W of 1360 N. Substituting into the moment result gives a piston force of 3658 N or 3.6 kN in the resting position. In the worst case with theta-3 equal to zero and the arm horizontal, the force rises to 4223.9 N or 4.2 kN, and dividing by the cylinder area gives a pressure of 0.93 MPa](/assets/images/courses/precision-machine-design/seek-and-geek/week-07/piston-force-and-pressure.jpg)

| | |
|---|---|
| Total load per carriage | ~1360 N |
| Piston force, resting | 3.6 kN |
| Piston force, worst case (arm horizontal) | **4.2 kN** |
| Cylinder pressure | **0.93 MPa** |

### Power to lift

With the pressure known, power follows from pressure × flow rate.

![Handwritten power calculation. From the ride video, lifting from resting to elevated takes about 3 seconds through 37 degrees of angle change, giving a total height change of 1.86 m or about 6 ft, with the cylinder extension one third of that by similar triangles. Flow rate is the cylinder area times velocity, giving the cylinder stroke as 0.6 m. Power equals pressure times flow rate, evaluating to 545 watts per carriage, and with seven carriages a total of 3.8 kW](/assets/images/courses/precision-machine-design/seek-and-geek/week-07/lifting-power.jpg)

545 W per carriage, and with seven carriages, **3.8 kW** for lifting.

### Power to spin

![Handwritten rotational power calculation. The system takes about 5 seconds to reach final speed. Modelling each arm and carriage as a rod plus a sphere with the parallel axis contribution gives a total moment of inertia of 19,418 kg m squared. Angular acceleration is 0.06 rad per second squared and final angular velocity 0.6 rad per second, giving 766 W, noted as not including drag forces or friction. Summing 545 watts per carriage times seven carriages plus the 766 W spin power gives a total of 4.5 kW](/assets/images/courses/precision-machine-design/seek-and-geek/week-07/rotational-power.jpg)

Modelling each arm and carriage as a rod plus a sphere with the parallel-axis contribution
gives a total moment of inertia of 19,418 kg·m², and **766 W** to spin the whole thing up.

| | |
|---|---|
| Lifting (7 carriages) | 3.8 kW |
| Rotational acceleration | 766 W |
| **Total** | **≈ 4.5 kW (about 6 hp)** |

Six horsepower seems a little low for how big the machine is, which suggests I've left things
out of the rotational calculation. I neglected the inertia of the spinning central tower
itself, and friction and efficiency throughout. Folding those in would be the obvious next
step to find the missing factor.

### Reference

- [Video of the ride](https://www.youtube.com/watch?v=0zZRFb5YfZ8)
