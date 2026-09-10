---
title: "Multi-Track Elevator System for E-Commerce Fulfillment Centers"
subtitle: "A grid of rails and self-powered carriages, built to move packages vertically and horizontally without a conventional elevator shaft"
org: "MIT — d'Arbeloff Laboratory"
degree: "SM"
period: "Fall 2015 – Spring 2018"
sort_date: "2018-05"
location: "Cambridge, MA"
role: "Graduate Researcher"
order: 2
sheet: "RES-02"
tags: [SolidWorks, "Mechanism design", "Path planning", "3D printing"]
links:
  - label: "IROS 2017 Paper (Best Application Paper Award)"
    url: "https://819cf279-319a-43b0-964c-d14c7d146900.filesusr.com/ugd/a7bf6b_d662a813b1464b32b6ba13d90de8b768.pdf"
---
This was my Master's thesis, and it ended up winning Best Application Paper at IROS 2017,
which was a nice surprise for a project that started from a pretty unglamorous problem:
e-commerce warehouses need to get taller, not wider, and existing vertical-transport
systems weren't built for that.

### The problem with existing systems

Standard automated storage/retrieval systems use aisle-captive cranes; a step up from that
(AVS/RS) adds shuttles on rails with lifts at the edges, but you end up waiting for a lift
to be free, and the shuttle can only move in isolated straight paths. Even shuttle-based
systems that share a mast between two lifts have inherent bottlenecks — the two lifts can't
pass each other, so the upper one is blocked whenever the lower one is in the way.

### What I designed

I built the Multi-Track Elevator (MTE): a gridded network of rails with small self-powered
carriages that can change direction at any intersection using a rotating turntable, similar
in spirit to a railway turnout. Instead of a small number of shared lifts, every carriage
can move independently in any direction the grid allows.

Each carriage rides on three sets of radial bearings that grip the rail on three sides
(modeled loosely on a roller coaster car) and is driven by a pair of independently
controlled gearmotors along a 3D-printed rack-and-pinion system. Carriages track their
position using IR LEDs with unique signatures spaced along the rails, read by an onboard
IR sensor.

### The precision problem I didn't expect

The trickiest part of the whole project ended up being a few millimeters of backlash. The
turntables are driven by Dynamixel smart motors, which have great angular resolution
(0.088°) but enough mechanical backlash to throw off rail alignment by up to 2.54mm —
plenty to jam a carriage transitioning onto the turntable. Adding rigid kinematic-coupling
features to fix this would have over-constrained the system, so instead I used a
spring-loaded ball-and-v-groove indexing mechanism: since the balls are spring-loaded
rather than rigid, you can add as many as you want without over-constraining anything. That
brought the worst-case misalignment down to 0.7mm, inside spec, while keeping the springs
soft enough that the motor could still rotate the turntable under its own power.

### Scheduling multiple carriages

Getting the mechanism right was only half the problem — with several carriages sharing one
rail network, you also need to route them without collisions. I implemented a modified
depth-first search that explores independent candidate paths for each carriage and resolves
conflicts by priority, converging on a path set once a candidate matches the known
global-minimum path length.

### Results

I built a working scale prototype — thirteen turntable mechanisms and twenty-seven rail
segments — and benchmarked it in simulation against a standard dual-carriage elevator and a
circular paternoster-style elevator for a package-retrieval task. The MTE came out with
over 100% higher throughput than either alternative in that scenario.
