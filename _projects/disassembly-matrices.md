---
title: "Disassembly Matrices from CAD Meshes"
subtitle: "Deriving the part-interference matrix an assembly planner needs straight from STL geometry, instead of having a human enumerate it"
org: "MIT"
period: "Spring 2019"
location: "Cambridge, MA"
role: "Team of four; I built the CAD-to-matrix pipeline and the physical test structure"
course: "16.412 / 6.834 — Cognitive Robotics"
order: 10
sheet: "PRJ-10"
thumb: "/assets/images/projects/disassembly-matrices/matlab-mesh-frame.png"
links:
  - label: "Project code — disassembly matrix generation from STL meshes"
    url: "https://github.com/hobi362/cogrob-assembly-planning"
---
An assembly planner needs to know which parts block which. Working that out by hand is
tedious and easy to get wrong, so this derives it straight from the CAD geometry instead.

### The problem: nobody wants to fill in the matrix by hand

Most approaches to assembly and disassembly planning pair a graph representation with a
search algorithm. Our team used Ant Colony Optimization to search. But every one of those
methods needs the same input first: a **disassembly matrix** encoding which parts block
which other parts, and along which directions.

That matrix is almost always built either manually or through a series of user
interactions. For anything with a realistic part count that is slow, and worse, it is
error-prone in a way that quietly poisons the search. One wrong entry and the planner
confidently produces a sequence nobody can physically execute. Building those matrices by
hand was the single biggest time sink in our earlier work, which is what sent me looking
for a way to read them out of the CAD.

### The structure I built to test it

I designed and built a frame from 80/20 aluminium extrusion, T-nuts, 1/4-20 bolts and
corner gussets. It is small enough that I could check the generated matrix by hand, and
awkward enough to be interesting: 80/20 has a real assembly-order constraint built into it.
Once a corner gusset is bolted on, it closes off the channel the T-nuts slide into, so any
T-nut you forgot is a T-nut you cannot add without taking the corner apart again. That is
exactly the kind of precedence a planner has to respect.

![The 80/20 aluminium frame I built, laid out on a bench over paper marked with a taped grid and hand-drawn coordinate axes, with corner gussets bolted at each corner](/assets/images/projects/disassembly-matrices/built-frame.jpg)

### From meshes to a matrix

The pipeline starts from STL meshes exported out of the SolidWorks assembly. Each mesh is
read into MATLAB with the open-source `stlread` and turned into a filled polygon, positioned
at its origin in the assembly.

To find interference, each part is perturbed about 5 cm along X and Y and then checked for
collision against every remaining part. The frame is planar, so Z adds nothing here and is
skipped. Collision checking uses the Gilbert-Johnson-Keerthi (GJK) distance algorithm, which
is fast enough to run the full pairwise, multi-direction sweep the matrix needs.

Fasteners are the part geometry alone won't tell you about, so I added a **fastening mate**:
a function that fixes two parts to each other and writes the fastener itself into the
disassembly matrix. That covers the T-nut-and-bolt relationships that make the 80/20 frame
behave the way it does.

![MATLAB visualisation of the part meshes: the frame drawn in red from two viewpoints, showing the extrusions and the corner gussets as separate bodies in the assembly coordinate frame](/assets/images/projects/disassembly-matrices/matlab-mesh-frame.png)

What comes out is the disassembly matrix the planner needs, derived from the model rather
than typed in by a person.

### What the team did with it

The matrix fed the planning side of the project. Our baseline was Ant Colony Optimization;
from there the team extended it in two directions. **TACO** (Team Ant Colony Optimization)
splits the ants into teams that share one matrix and one visited list, so a plan can be
split across several robots, with a shared start state and a no-op action so an agent can
wait. **MOTACOS** adds multi-objective search on top, balancing competing costs instead of
optimising one number.

The whole thing ran over ROS: a supervisor node publishes the problem, the planner node
computes the sequences, and each robot subscribes to its own command topic.

![ROS graph of the running system: a test supervisor node publishing to a disassembly topic, a motacos planner node, and two robot command topics feeding robot0 and robot1](/assets/images/projects/disassembly-matrices/ros-graph.png)

{% include youtube.html id="mjBmUmCxD9U" title="6.834 MIT Cognitive Robotics 2019, Assembly Planning Grand Challenge" %}

*Our class demonstration: the planner sequencing a disassembly and handing the steps to the
robots.*

### Paper

The team's final report covers all of it. My section documents the CAD-to-matrix work: the
existing approaches to extracting disassembly information from CAD (precedence
relationships, geometric constraints, and interference-based methods), the MATLAB
implementation, and the frame design the planning side tested against.

> *Using Ant Colony Optimization To Solve The Assembly Planning Problem* — four-author
> 16.412/6.834 final report. My section: "Using CAD Meshes to Extract Disassembly Matrix
> Information for use in the Assembly Planning Problem."

The repository holds my MATLAB implementation, the CAD and STL geometry, and the report.
Third-party mesh and collision-detection utilities used during development are noted as
dependencies rather than vendored in.
