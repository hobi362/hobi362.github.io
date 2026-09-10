---
title: "Multi-Track Elevator System for E-Commerce Fulfillment Centers"
subtitle: "A grid of rails and self-powered carriages, built to move packages vertically and horizontally without a conventional elevator shaft"
org: "MIT — d'Arbeloff Laboratory"
degree: "SM"
period: "Fall 2015 – Spring 2018"
sort_date: "2018-05"
location: "Cambridge, MA"
role: "Graduate Researcher (advisor: H. Harry Asada)"
order: 2
sheet: "RES-02"
tags: ["SolidWorks", "Path planning", "Kinematic coupling", "Elastic averaging", "Rack and pinion", "Dynamixel"]
links:
  - label: "A Multi-Track Elevator System for E-Commerce Fulfillment Centers (IROS 2017) — Download PDF"
    url: "https://819cf279-319a-43b0-964c-d14c7d146900.filesusr.com/ugd/a7bf6b_d662a813b1464b32b6ba13d90de8b768.pdf"
  - label: "Awards & Certifications — Best Application Paper, IROS 2017"
    url: "/awards/"
---
E-commerce competition is a race between the moment a customer clicks buy and the moment the
package reaches their door. The obvious way to shorten it is to put the distribution
warehouse as close to the city centre as possible — and the obvious problem with that is
land. To stay productive on a small urban footprint, fulfillment centres have to trade floor
area for **vertical** space.

That is what this thesis is about, and the IROS 2017 paper it produced won the conference's
**Best Application Paper Award**.

### What already existed, and why it wasn't enough

Vertical stacking has been automated since the 1950s:

- **AS/RS** (Automatic Storage and Retrieval Systems) — aisle-captive storage cranes handling
  unit loads or mini-loads on shelving
- **AVS/RS** (Autonomous Vehicle Storage and Retrieval Systems) — vehicles moving
  horizontally along rails inside the racks, using lifts at the rack periphery for vertical
  movement
- **SBS/RS** (Shuttle-Based Storage and Retrieval Systems) — two lifts sharing a single mast,
  moving loads between horizontal shuttles and the I/O point

![Three labelled diagrams comparing existing systems: an Automated Storage and Retrieval System with storage racks and an aisle-captive retrieval unit, a Shuttle Based Storage and Retrieval System with front and rear lifts serving shuttles across multiple aisles, and an Automated Vehicle Storage and Retrieval System with robots moving shelving units to a packing area](/assets/images/research/masters-elevator/existing-systems.png)

Each has the same structural weakness. The AVS/RS is flexible in how vehicles and lifts are
allocated, but it forces **sequential vertical and horizontal travel** plus waiting time for
lift access. The SBS/RS is worse in one specific way: because both lifts share a mast, **they
cannot pass each other** — the upper lift can only reach the I/O point when the lower one is
parked at an aisle below it.

### The Multi-Track Elevator

![Left, a multi-story autonomous vehicle storage and retrieval system with conventional lifts. An arrow labelled "Proposed Solution" points right to the Multi-Track Elevator system, annotated with storage racks, shuttle and carriage transfer points, MTE turntables at the rail intersections, MTE rails forming a triangular grid, MTE carriages on the rails, and the I/O point and buffer area at the base](/assets/images/research/masters-elevator/problem-and-solution.png)

A network of rails with **self-powered carriages** that move vertically and have freedom in
the horizontal direction too. The carriages run on a gridded rail system and change direction
at intersections using **vertical turntables**.

The key difference from a roller-coaster-style comparison: carriages **don't have to stop at
switching points**. They move continuously across the network of rails, which is precisely
what removes the dependence on where the other carriages happen to be.

![CAD render of the hexagonal rail network showing the triangular grid of rails with circular turntables at every intersection, mounted on a structural backing](/assets/images/research/masters-elevator/rail-network-cad.png)

![Photograph of the built prototype: an orange-painted panel carrying the triangular rail grid with black circular turntables at each of the twelve intersections](/assets/images/research/masters-elevator/prototype.png)

