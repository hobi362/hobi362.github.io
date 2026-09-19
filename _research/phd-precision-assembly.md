---
title: "Precision Assembly of Heavy Objects Suspended from a Crane"
subtitle: "Using cable slack, not rigid positioning, to insert a heavy peg into a tight-clearance hole"
org: "MIT — d'Arbeloff Laboratory"
degree: "PhD"
period: "2019 – 2021"
sort_date: "2021-12"
location: "Cambridge, MA"
role: "PhD Candidate (Advisor: H. Harry Asada)"
thumb: "/assets/images/research/phd-precision-assembly/winchbot-design.png"
order: 3
sheet: "RES-03"
links:
  - label: "Precision Assembly of Heavy Objects... (RA-L 2020) — Download PDF"
    url: "https://819cf279-319a-43b0-964c-d14c7d146900.filesusr.com/ugd/a7bf6b_6deda6dd124f4c5fb905a04572b2b51c.pdf"
  - label: "Precision Assembly of Heavy Objects... (RA-L 2020) — Webpage / DOI"
    url: "https://doi.org/10.1109/LRA.2020.3013845"
  - label: "Control Strategy for Jam and Wedge-Free Insertion (RA-L 2021) — Webpage / DOI"
    url: "https://doi.org/10.1109/LRA.2021.3093860"
---
In heavy industry, parts like ship-engine cylinder cases and wind-turbine gearbox shafts
weigh tens to hundreds of kilograms, and they still have to be lowered into holes with
very little clearance. Today that is done with an overhead crane and skilled workers who
push and pull the hanging part into line while someone else runs the hoist. Those workers
are getting harder to find, and a mistake can damage expensive parts.

My PhD, *"Precision Assembly of Underconstrained Heavy Shafts Suspended By Multiple Cables
From A Robotic Crane,"* asks whether the crane can do that fine work itself. Instead of
making the crane more precise, I made the way the load hangs do the work: a heavy shaft
suspended from several cables, attached at the right positions and angles, can be inserted
into a chamfered hole with 120 µm of clearance even though the crane can't place it that
accurately.

### Why cables instead of a robot

A large industrial robot can do peg-in-hole assembly, but it controls every degree of
freedom of the part, needs precise force control to do it safely, and takes up a large,
permanent footprint on the factory floor. Cable-driven parallel robots handle heavy loads
well, but they have the same fixed footprint.

I took a different route: mount the winches of a cable-suspended robot on a platform that
hangs from the factory's existing gantry crane. The crane does the coarse motion and the
winches do the fine motion, with no footprint of its own. The system is deliberately
underactuated, and that turns out to be an advantage. Cables can only pull. If the peg lands
badly on the chamfer, one cable simply goes slack instead of driving the peg harder into
the hole, so the only force on the part is its own weight. A stiff robot in the same
situation can push hard enough to damage both parts.

![Two side-by-side cases: a robot pressing a peg into a chamfer produces large reaction forces at the contact, while a peg hanging from cables only presses on the chamfer with its own weight because the cables can go slack](/assets/images/research/phd-precision-assembly/robot-vs-cables.png)

![The WinchBot concept at factory scale: a gantry crane with the three-winch platform hanging from it, lowering a shaft toward a hole on a workbench](/assets/images/research/phd-precision-assembly/gantry-concept.png)

### The WinchBot

I designed and built the WinchBot, a scaled three-winch prototype. Each winch sits on its
own linear actuator with 400 mm of travel, spaced 120° apart, and each drives a single cable
down to an instrumented gripper holding the peg. The winches use Harmonic Drive brushless
gearmotors with ODrive controllers, absolute encoders, and load cells read through HX711
amplifiers for real-time tension, all wired through Arduino on protoboard I soldered myself
and controlled in Python. The winch drums and housings were 3D-printed on a Markforged
composite printer.

![The WinchBot: a triangular frame attaches to the crane, with a winch assembly on each of three linear actuators with 400 mm of travel, and three cables running down to an instrumented gripper on the peg. Below, section and 3D views of one winch assembly: grooved winch drum, keyed drive shaft on support bearings, flexible shaft coupling, motor mount and Harmonic Drive brushless gearmotor](/assets/images/research/phd-precision-assembly/winchbot-design.png)

The gripper does the sensing. An IMU measures the peg's tilt, encoders measure the cable
attachment and twist angles, load cells measure tension, and motorized chuck and clamping
mechanisms grip and center the peg.

