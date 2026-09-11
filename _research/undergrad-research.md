---
title: "F1 Track Curvature Extraction for Minimum-Lap-Time Optimization"
subtitle: "Turning a picture of a racetrack into the curvature data an optimal-control solver needs"
org: "UF — Vehicle Dynamics and Optimization Laboratory"
degree: "BSME"
period: "Fall 2013 – Spring 2015"
sort_date: "2015-05"
location: "Gainesville, FL"
role: "Undergraduate Research Assistant (advisor: Anil V. Rao)"
order: 1
sheet: "RES-01"
tags: [MATLAB, "Image processing", "Optimal control", "Spline fitting", "GPOPS-II"]
links:
  - label: "GPOPS-II"
    url: "http://www.gpops2.com/"
---
Vehicular optimal control problems have drawn attention for nearly a century, and are
formulated today for hybrid vehicles and energy recovery systems. Solving them accurately
for Formula One cars runs into a specific obstacle: **there was no general method to obtain
the geometric parameters of an F1 track** in a form the solver could use.

That was the gap my undergraduate thesis filled.

### Why the curvature is the blocker

The research this work supported — Limebeer, Perantoni and Rao's work on optimal control of
F1 energy recovery systems — applies direct orthogonal collocation to racing problems, with
a more realistic aerodynamic model than earlier attempts and a focus on Kinetic Energy
Recovery Systems.

That vehicle and aerodynamic model uses **the curvature of the track as a function of
distance travelled along it** to compute where the car is. Which meant that without a way to
calculate track curvature, minimum lap times simply couldn't be computed for different
circuits. Minimum-lap-time problems have been attacked as two-point boundary value problems,
by direct transcription, and with linear optimal control techniques — but all of them need
the track geometry first.

So the goal: take a user-picked image of any F1 track, calculate the centerline position and
the curvature as a function of distance from the start line, and hand those to the existing
GPOPS-II model. Deliberately user-friendly, and easy to follow.

### From a picture to a centerline

![Five-panel pipeline showing the process from a labelled Circuit de Barcelona-Catalunya track map, through a black and white silhouette, to the extracted centerline in pixel coordinates, then the centerline reduced to discrete data points, and finally the spline fitted through those points](/assets/images/research/undergrad-research/processing-pipeline.png)

The program accepts a black-and-white PNG or JPEG of the track. Source maps can come from
Wikipedia or OpenStreetMap, converted with GIMP.

From there, MATLAB's Image Processing Toolbox does the work:

1. **`imfill`** closes the holes — sets of background pixels that can't be reached by filling
   inward from the image edge
2. **`bwareaopen`** removes connected components under 50 pixels, then the small remaining
   holes are identified and filled by adding those pixel locations back to the image
3. **`skel`** and **`shrink`** morphological operations thin the filled track to a single
   line without letting it become discontinuous, and eliminate the stray "branches" left on
   the boundary

Then the racing direction: the user picks the start/finish line and the direction of travel,
and **`bwboundaries`** traces the centerline from that point, returning x-y coordinates *in
the order a car would drive them*. Local regression smooths out residual kinks.

### Why splines were necessary

JPEG and PNG files are imperfect, so the binary centerline shows irregularities exactly
where the track is supposed to be dead straight. The fix is to convert the centerline into
smooth parametric equations.

The user either picks points along the track by mouse — which are then snapped to the
nearest actual centerline points, since nobody clicks precisely — or lets the program take
every *n*th point automatically, defaulting to every seventh.

Two coordinate corrections are needed at this stage. MATLAB indexes images with an inverted
y-axis, so y values are subtracted from the maximum to make the plotted track appear upright
rather than upside down; and the x values are negated to match the plotting convention in
Limebeer's work.

Distance along the track comes from a cumulative sum of the linear distances between a
finely spaced set of points, with a nearest-neighbour search matching each user-selected
point to its distance from the start line. With distance as the independent variable, spline
equations for x and y follow — and those give a perfectly smooth centerline, free of the
artefacts the source image introduced. A known distance scale on the track image converts
pixels to metres.

![Plot of an extracted track centerline showing the fitted spline in red and blue over the underlying track outline in black](/assets/images/research/undergrad-research/centerline-extraction.png)

### Curvature, via Menger

Curvature is computed with **Menger's formula** — the curvature is the reciprocal of the
radius of the circle passing through three distinct points in *n*-dimensional Euclidean
space. Distance along the track and curvature at 1000 points are saved under the variable
names GPOPS-II expects.

### Does it work?

Five circuits, run through the pipeline and then through the minimum-lap-time solver:

![Table comparing calculated minimum lap times against current lap records for five circuits: Barcelona-Catalunya 1:19.59 against 1:21.67 for 2.61 percent difference, Bahrain 1:30.4 against 1:30.25 for minus 0.17 percent, Monte Carlo 1:05.81 against 1:14.44 for 13.11 percent, Circuit of the Americas 1:35.95 against 1:36.07 for 0.13 percent, and Nürburgring 1:25.30 against 1:29.47 for 4.89 percent](/assets/images/research/undergrad-research/lap-time-results.png)

| Circuit | Calculated | Lap record | Difference |
|---|---|---|---|
| Circuit of the Americas | 1:35.95 | 1:36.07 | **0.13%** |
| Bahrain | 1:30.40 | 1:30.25 | **−0.17%** |
| Barcelona-Catalunya | 1:19.59 | 1:21.67 | 2.61% |
| Nürburgring | 1:25.30 | 1:29.47 | 4.89% |
| Monte Carlo | 1:05.81 | 1:14.44 | 13.11% |

Two circuits land within a fifth of a percent of the real lap record, which is a strong
result for a lap time computed from nothing but a picture of the track.

The spread at the other end is informative too. Monaco is the outlier by a wide margin —
and it is the circuit where the assumptions bite hardest: a tight, low-speed street course
where the ideal conditions the model assumes are least like reality, and where the fine
detail of the image processing matters most to the extracted curvature.

![Circuit de Monaco results: the full track with the optimal path in red over the track in black, a closeup showing the racing line cutting the corners, and the track curvature plotted against distance showing sharp spikes at each hairpin](/assets/images/research/undergrad-research/monaco.png)

![Circuit of the Americas results: full track with optimal path, a closeup through the esses, and the curvature trace](/assets/images/research/undergrad-research/circuit-of-the-americas.png)

![Bahrain International Circuit results: full track with optimal path, a closeup of the hairpin section, and the curvature trace](/assets/images/research/undergrad-research/bahrain.png)

![Nürburgring Circuit results: full track with optimal path, a closeup through the chicane complex, and the curvature trace, noticeably busier than the other circuits](/assets/images/research/undergrad-research/nurburgring.png)

### References

- Limebeer, D. J. N., Perantoni, G., and Rao, A. V., "Optimal Control of Formula One Car Energy Recovery Systems," *International Journal of Control*, Vol. 87, No. 10, Oct. 2014, pp. 2065–2080
- Patterson, M. A., and Rao, A. V., [*GPOPS-II Version 2.0*](http://www.gpops2.com/), 2014 — uses the Radau Pseudospectral Method with collocation at the Legendre-Gauss-Radau points
- Léger, J., "Menger Curvature and Rectifiability," *The Annals of Mathematics*, Vol. 149, No. 3, 1999, p. 831
- Track maps from [Wikipedia](https://en.wikipedia.org/) and [OpenStreetMap](http://openstreetmap.org), processed with [GIMP](http://gimp.org)
