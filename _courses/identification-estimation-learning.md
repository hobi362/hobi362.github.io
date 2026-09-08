---
title: "Identification, Estimation, and Learning"
institution: "Massachusetts Institute of Technology"
term: "Spring 2017"
sort_date: "2017-05"
course_code: "2.160"
order: 24
tags: ["System identification", "Recursive least squares", "Kalman filtering", "Adaptive control", "Sensor data"]
---
2.160 is the class that connects models to measurements: how to identify a system's
parameters from data, how to estimate state you cannot directly observe, and how to keep
both honest when the data is noisy or the plant drifts. It covers least-squares and
recursive least-squares identification, state estimation and Kalman filtering, adaptive
control, and the learning methods that sit alongside them.

The problem sets worked on real signals rather than textbook transfer functions —
photoplethysmogram traces, LIDAR returns from pedestrian tracking, and time-series data
where the interesting behavior is buried in the noise. That framing is the part that
stuck: an estimator is only as good as your model of what the sensor is actually doing.

This is the theory underneath the state estimation in my thesis work, where the load on a
crane-suspended peg is only observable through cable tension and motion, and the estimator
has to be trusted enough to close a precision insertion loop around it.

*Coursework here was problem sets rather than a term project, so there is no repository —
posting solutions to a class that still runs isn't something I want to do.*
