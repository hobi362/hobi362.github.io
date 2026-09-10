---
title: "GRAC — Compliant Robotic Leg"
subtitle: "A single-leg robot on a vertical guide rail, built to test how much ankle compliance actually helps absorb a landing"
org: "Massachusetts Institute of Technology"
period: "Fall 2019"
location: "Cambridge, MA"
role: "Team project"
course: "2.74 — Bio-inspired Robotics"
order: 11
sheet: "PRJ-11"
tags: ["Legged locomotion", "Lagrangian dynamics", "Series elastic actuation", "Trajectory optimization", "Hybrid simulation"]
links:
  - label: "Project code — dynamics, hybrid simulation, and optimization"
    url: "https://github.com/hobi362/2-74-bioinspired-robot-leg"
---
A single-leg robot on a vertical guide rail, built to answer a question about ankles: how
much does compliance there actually help absorb a landing, and where is the point past which
it just wastes energy?

### The question: what is the ankle for?

Landing is a harder problem than it looks. If the joints in a leg are too stiff, the
impact goes straight up the structure — the robot equivalent of running on concrete in
bare feet. If they are too compliant, the leg wastes energy absorbing more travel than
it needs and takes too long to settle. Humans manage this by tensing some muscles while
keeping others relaxed, which is a coordination problem biological legs solve without
being told how.

Our hypothesis was that a robot can be used to find stiffness and damping ratios that a
biological leg can't easily hold — and that the ankle specifically does most of the work
absorbing landing impact. So we designed a single leg to isolate that variable and drop it.

### Modeling

The dynamics are derived symbolically rather than by hand: `Derive_everything_GRAC.m`
generates the mass matrix, Coriolis and gravity terms, energy, foot Jacobian, and keypoint
positions, and writes them out as generated MATLAB functions in `AutoDerived/`. Everything
downstream — simulation, optimization, animation — calls those.

Landing is a hybrid system, so the simulation has to handle the discontinuity at touchdown
rather than integrating through it. `hybrid_simulation_GRAC.m` handles the flight phase,
the impact event, and the stance dynamics as separate regimes with a guarded transition
between them.

The series elastic ankle is where the actual experiment lives. `simulate_leg_GRAC_sea1.m`
through `sea4.m` are four variants of the compliant ankle model, which let us sweep the
stiffness and damping parameters and compare landing behavior against a rigid baseline
before committing to hardware.

### Hardware

The leg was designed in SolidWorks around off-the-shelf gearmotors, shoulder screws, and
a torsion spring for the compliant element, and constrained to a vertical guide rail so
drops were repeatable and one-dimensional. A rubber pad on the landing surface stood in
for ground compliance.

Two design revisions are in the repo — `leg_v_3` and `leg2019` — which is a reasonable
record of how much the mechanism changed once we tried to actually build it.

### What I took from it

This was the class that made trajectory optimization feel like a design tool rather than
a homework topic. Writing the derivation as code that generates code, then reusing those
generated functions across simulation and optimization, is a pattern I have used since —
particularly in the PhD work on cable-suspended manipulation, where the dynamics are messy
enough that deriving them by hand is not realistic.

Team project; the code here is the modeling and simulation side, which was my part.
