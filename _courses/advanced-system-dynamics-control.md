---
title: "Advanced System Dynamics & Control"
institution: "MIT"
term: "Fall 2016"
sort_date: "2016-12"
course_code: "2.151"
order: 21
tags: ["State-space methods", "Kalman filtering", "Controllability & observability", "Eigenvalue placement"]
links:
  - label: "My homework code"
    url: "https://github.com/hobi362/2_151_AdvancedSystemsDynamicsAndControls_2016"
key_project: "No single final project — a semester of state-space analysis, controllability/observability, eigenvalue placement, and state estimation (naive observers through Kalman filtering), building up to the final exam."
---
2.151 is MIT's graduate-level follow-on to introductory controls — where an undergrad
controls class mostly stays in the frequency domain (root locus, Bode plots, PID), 2.151
moves into state-space methods: representing a system as a set of first-order differential
equations, then asking precise, provable questions about it — can you drive every state
to zero (controllability)? can you reconstruct the full state from limited sensor output
(observability)? where do you need to place the closed-loop eigenvalues to hit a given
transient response?

The semester built up in layers. Early problem sets were about representation and
diagnosis: converting a system between transfer-function and state-space form, finding
modal decompositions from eigenvalues and eigenvectors, linearizing nonlinear equations of
motion (I did this for a simple pendulum) around an equilibrium point. Later problem sets
moved into design: placing closed-loop poles through frequency-domain loop shaping, checking
controllability and observability of networked/graph-structured systems under different
sensor and actuator placements, and building state estimators — first a naive observer,
then a proper Kalman filter — to reconstruct states you can't measure directly from noisy
output.

The class also used a shared MATLAB toolbox that the course community maintained on GitHub
for common conversions (state-space ↔ transfer function, controllability/observability
matrices, and so on). I used it constantly, but it isn't mine, so it's not part of the code
I'm sharing here — see the linked repo's README for exactly what is and isn't included.

By the final exam, the throughline was clear: almost everything in the class — pole
placement, observer design, Kalman filtering — comes down to the same handful of matrix
questions about a system's `A`, `B`, and `C` matrices, just applied at increasing levels of
sophistication.