![Cutaway of the instrumented gripper, labeled: a screw-driving motor and socket, load cells for tension measurements, encoders for cable attachment and twist angles, a chuck mechanism, clamping motor, insertion screw and rubber clamp, beside a photo of the built gripper](/assets/images/research/phd-precision-assembly/instrumented-gripper.jpg)

I also used computer vision to watch what the peg was actually doing. Using OpenCV and
ArUco, I tracked two fiducial tags with a camera: one attached to the peg to track its
position and orientation, and one attached to the hole as ground truth. Comparing the peg
tag's motion to what the winches were doing showed whether the peg was being inserted
properly or had become jammed or wedged.

The test peg is aluminium, 15 kg, 105.42 mm in diameter and 593.7 mm long. The matching
cast-iron hole is 105.53 mm, which leaves 120 µm of clearance, with a static coefficient
of friction of 0.67 between them.

![The experimental setup: the WinchBot with its three winches on linear actuators, the instrumented gripper holding the 15 kg aluminium peg, a fiducial tag on the hole fixture, and a close-up of the cast-iron hole and its chamfer](/assets/images/research/phd-precision-assembly/experimental-setup.png)

### Breaking insertion into stages

Getting a cable-suspended peg all the way in means getting through five stages: first
contact with the chamfer, crossing the chamfer, one-point contact, two-point contact, and
full insertion. Each stage fails in its own way, and my work falls into two parts along
those lines.

![The five stages of peg insertion drawn left to right: first contact with the chamfer, chamfer crossing with the peg tilting, one-point contact, two-point contact with contact forces marked, and full insertion](/assets/images/research/phd-precision-assembly/insertion-stages.png)

### Part 1: getting across the chamfer

For the peg to enter at all, it has to slide down the chamfer toward the center of the hole
rather than catching on it. I showed there are two separate ways that can fail, and both
depend on the cable attachment angles:

- **Sticking**, a friction problem. If the peg's weight, the tension in one cable and the
  chamfer's reaction force all meet inside the friction cone, the peg sticks and the other
  cable goes slack. That gives upper and lower bounds on the cable angle for a given
  coefficient of friction.
- **Staying stationary**, a kinematics problem. While both cables are taut they act like
  rigid links, and the peg moves as a four-bar linkage. Its instantaneous center of
  rotation sets the path the contact point wants to follow, and for some cable angles
  that path won't take it down the chamfer.

Together those define the allowable cable angles. For the angles that are allowed, I
simulate the chamfer crossing step by step to predict the peg's tilt at the end of the
chamfer, and then how deep it will be when two-point contact begins. That depth matters,
because a shallow two-point contact is where wedging happens. I built a 2D experimental rig
to test the predictions, and the measured tilt and depth tracked the predicted values across
the cable angles and starting offsets I tried.

![Predicted against measured results from the 2D experiments: peg tilt at the end of the chamfer crossing and depth of first two-point contact, plotted against initial cable angle for several starting offsets, with the predicted sticking and stationary region shaded](/assets/images/research/phd-precision-assembly/predicted-vs-measured.png)

That gives a design sequence for choosing how to hang any peg:

![The design sequence in four steps: define the peg and hole geometry, find the sticking and stationary regions to rule out cable angles, simulate the chamfer crossing to check the peg tilt, then simulate one-point contact to pick the angle with the deepest two-point contact](/assets/images/research/phd-precision-assembly/cable-angle-design.png)

The parameter studies give some useful rules of thumb. Longer pegs leave more cable angles
allowable, wider pegs leave fewer, and a steeper chamfer helps. The cable angles also set
how the peg sways while the crane moves it. Large angles let it swing slowly for a long
time, small angles damp it quickly, and there is a sweet spot that cancels almost all of
the sway. This work was published in *IEEE Robotics and Automation Letters* and presented at
IROS 2020.

The winches can also be repositioned. By solving the inverse kinematics as an optimization,
with the peg position known and the tilt and cable tensions unknown, over thousands of
candidate winch placements, I can pick the configuration that places the peg with the least
tilt before insertion starts.

![Winch placement: the region of winch configuration centroids that keep peg tilt small, drawn over the three linear actuators, with example winch layouts below](/assets/images/research/phd-precision-assembly/winch-placement.png)

### Part 2: no jamming, and recovering from wedging

