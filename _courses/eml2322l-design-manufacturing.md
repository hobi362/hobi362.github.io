---
title: "Design & Manufacturing Laboratory"
institution: "University of Florida"
term: "Summer 2012"
course_code: "EML2322L"
order: 13
tags: ["80/20 extrusion", "PVC fabrication", "Differential drive", "Decision matrices"]
key_project: "Team robot that navigated a slalom course, pulled a bucket off a rack, picked seven tennis balls off a three-tiered stand, and dropped them all in the bucket without knocking anything over."
---
Sophomore-level design-and-manufacturing class — the one where they hand you a stockroom
of 80/20 extrusion, PVC pipe, and small gearmotors and expect a working robot by the end
of the semester. This is where I first went through a full, formal design process: run a
weighted decision matrix before committing to a concept, build a prototype, watch it fail
in a way you didn't expect, and fix it without starting over from scratch.

Working in a five-person team (Team 1A), I mostly owned budget tracking and helped run the
concept-selection process, on top of the general hands-on build work everyone did.

### Concept selection

Before anyone touched a hacksaw, we scored six candidate drivetrain combinations against
speed (30%), controllability (40%), size (20%), and modularity (10%) — controllability got
the highest weight on purpose, since knocking over a single tennis ball or bucket wiped
out any time bonus. The matrix pointed us toward 13.6" drive wheels paired with 44-RPM
right-angle gearmotors: fastest of everything we scored (~1.95 ft/sec) while still
controllable enough with differential steering.

### The manipulators

The ball-pickup mechanism is a length of 3" PVC pipe with a slot cut into the underside,
mounted on a motor so it swings down onto a tennis ball, forces it up through the slot,
and lets it roll down into a bucket the robot is carrying on its front.

![PVC ball manipulator and drive wheel assembly, close up](/assets/images/courses/eml2322l-design-manufacturing/mechanism-detail.jpg)

The bucket manipulator is what actually taught me something about iteration. Original
plan was plywood gripper arms — simple enough, until we realized there was no good way to
attach a wooden shaft to the drive motor without splitting the wood or stripping a set
screw over a few runs. We scrapped it before it was ever fabricated and rebuilt the whole
manipulator out of 80/20 extrusion with shaft couplings on each end instead.

![Assembling the ball manipulator arm in the lab](/assets/images/courses/eml2322l-design-manufacturing/team-assembly.jpg)

Here's the route we planned around the ball stand and release bucket:

![Course route diagram from Appendix F](/assets/images/courses/eml2322l-design-manufacturing/course-route.jpg)

On competition day the robot grabbed all seven tennis balls and made it around the bucket
without knocking anything over.

<iframe src="https://www.youtube-nocookie.com/embed/lUeEeQEReqw" title="EML2322L competition run" style="aspect-ratio: 16/9; width:100%; border:1px solid var(--line-strong); margin: 8px 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p style="font-family: var(--mono); font-size: 0.8rem; color: var(--ink-faint); margin-top: 4px;">Competition run.</p>
