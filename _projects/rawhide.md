---
title: "RAWHIDE — Robotic Assisted Wire Harness Installation"
subtitle: "Twin collaborative robot arms that help a human install wire harnesses inside electrical cabinets"
org: "MIT, with QinetiQ North America, Raytheon, and the Advanced Robotics Manufacturing Institute"
period: "Spring 2018 – Fall 2019"
location: "Cambridge, MA"
role: "Graduate Researcher"
order: 3
sheet: "PRJ-03"
tags: [ROS, "Robot Raconteur", "Impedance control", "Admittance control", "Teaching by demonstration"]
links:
  - label: "Code + tutorial (GitHub)"
    url: "https://github.com/rachelmh/rawhide"
---
Installing a wire harness inside an electrical cabinet normally takes two people — one
holding the harness, one securing it with zip ties, both in an awkward, cramped posture
that gets old fast if you're doing it all day. RAWHIDE's goal was to get two robot arms to
do the "holding" half of that job, working directly alongside the human doing the securing.

### Hardware and the software bridge problem

The setup was two Rethink Robotics Sawyer arms, each with a Robotiq 2F-85 gripper, plus a
couple of push-button interfaces on Arduino Pro Minis. Each Sawyer runs its own ROS Master,
which meant the first real problem was just getting one program to talk to both robots at
once. I used Robot Raconteur to bridge each robot's ROS Master to an external Python
controller, so the main algorithm didn't need to know or care that ROS was involved at all.

### Getting the control feel right

The core interaction challenge was letting a worker physically guide the robot without
fighting it. I worked through a few approaches:

- **Impedance control** — tuning stiffness/damping so the arm behaves like a mass-spring-damper
  the worker can push around directly, similar to how you'd nudge a torque-controlled joint.
- **Admittance control** — because the two arms are mechanically coupled through the harness
  itself, moving one arm changes the constraints on the other. I looked at using a force knob
  at each end effector to separate the worker's intended input from the incidental constraint
  forces from the harness.
- I tried an Optoforce 3D force sensor and a 3Dconnexion SpaceMouse for reading operator
  intent — the Optoforce drifted too much for reliable control, and the SpaceMouse doesn't
  actually sense force so it couldn't bear the harness's weight, though its position readings
  were solid enough to teleoperate one arm.

I ended up using the Sawyer's built-in Zero-G cuff button instead — press it, and the arm
runs pure gravity compensation, so a worker can freely reposition it by hand. Simple,
reliable, and it sidestepped the sensor issues entirely.

### Teaching by demonstration

The bigger-picture goal was for an expert worker to teach the twin-arm system a wire
harness's installation sequence once, so less-experienced workers could then use that
taught sequence. The flow: barcode scanning locates each harness and tells the grippers
where to grab it, the arms rotate together toward the cabinet, and the worker records a
sequence of hold positions using the push-button interface, Zero-G cuff, and the robot's
display, while doing the actual zip-tying themselves.
