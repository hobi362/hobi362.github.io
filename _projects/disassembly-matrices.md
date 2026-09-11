---
title: "Disassembly Matrices from CAD Meshes"
subtitle: "Deriving the part-interference matrix an assembly planner needs straight from STL geometry, instead of having a human enumerate it"
org: "M.I.T."
period: "Spring 2019"
location: "Cambridge, MA"
role: "Team project — my contribution was the matrix generation"
course: "16.412 / 6.834 — Cognitive Robotics"
order: 10
sheet: "PRJ-10"
tags: ["Assembly planning", "Computational geometry", "Collision detection", "CAD/STL processing", "Ant Colony Optimization"]
links:
  - label: "Project code — disassembly matrix generation from STL meshes"
    url: "https://github.com/hobi362/cogrob-assembly-planning"
---
An assembly planner needs to know which parts block which. Working that out by hand is
tedious and easy to get wrong — so this derives it straight from the CAD geometry instead.

### The problem: nobody wants to fill in the matrix by hand

Most approaches to assembly and disassembly planning pair a graph representation with a
search algorithm. Our team used Ant Colony Optimization to search. But every one of those
methods needs the same input first: a **disassembly matrix** encoding which parts block
which other parts, along which directions.

That matrix is almost always built either manually or through a series of user
interactions. For anything with a realistic part count, that is slow and — more
importantly — error-prone in a way that quietly poisons the search. One wrong entry and
the planner confidently produces a sequence that cannot physically be executed.

My contribution was to generate that matrix directly from geometry the designer has
already produced: the CAD.

### Approach

The pipeline reads STL meshes exported from the SolidWorks assembly, recovers each part's
origin and pose within the assembly, and then tests interference by sweeping each part
along candidate removal directions and checking for collisions against the remaining
parts. What comes out is the disassembly matrix the planner needs, derived from the model
rather than typed in by a person.

Collision detection uses the Gilbert–Johnson–Keerthi algorithm on the mesh convex hulls,
which is fast enough to run the full pairwise, multi-direction sweep that populating the
matrix requires.

The test structure was a simple 80/20 extrusion frame with gusset plates — deliberately
chosen because it has real fastening constraints and a non-obvious removal order, while
still being small enough to verify the generated matrix by hand.

### Paper

The write-up reviews the existing approaches to extracting disassembly information from
CAD — precedence relationships, geometric constraints, and interference-based methods —
and documents the MATLAB implementation and the frame design the assembly planning team
used.

> *Using CAD Meshes to Extract Disassembly Matrix Information for use in the Assembly
> Planning Problem* — R. M. Hoffman, 16.412/6.834 final report.

The repository holds my MATLAB implementation, the CAD and STL geometry, and the report.
Third-party mesh and collision-detection utilities used during development are noted as
dependencies rather than vendored in.
