---
pmd_subpage: true
layout: pmd-seekgeek
title: "Seek & Geek 5: The Bicycle V-Brake"
subtitle: "A 4:1 lever hiding in plain sight, and a 3.5 m stopping distance from an energy balance"
week: 5
week_label: "Week 5"
order: 5
sheet: "2.77-SG-05"
summary: "Worked the V-brake's lever ratio from a moment balance, then used an energy balance to predict the stopping distance from 15 mph."
topics: ["Lever mechanisms", "Mechanical advantage", "Friction", "Energy methods"]
youtube_id: ""
video_caption: ""
---
![Three photographs of the V-brake on a bicycle at night, annotated with the brake cable running down to the two lever arms, and a close-up of the spring that returns the brake to its original position](/assets/images/courses/precision-machine-design/seek-and-geek/week-05/brake-hardware.jpg)

I started my first-order analysis with the lever system this brake configuration uses. As
the rider pulls the handle, the cable contracts and pulls the two lever arms together,
engaging the brake pads against the wheel rim. There's a good
[animation of a similar brake system](https://www.youtube.com/watch?v=UnRD6tjVi2s) if you're
curious how it moves.

### The lever

It's genuinely exciting to find a classic lever system hidden in plain sight.

![Hand-drawn analysis of the brake. Top left, a sketch of the handlebars, brake lever, cable, brake pad and tyre. Right, sketches of the two brake arms pivoting to bring the pads onto the rim. Bottom left, the free body diagram of one arm as a beam with the cable force at three quarters of its length and the pad force at one quarter, giving a moment balance F cable times l equals F pad times l over 4, so F pad equals 4 over 2 times F cable. Since there are two pads, the total braking force is 4 times F cable -- a 4 to 1 mechanical advantage](/assets/images/courses/precision-machine-design/seek-and-geek/week-05/lever-analysis.jpg)

Taking moments about the pivot, each arm gives a pad force of twice the cable force — and
with two pads, the total is **4× the cable force**. A 4:1 mechanical advantage means a large
frictional force can be applied to the rim from a modest squeeze.

### How far does it actually take to stop?

I was curious what that translates to in stopping distance, so I estimated it from average
values for grip strength, human and bicycle mass, and brake pad friction.

![Handwritten energy balance for safe braking distance and speed. Starting from 6.7 m/s or 15 mph with a combined human and bicycle mass of 73 kg, initial kinetic energy is about 1600 J. Work done is the friction force times wheel radius times angle, using a cable squeeze force of 325 N from NASA anthropometric data, a pad force of 1300 N, a friction coefficient of 0.35 and a wheel radius of 0.311 m, giving 141.5 N·m per radian. Solving gives 11.3 radians, and multiplying by the wheel radius gives a stopping distance of 3.5 metres. Assumptions noted: no slip, neglecting efficiency, and neglecting losses due to drag forces from wind and wheel friction](/assets/images/courses/precision-machine-design/seek-and-geek/week-05/stopping-distance.jpg)

| | |
|---|---|
| Starting speed | 6.7 m/s (15 mph) |
| Rider + bicycle | 73 kg (62 + 11) |
| Kinetic energy to shed | ~1600 J |
| Squeeze force at the cable | 325 N |
| Pad force after the 4:1 lever | 1300 N |
| **Stopping distance** | **3.5 m** |

3.5 metres isn't bad at all — and it comfortably meets the minimum stopping distance
Massachusetts state law requires of a bicycle.

The analysis assumes no slip, and neglects both drivetrain efficiency and losses to drag
from wind and wheel friction.

### References

- [V-brake animation](https://www.youtube.com/watch?v=UnRD6tjVi2s)
- [NASA MSIS anthropometry — grip strength data](https://msis.jsc.nasa.gov/sections/section04.htm)
- [Fixed gear skid sample — MIT](http://web.mit.edu/cwarner/www/FixedGearSkidSample.pdf)
