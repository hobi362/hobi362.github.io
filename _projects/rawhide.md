---
title: "RAWHIDE — Robotic Assisted Wire Harness Installation"
subtitle: "Twin collaborative robot arms that hold a wire harness inside an electrical cabinet while a human secures it"
org: "M.I.T., with QinetiQ North America, Raytheon, and the Advanced Robotics Manufacturing Institute"
period: "Spring 2018 – Fall 2019"
location: "Cambridge, MA"
role: "Graduate Researcher"
order: 8
sheet: "PRJ-08"
thumb: "/assets/images/projects/rawhide/twin-arms-cabinet.jpg"
tags: [ROS, "Robot Raconteur", Python, "Impedance control", "Admittance control", "Teaching by demonstration"]
links:
  - label: "Code + tutorial (GitHub)"
    url: "https://github.com/rachelmh/rawhide"
  - label: "Robot Raconteur (Wason & Wen, CASE 2016) — the middleware this builds on"
    url: "https://s3.amazonaws.com/robotraconteurpublicfiles/docs/RobotRaconteur_CASE2016.pdf"
---
Wire harness installation gets harder every year, because the products the harnesses go
into keep getting smarter and more dependent on dense internal wiring. Attaching a heavy,
complex harness to a bare electrical cabinet takes two people: one holding the harness in
position, one securing it with zip ties. The space is tight, access is bad, and both
workers hold awkward postures for as long as the job takes — which is a real ergonomic
problem when it repeats all day.

RAWHIDE — Robotic Assisted Wire Harness Installation Demonstration Effort — set out to
give the *holding* half of that job to two robot arms, so one worker can do the securing
alone without fighting the harness.

![Concept sketch: two Sawyer arms reach into a green electrical cabinet holding a wire harness between them, while a stick-figure lead worker reaches in from the left. Annotations read "Lead worker provides fine manipulation" and "Wire harnesses can be up to 20 lbs"](/assets/images/projects/rawhide/concept-twin-arm.png)

![Two Sawyer arms holding a harness inside the cabinet frame while a person works between them](/assets/images/projects/rawhide/twin-arms-cabinet.jpg)

### Hardware

Two Rethink Robotics Sawyer arms, each with a Robotiq 2F-85 gripper and universal
controller, plus two easy-access push-button interfaces running on Arduino Pro Minis. An
Optoforce force/torque sensor and a 3Dconnexion SpaceMouse were trialled as operator-input
devices — more on how those went below.

![Hardware overview: a Rethink Robotics Sawyer robot, Robotiq 2F-85 grippers, the easy-access user push button interface built into a clear enclosure, an Optoforce force/torque sensor, and a 3Dconnexion 6-DOF SpaceMouse](/assets/images/projects/rawhide/hardware-overview.png)

### The software bridge problem

Each Sawyer runs its own onboard computer with its own ROS Master. That makes the very
first problem a plumbing one: there is no single terminal or program that can command both
robots at once.

