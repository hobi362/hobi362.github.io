---
title: "F1 Track Curvature Extraction for Minimum-Lap-Time Optimization"
subtitle: "Turning a picture of a racetrack into the curvature data an optimal-control solver needs"
org: "University of Florida — Vehicle Dynamics and Optimization Laboratory"
period: "Fall 2013 – Spring 2015"
location: "Gainesville, FL"
role: "Undergraduate Research Assistant"
order: 1
sheet: "PRJ-01"
tags: [MATLAB, "Image processing", "Optimal control"]
links:
  - label: "GPOPS-II"
    url: "http://www.gpops2.com/"
---
This was my undergrad thesis project, and it's a weird one to explain at parties: I wrote
a MATLAB tool that looks at a picture of a Formula One track and figures out the racing
line's curvature well enough to feed into a minimum-lap-time optimal control solver.

### The actual problem

Minimum-lap-time problems (how fast can a car theoretically drive a given track) need the
track's curvature as a function of distance traveled — that's what lets the optimizer
figure out how hard you can brake, accelerate, and corner at every point. The lab's
existing model (built on work by Limebeer et al., using GPOPS-II) needed that curvature
data, but there wasn't a good way to actually generate it for an arbitrary real track. My
job was to close that gap.

### What I built

Starting from a black-and-white image of a track (I pulled these from Wikipedia/OpenStreetMap
and cleaned them up in GIMP), the pipeline:

- Fills in gaps in the track outline (`imfill`) and strips small artifacts (`bwareaopen`)
- Uses morphological skeletonization (`skel`/`shrink`) to reduce the track down to a single
  centerline
- Traces that centerline in the direction of travel starting from a user-specified
  start/finish line (`bwboundaries`)
- Lets the user either hand-pick points along the track or auto-sample every *n*th point
- Fits smooth parametric spline curves through those points to eliminate the jagged pixel
  noise you get from a raster image
- Computes curvature at each point using the Menger curvature formula (reciprocal of the
  radius of the circle through three nearby points)

The output is track distance and curvature at 1,000 points, formatted exactly the way
GPOPS-II expects it, so it drops straight into the existing lap-time model.

### Results

I validated it against several real F1 circuits (Circuit de Barcelona-Catalunya, Circuit
of the Americas, Bahrain, Nürburgring) and compared computed minimum lap times to actual
lap records — results ranged from 0.13% off to about 13% off, depending on the track,
with the bigger errors mostly coming from the idealized vehicle model rather than my
curvature extraction. It was my first real experience taking a research paper's math and
turning it into a tool that actually works on messy, real-world input (a JPEG downloaded
off Wikipedia is not a clean dataset).