### Designing the rail

![Slide headed "Design Concept: Rail Transition" listing the critical technical challenges — realizing smooth transitions across multiple tracks, and steering carriages at nodes where multiple tracks intersect — beside a hexa-grid rail structure diagram showing a path from A to B, and a schematic of a carriage approaching a node marked with a question mark from which four directions radiate](/assets/images/research/masters-elevator/rail-transition-challenge.jpg)

![Slide headed "Design Implementation: Rail Design" showing a cross-section of a roller coaster carriage on rails, annotated with running wheels, up-stop wheels, outside side friction wheels and the roller coaster rails, beside an isometric of the cylindrical rails with rack gear teeth along the underside. The text notes that modern roller coasters contain several structural elements similar to the MTE requirements](/assets/images/research/masters-elevator/rail-design.jpg)

Roller coasters turned out to be the right precedent: three sets of radial bearings act as
wheels gripping the rail on three sides, which constrains the carriage completely. To
counteract gravity and prevent jamming, the carriage is driven by **a pair of individually
driven gear motors**.

![Slide comparing two turnout concepts as four-frame sequences. Concept 3 uses a turning point with curved rails, where the turntable rotates curved track segments to guide the carriage round a bend. Concept 4 uses a turning point with a single straight rail, rotating one straight segment to align with the outgoing direction](/assets/images/research/masters-elevator/turntable-concepts.jpg)

### The carriage

![Annotated CAD of the carriage listing a 3 mm aluminium shaft, 0.5 inch pitch diameter ABS gears times six, shaft coupling, 0.125 inch diameter nylon pins times twelve, 298 to 1 micro metal gear motors, and stainless steel ball bearings in three sizes. Beside it, a functional requirement table with seven rows covering payload of 0.5 kg, 40 mm/s drive speed, 1.5 mm vertical and 0.25 mm horizontal misalignment tolerance, rack tooth phase, gear separation under 0.25 mm and ABS yield stress, each with its analysis and current status](/assets/images/research/masters-elevator/carriage-design.png)

| Requirement | Achieved |
|---|---|
| Carry 0.5 kg | motors lift 7 kg |
| Drive at 40 mm/s | 52 mm/s at max efficiency |
| 1.5 mm vertical axial misalignment | handles 1.75 mm |
| 0.25 mm horizontal alignment | 0.254 mm expected (68% confidence) |
| Gear separation under 0.25 mm | 0.04 mm |
| Stress under ABS yield | rack SF 1.5 |

![Photograph of the assembled carriage: a black 3D-printed chassis on four wheels with gear pinions, carrying a battery pack, control board and motors, with a bundle of coloured wires rising from it](/assets/images/research/masters-elevator/carriage-photo.jpg)

![Close-up photograph of the carriage electronics -- an Arduino Micro and motor driver on protoboard, wrapped in a dense bundle of coloured wiring, with IR receiver boards top and bottom](/assets/images/research/masters-elevator/carriage-electronics.jpg)

![Slide headed "Carrying Capacity and Translational Speed of Carriage" listing actuation requirements of 50 mm/s speed, minimum torque above 0.062 N·m and not backdrivable, against the chosen micro metal gear motor with a 298 to 1 transmission ratio, 100 rpm no-load speed and 0.494 N·m stall torque. A speed against torque and power plot marks the desired operating region, and at maximum motor efficiency the motor torque is 0.105 N·m and linear velocity 52 mm/s, both ticked. Required current of 433 mA means a 1500 mAh battery allows three hours of testing](/assets/images/research/masters-elevator/motor-selection.jpg)

### Making the rack and pinion work across joints

Getting the carriage across the connection between the network rails and the turntable rails
needed a pinion system that tolerates slight rail misalignment and imperfections in the rack.

![CAD views showing the pinions engaged with the rack, from the front and in isometric on a rail segment](/assets/images/research/masters-elevator/pinion-rack.png)

The specific failure mode with a rack-and-pinion network is that **rack segments can end up
"out of phase" with each other**.