Once the peg is in two-point contact, two more failures are possible.

**Jamming** happens when the forces pushing the peg in also press it against the sides of
the hole. I derived the jamming condition for a peg hanging from three cables in 3D. The
catch is that the condition depends on the angle of the contact plane, which you can't
measure while the peg is moving. So the control has to work for any contact angle, and
that means driving six tension terms to zero at once. Balancing the vertical tension
components and balancing the in-plane components turn out to be conflicting conditions,
so you have to choose between them based on the peg geometry and cable angles. For a long
peg on shallow-to-moderate cable angles, balancing the in-plane components wins. With that
controller running, insertion and extraction stay smooth and satisfy the jamming condition
the whole way; without it, the cable tensions diverge and the peg jams.

![Insertion and extraction with the jam-free controller: cable tensions stay balanced, applied forces stay small, peg depth changes smoothly in and out, and the jamming inequality stays satisfied throughout](/assets/images/research/phd-precision-assembly/jam-free-insertion.png)

**Wedging** happens when two-point contact starts too shallow, and the contact forces lock
the peg in place with energy stored in the elastic deformation. The only real fix is to
back the peg out and try again with less tilt. The WinchBot does that on its own:

1. **Detect** the wedge: all three cables go slack at once.
2. **Take up the slack**, tightening each cable back to about its tension before the wedge.
3. **Break the wedge** with a coordinated set of cable tensions. There are two strategies,
   and which works better depends on whether the cable angles are steep or shallow.
4. **Confirm it broke** from a spike in peg acceleration and cable tension.
5. **Correct the tilt** using the gripper's IMU and coordinated cable lengths.
6. **Reinsert** with the jam-free controller, repeating if needed.

![The wedge correction procedure as a sequence of diagrams: the peg lowered on its cables, wedged in the hole, lifted out, its tilt reduced, and reinserted deeper without wedging](/assets/images/research/phd-precision-assembly/wedge-correction-steps.png)

![Wedge correction on the WinchBot: the cable tensions drop to zero when the peg wedges, spike when the wedge breaks, and the peg tilt is corrected before a smooth two-point-contact reinsertion](/assets/images/research/phd-precision-assembly/wedge-correction-data.png)

The jamming and wedging work was published in *IEEE Robotics and Automation Letters* and
presented at IROS 2021.

### Where it landed

The WinchBot inserts a 15 kg peg into a hole with 120 µm of clearance, crosses the chamfer
reliably, avoids jamming, and recovers from wedging on its own, using only cable tension
and a crane. I defended the thesis on 30 April 2021, and I believe the approach could
move into a factory: it uses the crane that is already there, and it needs no skilled
worker standing next to a hanging shaft.

Before the WinchBot, I proved out the core idea on a simpler two-cable rig, tracking the
shaft and the hole with OptiTrack motion capture:

![The proof-of-concept test rig, annotated: a velocity controlled base frame carrying two cables that suspend an orange shaft above a chamfered hole, with OptiTrack motion capture markers on the shaft and the fixture, an indicator LED that signals contact, and a ground reference plane of markers below](/assets/images/research/phd-precision-assembly/test-rig.png)

### Videos

{% include youtube.html id="9QpGT-fQ0Ao" title="WinchBot demonstration video" %}

*The WinchBot demonstration.*

{% include youtube.html id="-Dmj4uNF_Ws" title="Precision insertion of underconstrained heavy shafts: sway suppression" %}

*Sway suppression: tuning the cable angles so the peg stops swinging.*

<div class="shorts-row">
  {% include youtube.html id="87sADHeuvxk" title="Precision insertion: controller demonstration" vertical=true %}
  {% include youtube.html id="P-963Sx2-Qg" title="Precision insertion: jamming when no controller is used" vertical=true %}
  {% include youtube.html id="uUa5Kq86srE" title="Precision insertion: wedge correction demonstration" vertical=true %}
  {% include youtube.html id="_mocRXx_4TQ" title="Precision insertion: shaft trajectory demonstration" vertical=true %}
</div>

*From left: the insertion controller, jamming when no controller is used, wedge correction,
and the shaft's trajectory during insertion.*

{% include youtube.html id="WIGmsnLNr6k" title="IROS 2020 demonstration video, precision assembly with a cable-suspended peg" %}

*The demonstration video accompanying the IROS 2020 paper.*
