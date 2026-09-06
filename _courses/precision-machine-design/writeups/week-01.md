---
pmd_subpage: true
layout: pmd-writeup
title: "Week 1: Kinematic Coupling Proposal"
subtitle: "Choosing a design problem: precise indexing for a rotating turntable"
week: 1
week_label: "Week 1"
order: 1
sheet: "2.70-WU-01"
summary: "Proposed a Maxwell kinematic coupling to solve a real alignment problem from my own research."
topics: ["Kinematic couplings", "Exact constraint design"]
youtube_id: ""
video_caption: ""
---
The first week's assignment was to identify a real precision-positioning problem and
propose a kinematic coupling to solve it — and I didn't have to look far, because I had
one sitting in my own research. My Master's project (the Multi-Track Elevator) uses
rotating turntables to switch a carriage between rail directions, and those turntables
need to land in up to nine distinct orientations with tight repeatability every time.

A kinematic coupling exactly constrains all six degrees of freedom of a rigid body using
six points of contact — commonly three V-blocks mating with three spheres (a Maxwell
system). That determinism is exactly what a repeatable turntable needs. The catch is that
a kinematic coupling is designed to *stay put* once seated, and my turntable needs to
rotate on command. My proposal for the semester was to design a Maxwell coupling sized for
my turntable's nine required orientations, and — time allowing — experiment with a
pop-and-lock mechanism that lets the coupling disengage, rotate, and re-seat.

![Sketch of the kinematic coupling baseplate and V-block layout](/assets/images/courses/precision-machine-design/week02-kc-hardware.jpg)
