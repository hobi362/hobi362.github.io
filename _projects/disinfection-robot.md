---
title: "UV Disinfection Robot"
subtitle: "A mobile germicidal-UV tower for the Micron design challenge — light enough for one person to push, heavy enough not to tip when they do"
org: "MIT — d'Arbeloff Laboratory"
period: "Summer 2020"
location: "Cambridge, MA"
role: "Mechanical design and fabrication"
order: 14
sheet: "PRJ-14"
thumb: "/assets/images/projects/disinfection-robot/mock-uv-lights-lit.jpg"
tags: ["SolidWorks", "80/20 framing", "Mecanum drive", "Arduino", "Fabrication", "RealSense"]
---
In June 2020, Micron Technology announced a design challenge for reliable, low-cost
ultraviolet robotic disinfection — automating the job of sterilizing a room to help slow
the spread of COVID-19 and other diseases. The brief was to build something that cost
under $10,000 to manufacture and was safe to operate in cluttered spaces with a lot of
human traffic.

My labmate Jerry Ng and I entered with a second goal of our own. Our advisor, Harry Asada,
teaches MIT's Introduction to Robotics course every year, and we wanted a platform his
students could actually use — hardware and software expandable enough that a team could
bolt on their own functionality and reach the robot remotely through a server. I owned the
mechanical design and fabrication; Jerry owned the software architecture, including the
mobile platform kinematics and teleoperation.

### The requirements that shaped it

The challenge set hard numbers, and most of the mechanical design falls directly out of
them:

| Requirement | Target |
|---|---|
| Physical envelope | ≤ 0.6 × 0.6 × 2 m — must fit a standard doorway |
| UV lamp coverage distance | 0.3 m min / 2 m max |
| Push force | < 8 kg, so a relatively weak person can move it |
| Weight | < 150 kg, so it moves on standard equipment |
| Time to kill dose at 2 m | < 300 s |

![Dimensioned side view of the robot: a 60 by 60 cm footprint, 192 cm overall height, with the mobile platform accounting for the lowest 36.1 cm](/assets/images/projects/disinfection-robot/dimensions.png)

The form is a roughly five-foot 80/20 tower sitting on a mobile platform, 192 cm tall
assembled and 60 cm square — inside the envelope on all three axes. At least four UV lamps
mount to the tower's panel siding. Each panel is hinged, so every electronic component
behind it is one swing away rather than a disassembly job, and the interior is shelved to
hold the batteries and controllers and to leave room for whatever a student team wants to
add later. RealSense depth cameras sit on top for teleoperation and SLAM.

![Annotated CAD of the robot from two angles, calling out three depth cameras, four UV lights, hinged side panels for access, interior shelving for battery and electronics storage, and an optional robot arm; at right, the mecanum wheel base in detail](/assets/images/projects/disinfection-robot/cad-overview.png)

The base runs direct-drive mecanum wheels. For a machine that has to work its way around
furniture in an occupied room, the ability to translate sideways without first turning is
worth more than the efficiency a conventional differential drive would buy.

### The mass problem

The two most interesting requirements pull against each other. The robot has to be light
enough that one person can push it, and it also has to not fall over when they do — and
"not falling over" is what sets a *lower* bound on its mass.

Taking a 5'6" person pushing at a comfortable 1.2 m height with 80 N against a wheel track
that puts the tipping edge 0.19 m off centerline, the moment balance says the robot has to
weigh at least 51.5 kg to stay down.

![Tipping analysis under push force: with the wheels locked, M·g·0.19 m must exceed 80 N times a 1.2 m push height, giving M at least 51.5 kg or 114 lb; a note records that a 58 by 58 cm aluminum base plate is 120 lb and each battery is 4 lb](/assets/images/projects/disinfection-robot/tipping-push-force.png)

That bounds the design between 51.5 kg and the challenge's 150 kg ceiling. The second
stability case — the robot parked on a 10° incline — constrains not mass but *where* the
mass sits: the center of gravity has to stay below 1.07 m to remain stable, and I held it
under 0.5 m to leave margin for the loads from sudden starts and stops.

![Incline stability analysis: tan of 10 degrees equals 0.19 m over H, giving H less than 1.07 m for stability, with a 0.5 m design limit boxed in red to include a factor of safety for sudden accelerations and decelerations](/assets/images/projects/disinfection-robot/stability-incline.png)

A center of gravity under half a meter on a machine almost two meters tall is the
constraint that explains the rest of the layout. Everything dense goes at the floor: a
thick aluminum base plate carrying most of the required mass, batteries and motor
controllers on the lowest shelf, and nothing heavier than a camera near the top.

### Safety interlock

Germicidal UV damages people at close range, so the lamps had to shut off whenever anyone
was near. We used infrared motion detectors driven by an Arduino Mega alongside the depth
cameras: the robot moves to a position, confirms the room is still, and only then begins a
disinfection cycle — killing the lamps the moment it sees motion and resuming once the
room clears.

![Safety concept: RealSense depth cameras covering about 120 degrees plus a Parallax infrared motion detector, over a four-panel storyboard — the robot enters a room and detects no motion so it stops and disinfects, moves to a new position and disinfects again, immediately stops the UV when it detects motion, then continues once the room is still](/assets/images/projects/disinfection-robot/safety-sequence.png)

### Building it

I manufactured a prototype over the summer. Germicidal UV lamps were in short supply in
2020, so the four lamps on the prototype are mock-ups — acrylic tubing with addressable
LED strips inside, matched to the real lamps' size and mounting so the structure, wiring,
and interlock could all be built and tested against something physical.

![A Parallax passive-infrared motion sensor taped to a panel next to an acrylic tube with an LED strip run through it — the mock UV lamp assembly before installation](/assets/images/projects/disinfection-robot/mock-uv-lamp-pir.jpg)

![The assembled tower on its mecanum-wheel base, three mock UV tubes lit blue along the panel siding, standing in the lab](/assets/images/projects/disinfection-robot/mock-uv-lights-lit.jpg)

![The finished prototype from two angles, annotated: UV light and motion detector electronics, depth cameras and PIR motion detector, four mock UV lights, onboard computer, shelves for battery and electronics storage, batteries and motor controllers at the bottom, and the mecanum-wheel mobile platform](/assets/images/projects/disinfection-robot/prototype-annotated.png)

Teleoperation runs through a browser on the same network — a camera feed from the robot's
depth cameras with a joystick driving the base.

![The teleoperation station: a laptop showing the robot's live camera feed in a browser served from the robot itself, with a Logitech joystick alongside it on the bench](/assets/images/projects/disinfection-robot/teleop-station.jpg)

### Going past the brief

The mobile platform gives one degree of freedom in the plane, which is enough to sweep a
room but not enough to get UV into the places that actually matter — under a desk, behind
a monitor, the door handle everyone touches. We worked up a multi-degree-of-freedom arm to
carry a folding handheld lamp there, and sketched it at 3 and 4 DOF against off-the-shelf
end effectors, with opening doors as the stretch goal.

![Concept study for the arm: the robot platform providing one degree of freedom with a handheld folding UV light on a jointed arm, alongside 3-DOF and 4-DOF arm layouts and three candidate end effectors — the Robotiq 3-finger and 2-finger grippers and the Qb Robotics SoftHand](/assets/images/projects/disinfection-robot/arm-concepts.png)

This stayed a design study — the prototype built that summer is the tower, the base, and
the interlock.