![Slide headed "Counter Measures to phase difference in rack teeth" giving three approaches: the manufacturing process ensuring tight tolerances with a gap under 0.5 mm, a fraction of tooth spacing; the assembly process using a joining gauge rack; and the carriage design incorporating a differential or belt drive](/assets/images/research/masters-elevator/rack-phase-countermeasures.png)

The countermeasure I used when assembling was a **joining gauge rack** while bolting the
segments down. A future prototype would use nylon racks at much tighter tolerances than the
3D-printed ABS ones here — though in practice I saw no noticeable accuracy problems from the
printed rack.

### The turntable, and the backlash problem

![Annotated diagram of the turntable in the rail grid and an isometric of its mechanism, labelled with the vee-groove and spring-loaded ball, beside a functional requirement table covering rail alignment in 3 s, 360 degree rotation, 1.5 mm vertical and 0.25 mm horizontal rail alignment, deflection due to gear separation under 0.01 mm, deflection due to payload under 0.05 mm, and stress below ABS yield -- each with its analysis and status](/assets/images/research/masters-elevator/turntable-requirements.png)

![Exploded assembly drawing of the turntable, labelled with the smart motor, shaft bearing, wall mount, thrust bearing, rack teeth, shoulder bolt, deep-groove ball bearing, mounting plate, base plate, the spring plunger indexing mechanism circled in red, and the 1 to 1 gear ratio](/assets/images/research/masters-elevator/turntable-assembly.png)

The turntable is driven directly by a Dynamixel smart motor at a 1:1 gear ratio. Which
creates the central precision problem of the whole system.

![Photograph of the Dynamixel MX-106T motor beside a diagram of the turntable in the rail grid, showing a 1.4 degree angular error producing 2.54 mm of rail misalignment at the rim](/assets/images/research/masters-elevator/dynamixel-backlash.png)

The Dynamixel resolves to 0.088°, but its **inherent backlash allows up to 1.4° of angular
error — and 2.54 mm of rail misalignment** at the rim. The requirement is 0.25 mm. That is an
order of magnitude out.

### Why a kinematic coupling would have over-constrained it

The obvious fix is a kinematic coupling to index the turntable at each rail-mating position.
Because the turntable rotates a full 360° on a hexagonal grid, there are only a finite number
of positions that need to be accurate.

![Four-frame sequence showing a red disc lifting off a grey base, rotating about the vertical axis, and settling back down into a new indexed orientation](/assets/images/research/masters-elevator/coupling-sequence.png)

But the turntable already uses **a central shaft** to hold it on its rotational axis. Adding
rigid coupling features on top of that over-constrains the system.

![Degree-of-freedom analysis using DOF equals 6 times n minus 1, minus C. Four cases are drawn: rigid balls on a plate with a central shaft giving minus 5 DOF and minus 2 DOF, both annotated as over-constrained with the addition of the central shaft; and the same arrangements with the balls spring-loaded, giving 1 DOF](/assets/images/research/masters-elevator/overconstraint-analysis.png)

**Spring-loading the balls resolves it.** With the balls sprung, the system keeps exactly one
degree of freedom — and the count stays at one however many balls you add.

![Diagram proving the result: a revolute joint, a sliding slot and a sliding contact are modelled, and the DOF equation is evaluated for one, two and three spring-loaded balls, each giving 1. A red box concludes that adding additional spring-loaded balls will not over-constrain the system](/assets/images/research/masters-elevator/spring-loaded-dof.png)

That is the elegant part of the design: it means indexing accuracy can be improved simply by
adding more spring-loaded balls and vee-grooves, without ever fighting the central shaft.

### How accurate does that make it?

![Slide headed "Expected Accuracy of Indexing Mechanism" deriving the position error of a ball and of the turntable. Force balances around the three ball positions give the spring force in terms of the ball displacement and the vee-groove half-angle, and summing moments about the centre yields a boxed expression for the turntable angular error as a weighted combination of the three ball displacements over the sum of the squared radii](/assets/images/research/masters-elevator/indexing-accuracy.jpg)

