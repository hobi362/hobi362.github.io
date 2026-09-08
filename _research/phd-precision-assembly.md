---
title: "Precision Assembly of Heavy Objects Suspended from a Crane"
subtitle: "Using cable slack, not rigid positioning, to insert a heavy peg into a tight-clearance hole"
org: "MIT — d'Arbeloff Laboratory"
period: "2019 – 2021"
location: "Cambridge, MA"
role: "PhD Candidate (Advisor: H. Harry Asada)"
order: 3
sheet: "RES-03"
tags: [Python, MATLAB, "Motor control", "Odrive", "Cable-driven systems"]
links:
  - label: "Precision Assembly of Heavy Objects... (RA-L 2020) — Download PDF"
    url: "https://819cf279-319a-43b0-964c-d14c7d146900.filesusr.com/ugd/a7bf6b_6deda6dd124f4c5fb905a04572b2b51c.pdf"
  - label: "Precision Assembly of Heavy Objects... (RA-L 2020) — Webpage / DOI"
    url: "https://doi.org/10.1109/LRA.2020.3013845"
  - label: "Control Strategy for Jam and Wedge-Free Insertion (RA-L 2021) — Webpage / DOI"
    url: "https://doi.org/10.1109/LRA.2021.3093860"
---
Overhead cranes are great at moving heavy things and bad at positioning them precisely —
which is a problem if the heavy thing needs to go into a tight-clearance hole. My PhD
dissertation, *"Precision Assembly of Underconstrained Heavy Shafts Suspended By Multiple
Cables From A Robotic Crane,"* is about getting precision assembly out of a crane's coarse
positioning by being clever about how the load is suspended, rather than trying to make the
crane itself more precise.

### The core idea

A heavy shaft suspended from multiple cables, attached at specific positions and
orientations, can be inserted into a chamfered hole despite a small (120 µm) clearance —
even though the crane holding it isn't accurate enough to place it directly. The trick is a
property of cables that's easy to overlook: they go slack under compressive load. That
means a multi-cable suspension is inherently non-rigid in one direction, which I use to
keep the shaft from being over-constrained during insertion — similar in spirit to the
passive compliance of a Remote Center of Compliance hand, but achieved with cables instead
of a mechanical RCC.

I worked out the conditions on cable attachment position and orientation needed for
insertion to actually succeed by analyzing the system's force balance — determining the
required balance of cable tension to prevent the peg from jamming, and how to correct for
wedging using the cables themselves. That analysis was accepted to RA-L and presented at
IROS 2020.

### Closing the loop

From there I designed and fabricated a scaled three-winch prototype with linear actuators
to manipulate a 15 kg payload — Harmonic Drive brushless motors, Odrive motor controllers,
absolute rotary encoders, and HX711 load-cell amplifiers for real-time tension feedback,
all wired up through Arduino and controlled in Python. The goal was closed-loop control:
monitor tension in each of the three cables and actively guide the peg by lengthening and
shortening them, rather than relying purely on the passive cable-slack behavior from the
earlier analysis. That follow-on control strategy — jam-and-wedge-free insertion using
active cable tensioning — was accepted to RA-L and presented at IROS 2021.
