---
title: "DrumBot"
subtitle: "A robot that plays a real drum kit by watching you air-drum in front of a Kinect"
org: "University of Florida"
period: "Spring 2015"
location: "Gainesville, FL"
role: "Sole designer and builder"
course: "EEL4665 / 5666 — Intelligent Machine Design Laboratory"
order: 3
sheet: "PRJ-03"
thumb: "/assets/images/courses/imdl/drumkit-top.jpg"
tags: ["Microcontroller interfacing", "Sensor integration", "Kinect", "BeagleBone", "Solenoids", "Autonomous robots"]
links:
  - label: "My code — Kinect strike detection, BeagleBone solenoid control"
    url: "https://github.com/hobi362/imdl-kinect-air-drums"
---
A robot that plays a real drum kit by watching you play an imaginary one. An Xbox Kinect
tracks your hands, a laptop turns that motion into strike commands, and solenoids on a
handmade kit hit the drums you were miming.

### The problem I picked

Waiting hours in theme park queues drags people out of the world the park creators built —
boredom breaks the illusion. Parks have started fighting this with interactive elements in
the waiting areas; Disney put video games in the Space Mountain queue for exactly this
reason.

**DrumBot** was designed as a scale model of a larger platform for that job: a consumer
engagement device that could sit in roller coaster queues, and also roam the park freely to
promote music and engage guests through their whole visit.

![The DrumBot's drum kit photographed from above: a snare drum, cowbell, splash cymbal and green tom mounted around a blue-taped deck, each with a pair of colour-coded drumsticks — blue, yellow, red and green — driven by solenoids, with breadboards and wiring visible between them](/assets/images/courses/imdl/drumkit-top.jpg)

### How it works

The design brief I set myself was to keep it as simple and efficient as possible.

- **Navigation** — two motorised wheels plus a caster, with IR proximity sensors and bump
  sensors so it can avoid obstacles while moving through crowds
- **Interaction** — an Xbox Kinect tracks the motion of a person's hands as they air-drum
- **Output** — those motions are converted into hits on the corresponding drums, with
  solenoids mounted to the kit providing the force to actually strike them

The chain runs Kinect → laptop for motion processing → BeagleBone Black, which fires the
solenoids in real time. Colour-coding the drumsticks to their drums is what makes the mapping
legible to whoever is playing it.

![The assembled DrumBot on the floor: a blue-skirted mobile base carrying the drum kit on its upper deck, with the snare cantilevered off the left side and the colour-coded sticks poised over each drum](/assets/images/courses/imdl/drumbot.jpg)

### Demo day

DrumBot was demonstrated at the Machine Intelligence Lab's public robot showcase for the
College of Engineering's Electrical and Computer Engineering Department on 22 April 2015,
and was picked up in [*The Gainesville Sun*](https://www.gainesville.com/)'s coverage of the
event.
