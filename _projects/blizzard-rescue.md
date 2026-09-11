---
title: "Blizzard Rescue"
subtitle: "A mobile robot with a camera-guided arm and a front plow, tasked with finding and clearing a target buried in snow"
org: "MIT"
period: "Fall 2015"
location: "Cambridge, MA"
role: "Team of six"
course: "2.120 — Introduction to Robotics"
order: 4
sheet: "PRJ-04"
thumb: "/assets/images/courses/intro-to-robotics/team-photo.jpg"
tags: ["Machine vision", "OpenCV", "Dynamixel servos", "Trajectory planning", "GPS navigation"]
links:
  - label: "My code (navigation, plow control, vision experiments)"
    url: "https://github.com/hobi362/2-12-intro-to-robotics-2017"
---
Exactly as literal as it sounds: a mobile robot that has to find a target buried in a snowy test environment and
clear a path to it, combining a plow-equipped chassis with a camera-guided arm.

![Team photo with the finished robot](/assets/images/courses/intro-to-robotics/team-photo.jpg)

### System design

The robot splits into two halves: a mobile base with a front-mounted plow for clearing
snow and driving to the target, and a multi-jointed arm mounted on top for fine
manipulation once it's in position.

![CAD system design — mobile base and arm](/assets/images/courses/intro-to-robotics/system-design.jpg)

### Arm design

The arm uses chain-and-sprocket and timing-belt transmissions to keep the heavier
Dynamixel servos (MX-64 for base rotation, MX-106 for the shoulder) low on the base rather
than out on the links themselves — the same reasoning behind keeping mass proximal on any
serial arm, just executed with bike chain and 3D-printed sprockets instead of anything
exotic.

![Teammates crouched on the floor around the built arm, working on its chain drive and linkage between runs](/assets/images/courses/intro-to-robotics/arm-design.jpg)

### Plow design

A curved plow blade mounted on a linear rail so it can be raised and lowered independent
of drive, clearing snow ahead of the robot without needing to lift the whole chassis.

![The robot at the competition, a teammate crouched over it making a final adjustment while judges and the other team look on](/assets/images/courses/intro-to-robotics/plow-design.jpg)

### Finding the target

We used a Kinect for combined color and depth sensing, then split the vision pipeline
across MATLAB, Python, and OpenCV: convert to HSV and threshold on color to build a mask,
find the mask's centroid to get target direction, and multiply the depth image by that same
mask (with a depth-based clutter-rejection step) to get distance to target. Color and depth
results get vectorized and combined into a single target vector that feeds the arm's
trajectory planner.

![Machine vision pipeline architecture](/assets/images/courses/intro-to-robotics/vision-architecture.jpg)

Software-wise, everything hangs off one `main.m` — GPS and camera initialization, an
Arduino read/write interface for low-level hardware, and separate kinematics/trajectory
planning modules for the arm and plow that both build on a shared Dynamixel driver.

### How it went

![The arm reaching into the snow-covered test scene](/assets/images/courses/intro-to-robotics/arm-snow-demo.jpg)

![Top-down view of the mobile base navigating the test course](/assets/images/courses/intro-to-robotics/course-navigation.jpg)

<iframe src="https://www.youtube-nocookie.com/embed/FOS4jKVLOBg" title="Blizzard Rescue full course run" style="aspect-ratio: 16/9; width:100%; border:1px solid var(--line-strong); margin: 8px 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p style="font-family: var(--mono); font-size: 0.8rem; color: var(--ink-faint); margin-top: 4px;">Full run on the competition course.</p>

This was the first project where I was responsible for a real-time perception pipeline
feeding directly into motion planning, rather than perception and control being separate
offline steps — debugging the color threshold live, with a Kinect, under lab lighting that
didn't match our test conditions, taught me more about the gap between "works in a demo
script" and "works live" than anything before it.
