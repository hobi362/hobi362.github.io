---
pmd_subpage: true
layout: pmd-seekgeek
title: "Seek & Geek 8: The C-Clamp"
subtitle: "Where the mechanical advantage of a square thread comes from, and which part gives out first"
week: 8
week_label: "Week 8"
order: 8
sheet: "2.77-SG-08"
summary: "Derived the square-threaded screw's mechanical advantage, then found the handle yields at 102 N of hand force -- well before the clamp body does."
topics: ["Power screws", "Mechanical advantage", "Yield", "Castigliano's method"]
youtube_id: ""
video_caption: ""
---
I've used C-clamps constantly through this class to hold parts while running tests, and I
wanted to understand where the mechanical advantage of a square-threaded screw actually
comes from.

Three questions:

1. What is the mechanical advantage?
2. Can you break the handle?
3. When will the structure of the clamp yield?

![Notebook page headed "Seek And Geek #8, The C-Clamp" with a shaded sketch of the clamp dimensioned at 1 inch throat, 4.6 inch screw, 0.5 inch screw diameter, a lead of 0.125 inches per revolution, a quarter-inch handle and a 3.4 inch handle radius. Below, the thread is unwrapped into an inclined plane of base 2 pi r and height equal to the lead, with the clamping force, the applied force F, the normal reaction R, the lead angle theta and the friction angle phi equal to arctan of mu marked on it](/assets/images/courses/precision-machine-design/seek-and-geek/week-08/setup-and-questions.jpg)

### The screw as an inclined plane

The standard trick: unwrap one turn of the thread into an inclined plane whose base is the
circumference 2πr and whose rise is the lead.

![Notebook page working the force balance on the unwrapped thread. Summing forces in x and y with the normal force N and friction mu N gives P equals F clamp times the quantity sin alpha plus mu cos alpha, over cos alpha minus mu sin alpha. The torque required to raise equals P times the screw radius, and the handle acts as a lever so F hand times R equals P times r. Substituting tan alpha equals lead over 2 pi r gives the boxed result for the clamping torque in terms of F clamp, r, mu, and the lead](/assets/images/courses/precision-machine-design/seek-and-geek/week-08/screw-mechanics.jpg)

Balancing forces on the thread gives the tangential force P needed at the screw for a given
clamping force, and since the handle is a lever of radius R acting on a screw of radius r,
the two combine into a single expression for clamping force per unit hand force.

### How hard can a person actually clamp?

![Notebook page. The mechanical advantage is boxed as a function of mu, r and the lead. Using a maximum human torque from NASA anthropometric data of 153.9 lb-in, about 17.39 N·m, with a handle radius of 3.4 inches, gives a hand force of 45.26 lb or 201 N. Substituting into the mechanical advantage with a friction coefficient of 0.25 estimated for unlubricated dry steel gives a clamping force of 8.5 kN. Below, the handle is treated as a cantilevered beam, since clamped material will not compress further, with sigma equals Mc over I, and the resulting bending stress of 6.88 by 10 to the 8 Pa is noted as enough to yield even the strongest steel](/assets/images/courses/precision-machine-design/seek-and-geek/week-08/clamping-force-and-handle.jpg)

| | |
|---|---|
| Max human torque (NASA data) | 17.39 N·m (153.9 lb·in) |
| Handle radius | 3.4" |
| Hand force at the handle | 201 N (45 lb) |
| Friction coefficient, dry steel | 0.25 |
| **Resulting clamping force** | **8.5 kN** |

That's the mechanical advantage of the square thread in one number — 201 N at your hand
becomes 8.5 kN at the workpiece.

### Which fails first?

Once the clamped material stops compressing, the handle is effectively a cantilever, so any
further hand force just bends it. At full human torque the bending stress reaches
**6.88 × 10⁸ Pa** — enough to yield even the strongest steel. Which matches the everyday
experience that bent handles are a common failure on smaller clamps.

![Notebook page finding the maximum clamping force without breaking the handle. Taking AISI 1020 steel with a yield stress of 350 MPa and sigma equals Mc over I, the maximum hand force is 102 N, giving a maximum clamping force of 4334.5 N boxed in red. Below, Castigliano's method is set up to find the clamp's deflection, splitting the frame into segments AB and BC with their bending moments and partial derivatives, and integrating](/assets/images/courses/precision-machine-design/seek-and-geek/week-08/max-force-and-deflection.jpg)

So the handle sets the real limit, not the person:

| | |
|---|---|
| Handle yield stress (AISI 1020) | 350 MPa |
| **Max hand force before the handle yields** | **102 N** |
| **Max clamping force** | **4334.5 N** |

### Will the clamp body deform?

Castigliano's method on the C-frame, splitting it into the two bending segments and
integrating.

![Notebook page completing the Castigliano integration, giving a deflection of 0.006 cm or 0.026 inches, boxed. A sanity check follows on the bending stress in the clamp body, giving 467 MPa against a cast iron yield of 550 MPa, with the note "So it will not yield!" Finally the clamp stiffness is computed as 4334 N over 0.006 m, or 7.3 N per micron](/assets/images/courses/precision-machine-design/seek-and-geek/week-08/deflection-and-stiffness.jpg)

| | |
|---|---|
| Deflection at max clamping force | 0.0060 cm (0.026") |
| Bending stress in the frame | 467 MPa |
| Cast iron yield (average) | 550 MPa |
| **Clamp stiffness** | **7.3 N/µm** |

So the frame holds — 467 MPa against a 550 MPa yield — and the clamp deflects about 26
thousandths of an inch at maximum clamping force. Both reasonable.

The answer to "which part gives out first" is the handle, by a wide margin, and it does so
at less than half the force a person could otherwise apply.