![Slide headed "Sliding angle of Ball and Vee groove" deriving the normal force on the ball with and without friction, combining the two expressions and rearranging to solve for the vee-groove angle alpha. A boxed result gives alpha equal to 123 degrees with the chosen springs and a 3 N·m motor torque](/assets/images/research/masters-elevator/sliding-angle.jpg)

![Diagram of three spring-loaded balls seating into their vee-grooves, with placement accuracy of 0.3 mm in the y-z plane and 0.4 mm manufacturing accuracy from the 3D printer. Boxed results give 0.7 mm worst case rotational alignment and 0.252 mm expected error at a 68 percent confidence interval from exhaustive simulation, with elastic averaging error under 0.7 mm](/assets/images/research/masters-elevator/elastic-averaging-error.png)

| | |
|---|---|
| Dynamixel backlash alone | 2.54 mm |
| **With spring-loaded ball indexing, worst case** | **0.7 mm** |
| Expected error (68% confidence, exhaustive simulation) | 0.252 mm |

The indexing mechanism cuts the misalignment by a factor of about 3.6 in the worst case and
by an order of magnitude in the expected case — meeting the system tolerance.

![Diagram and derivation of the spring stiffness requirement, showing the turntable driving motor, turntable gear and the spring force acting through the vee-groove. Two conditions are boxed: the stiffness must be high enough that the turntable will not rotate under the weight of a carriage, and low enough that the motor can still rotate the turntable](/assets/images/research/masters-elevator/spring-stiffness.png)

The spring stiffness is bounded on both sides: **stiff enough that a carriage's weight won't
rotate the turntable, soft enough that the motor still can.**

### Scheduling the carriages

The simplest scheme that both avoids collisions and gives the shortest allowable paths turned
out to be a **modified Depth-First Search** using decoupled path-planning methods.

A standard DFS goes as deep as possible from vertex to vertex before backtracking. The
modified version explores all independent simple paths that multiple carriages could take to
reach their targets, then picks a final set based on collision avoidance in priority order.
It builds an initial priority queue, compares each carriage's shortest possible paths, and
eliminates conflicts by priority. **If the local minimum for a given priority queue matches
the global minimum path length, it returns immediately** — along with the turntables and IR
LEDs each carriage is projected to encounter.

![The prototype rail network with three carriage paths overlaid in orange, blue and yellow from a green start marker to a red target marker, showing the alternative routes the search considers](/assets/images/research/masters-elevator/path-planning.png)

Position sensing is done with **IR LEDs of unique signature** spaced through the rail network,
and an IR reader on each carriage.

![Flow diagram of system operation: a central program generates paths and commands, which go to both the carriages and the turntables. The carriages then move and retrieve IR LED commands as they pass them, and the central program uses those to set turntable position and carriage speed and direction](/assets/images/research/masters-elevator/system-operation.png)

When a carriage passes an IR LED near a turntable, that turntable is triggered to rotate,
accept the carriage, and redirect it onto its path.

### Does it actually beat the alternatives?

Three systems compared on the time for two or three carriages to retrieve packages and return
them to the I/O point: a standard elevator with two inline carriages, a circular motion
elevator, and the MTE.

![Slide comparing the three systems. Left, schematics of a double standard elevator, a circular motion elevator and a section of the Multi-Track Elevator, each with three cargo retrieval assignments marked. Right, elevator level plotted against time for all three, showing the MTE completing the same assignments in noticeably less time. Boxed annotations give 153 percent and 123.5 percent increased time efficiency. The takeaway reads that the MTE architecture removes the dependence on the relative positions of the carriages](/assets/images/research/masters-elevator/efficiency-comparison.png)

| Compared against | Time efficiency gain |
|---|---|
| Double standard elevator | **153%** |
| Circular motion elevator | **123.5%** |

Both well over 100%. And the reason is structural rather than incidental: **the MTE
architecture removes the dependence on where the other carriages are.** Carriages never queue
for a shared lift and never block each other on a shared mast, because the network gives them
independent routes.
