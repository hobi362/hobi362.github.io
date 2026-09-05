---
title: "Precision Assembly of Heavy Objects Suspended from a Crane"
subtitle: "Using cable slack, not rigid positioning, to insert a heavy peg into a tight-clearance hole"
org: "MIT — d'Arbeloff Laboratory"
period: "Spring 2019 – present"
location: "Cambridge, MA"
role: "PhD Candidate (Committee: H. Harry Asada, Alberto Rodriguez, David Trumper)"
order: 4
sheet: "PRJ-04"
tags: [Python, "Motor control", "Odrive", "Cable-driven systems"]
links:
  - label: "IROS 2020 / RA-L Paper"
    url: "https://819cf279-319a-43b0-964c-d14c7d146900.filesusr.com/ugd/a7bf6b_6deda6dd124f4c5fb905a04572b2b51c.pdf"
---
Overhead cranes are great at moving heavy things and bad at positioning them precisely —
which is a problem if the heavy thing needs to go into a tight-clearance hole. My PhD work
is about getting precision assembly out of a crane's coarse positioning by being clever
about how the load is suspended, rather than trying to make the crane itself more precise.

### The core idea

A heavy shaft suspended from multiple cables, attached at specific positions and
orientations, can be inserted into a chamfered hole despite a small clearance — even though
the crane holding it isn't accurate enough to place it directly. The trick is a property of
cables that's easy to overlook: they go slack under compressive load. That means a
multi-cable suspension is inherently non-rigid in one direction, which I use to keep the
shaft from being over-constrained during insertion — similar in spirit to the passive
compliance of a Remote Center of Compliance hand, but achieved with cables instead of a
mechanical RCC.

I worked out the conditions on cable attachment position and orientation needed for
insertion to actually succeed, built a proof-of-concept prototype, and verified the
analysis experimentally. That work was accepted to RA-L and presented at IROS 2020.

### Where it's headed

I'm now building a scaled three-winch prototype with linear actuators to manipulate a
10 kg payload, using Harmonic Drive brushless DC motors and Odrive motor controllers. The
goal is closed-loop control: monitor tension in each of the three cables and actively guide
the peg by lengthening and shortening them, rather than relying purely on the passive
cable-slack behavior from the earlier analysis. That means writing both the control
software and the low-level motor interfacing myself.