I used [Robot Raconteur](https://s3.amazonaws.com/robotraconteurpublicfiles/docs/RobotRaconteur_CASE2016.pdf),
an open-source middleware built for exactly this — integrating systems whose components
differ in manufacturer, platform, interface, and API language. It lets you stand up a
*service* that bridges the ROS Master controlling one robot to an external algorithm that
has no ROS dependency at all.

I extended that service for the Sawyers specifically, so outside Python code can command a
robot and everything hanging off it — grippers, force sensors, anything else on ROS. The
service spins up threads that continuously subscribe and publish to the ROS topics you
name, and function calls from the main algorithm are translated into ROS messages behind
the scenes.

![Software architecture: a laptop running the Robot Raconteur server and main algorithm connects over Ethernet to Sawyer 1 and Sawyer 2, each running a ROS Master with a Robot Raconteur-ROS bridge. Sawyer 1 fans out to a Robotiq gripper, an Arduino button user interface, and — marked optional — a 6-DOF SpaceMouse and an Optoforce force sensor. Sawyer 2 drives a Robotiq gripper](/assets/images/projects/rawhide/software-architecture.png)

The payoff is that the main algorithm never has to know ROS is involved.

### Getting the control feel right

The core interaction problem is letting a worker physically guide an arm without fighting
it. Rather than a joystick or a teaching pendant, the worker should be able to express
intent to the robot by simply pushing on it.

**Impedance control** was the first approach. The Sawyer SDK exposes end-effector position
and velocity relative to the base, plus position and velocity for all seven joints. Those
let you tune stiffness and damping so the arm behaves like a mass-spring-damper with a
desired force output on its environment — something a worker can push around directly.

**Admittance control** is the inverse: force in, velocity out. Press harder and the arm
moves faster in the direction you pushed, the way a toy car responds to how hard and where
you press its button.

![Admittance control concept: a force applied at the Sawyer's end effector, labelled F in, produces a proportional end-effector velocity, labelled V out](/assets/images/projects/rawhide/admittance-control.png)

Admittance mattered here because of a constraint specific to twin-arm work: the two arms
are mechanically coupled *through the harness they are both holding*. Moving one hand may
require the other to change its pose to follow, and it's cumbersome for a worker to
reposition both. It gets worse as more wires and connectors are attached and the harness
becomes more constrained. Those constraint forces have to be separated from the force the
worker is deliberately applying — the approach being a force knob at each arm's tip to
distinguish intended input from incidental load.

![Kinematic mapping: a diagram of the wire harness frame held between Sawyer 1 and Sawyer 2 with its own coordinate axes, beside a table mapping each wire-harness velocity and angular velocity component to the corresponding Sawyer 1 and Sawyer 2 end-effector velocities](/assets/images/projects/rawhide/harness-velocity-mapping.png)

### Where the sensors failed, and what replaced them

Initial testing with an Optoforce 3D force sensor on one Sawyer's end effector showed
significant variation in the readings plus sensor drift, which produced occasional erratic
robot motion — unacceptable for a machine working inches from a person.

The 3Dconnexion SpaceMouse was tried next. It doesn't read force at all, so it can't bear
a harness's weight, but its 6-DOF position readings were far more reliable than the
Optoforce, and it did successfully teleoperate one arm by commanding end-effector velocity
proportional to its displacement. Its driver only supports one SpaceMouse at a time,
though, so as an interim step a single SpaceMouse was used to command the *midpoint* of
the harness held between the two arms rather than one arm's end effector. That worked
moderately well for gross manipulation and poorly for fine work — exactly where you need
it most, as the harness nears its installation point inside the cabinet.

Neither sensor was going to fit the end goal without significant additional work. The
solution was already on the robot: the cuff buttons at the end of each Sawyer arm trigger
Zero-G mode, in which the only torques commanded are gravity-compensation torques, so the
arm can be moved freely by hand.

![The end of a Sawyer arm showing the built-in cuff buttons and the custom Arduino push-button interface mounted beside them](/assets/images/projects/rawhide/cuff-and-button-interface.png)

The one caveat is that Zero-G compensates for the mass of the robot alone. If the arm is
holding a harness, it will sink toward the ground, so the worker has to bear some or all
of the wire's weight. In testing that wasn't a problem, and harnesses under 6 kg were
expected to be fine.

Simple, reliable, and it sidestepped the sensor problems entirely.

### Teaching by demonstration

The end goal is that an expert worker teaches RAWHIDE the correct installation procedure
for a series of harnesses once, and the system then uses that procedure to help
less-experienced workers install the same harnesses efficiently and without errors.

The sequence: both arms rotate toward the table holding the next harness. A barcode-reading
system supplied by QinetiQ North America locates the barcodes on the harness and reports
where they are relative to each gripper, so the grippers can move to the barcode and grasp
the wire beside it. The arms then rotate together to face the cabinet. If scanning the
barcode shows an installation procedure already exists, the worker can play it back; if
not, they can teach a new one — recording a sequence of hold positions through the
push-button interface, the Zero-G cuff buttons, and the Sawyer's own display, while doing
the zip-tying themselves.

![Algorithm flowchart for the teaching and playback routine, branching from Scan Wire through "Wire ID Sequence Found?" into either a playback path with adjustment and re-record options or a record-new-sequence path with re-grasp handling, each terminating in quit states](/assets/images/projects/rawhide/teaching-flowchart.png)

![A worker's hands securing the harness with a yellow zip tie while a Sawyer gripper holds it against the cabinet rail](/assets/images/projects/rawhide/worker-zip-tie.jpg)

Re-grasping is the piece that was still open. When the robots have held the harness at one
location and the worker has zip-tied it, the arms must release and re-grasp further along
to continue. In the version I left, the worker helps that along manually — either placing
the end effectors at the re-grasp points or handing the harness back to the robot. The
intended final version uses the same QNA barcode system as the initial grasp: locate the
barcodes, decide which gripper takes which, and drive each end effector to its own grasp
point.

![A worker zip-tying a harness held in place by the twin Sawyer arms inside the cabinet, seen over the arms](/assets/images/projects/rawhide/harness-install-hands.jpg)
