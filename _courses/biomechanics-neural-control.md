---
title: "Biomechanics and Neural Control of Movement"
institution: "Massachusetts Institute of Technology"
term: "Fall 2017"
course_code: "2.183"
order: 18
tags: ["Motor control", "Impedance control", "Equilibrium-point theory", "Neuromechanics"]
youtube_id: ""
video_caption: "Robot arm responding to an impulse perturbation."
key_project: "Built a 2-DOF direct-drive robot arm implementing the Equilibrium-Point model of human motor control, and used it to recreate Tamar Flash's classic 1987 minimum-jerk reaching experiment."
---
Taught by Neville Hogan, 2.183 is a quantitative, model-based look at how biomechanical and
neural factors interact in human sensory-motor behavior. Coursework covered neural,
muscular, and skeletal physiology, neural feedback and equilibrium-point theories,
co-contraction strategies, impedance control, kinematic redundancy, optimization,
intermittency, and contact/tool-use tasks.

### Final project: recreating human reaching with a robot arm

The goal was to build a real, physical test of a specific theory of human motor control —
the 1993 McIntyre-Bizzi Modified Equilibrium-Point model — by implementing it on a 2-DOF
robot arm and using that arm to recreate Tamar Flash's classic 1987 experiment: moving a
hand between six target points and observing the resulting minimum-jerk trajectories.

![The finished 2-DOF direct-drive arm](/assets/images/courses/biomechanics-neural-control/arm-hero.jpg)

Reaching movements have two components worth separating: how the central nervous system
generates a motor command in the first place, and how the musculoskeletal system's own
dynamics turn that command into motion. The Equilibrium-Point (or "servo") hypothesis
handles this by cleanly separating passive mechanical dynamics — joint stiffness and
damping around some equilibrium angle — from neural control, which just has to produce that
equilibrium angle over time from delayed position and velocity feedback. It deliberately
ignores joint biomechanics and muscle force-length relationships in exchange for a much
simpler robotic control framework.

![Two-link arm parameterization](/assets/images/courses/biomechanics-neural-control/arm-diagram.jpg)

### Building the arm

We built the arm from 0.25" acrylic (easy to machine accurately) sized to 50th-percentile
male arm-segment proportions, with two Maxon pancake motors mounted directly at each joint
— model 244879 at the shoulder, a weaker 323772 at the elbow. Direct-drive was the key
choice here: no gearbox means no backlash or added friction fighting the impedance
controller, and Hall sensors at each joint gave relative angle feedback.

![SolidWorks model of the arm](/assets/images/courses/biomechanics-neural-control/solidworks-model.jpg)

To control two joints instead of one, we ran two copies of the joint-level feedback
controller (one per joint) plus Flash's multi-joint stiffness model to capture coupled
2-joint muscle dynamics — a single joint's controller doesn't know about the other joint
without that coupling term.

### Working around a hard bandwidth limit

The Maxon EPOS2 servo drives we used talk over USB serial, which capped our control loop at
a 20ms period (50Hz). Standard digital-control practice wants roughly 30x margin between
loop rate and the continuous-time bandwidth you're trying to emulate, which put a hard
ceiling of about 1.67 Hz (10.47 rad/s) on anything we could reasonably implement.

That turned out fine: computing the frequency response for a single link (0.0474 kg·m²
inertia) using McIntyre's own published neural-control gains showed the gain never crosses
unity — estimated system bandwidth came out around 0.01 Hz, comfortably inside our hardware
limit. So rather than tuning the controller for the snappiest possible performance, we left
it with McIntyre's original, deliberately-suboptimal-but-biomimetic parameters — the whole
point was testing the model, not building the fastest arm we could.

![Frequency response analysis](/assets/images/courses/biomechanics-neural-control/frequency-response.jpg)

### Testing against Flash's experiment

First test: hold the shoulder at 1.6 rad and the elbow at 0.8 rad, then hit the end effector
with an impulse and watch it settle back — a basic stability and impedance check.

![Impulse response at the shoulder and elbow](/assets/images/courses/biomechanics-neural-control/impulse-response.jpg)

Then the actual reaching experiments: driving the arm between Flash's target points (1→4,
then 3→6), each repeated three times, and comparing the resulting hand paths against her
published minimum-jerk trajectories.

![Hand trajectory, target 1 to target 4](/assets/images/courses/biomechanics-neural-control/trajectory-t1-t4.jpg)

The 1→4 reach came out as a slightly exaggerated version of Flash's observed movement — a
good result. The 3→6 reach overshot the target more than her data showed, with the
controller visibly correcting the error before finally settling — a real result, not just a
clean confirmation, and the Hall sensors' coarse resolution adds visible discretization
noise to both trajectory plots.

![Hand trajectory, target 3 to target 6](/assets/images/courses/biomechanics-neural-control/trajectory-t3-t6.jpg)

Subjectively, the arm's response to the impulse perturbation felt genuinely natural to
interact with by hand, and it reliably completed minimum-jerk-like reaches consistent with
Flash's data. The clearest paths to a more realistic arm from here: dynamic stiffness (a
Hill muscle model with contractile-length-dependent stiffness instead of fixed impedance),
higher control bandwidth, better joint-angle sensing, and richer muscle geometry —
agonist/antagonist pairs and multi-joint muscles instead of one lumped stiffness term per
joint.

{% include youtube.html id=page.youtube_id title=page.title caption=page.video_caption %}
