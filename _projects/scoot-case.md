---
title: "Scoot Case"
subtitle: "A collapsible electric scooter that folds into its own carry case in under 45 seconds"
org: "U.F."
period: "Fall 2014 – Spring 2015"
location: "Gainesville, FL"
role: "Senior capstone team member"
course: "EML4501 / EML4502 — Design Realization / Senior Design"
order: 2
sheet: "PRJ-02"
thumb: "/assets/images/courses/design-realization/scoot-case-poster.jpg"
tags: ["Senior capstone", "Machine design", "FEA", "Brushless drive", "Fabrication"]
---
A two-semester capstone under Peter Ifju: EML4501 took the design from an open-ended brief
through detailed analysis and a defended engineering report, and EML4502 was where you found
out what your drawings were actually worth, because you had to build the thing.

### Scoot Case

Our brief was personal mobility, and the design that came out of it was a collapsible
electric scooter that folds down into a hard case you can carry. The functional
requirements we set were concrete enough to check: carry an adult at up to 15 mph, run
for at least 40 minutes on a charge, and fold or unfold in under 45 seconds.

Team: Andre Mildh, Camilo Rey, Cleveland Joseph, Jason Bice, Ben Kutz, and me.

![Scoot Case design poster — collapsed and deployed configurations, internal frame, rear motor and wheel assembly, FEA results, and specifications](/assets/images/courses/design-realization/scoot-case-poster.jpg)

**As designed:** 15 mph top speed · 2 m turning radius · 23.6 lb · 45 min runtime ·
12.3 N·m torque · ~600 in³ of internal storage · $1,300 build cost.

The folding requirement drove everything. A scooter that folds is easy; a scooter that
folds *into a closed case that also carries your things* means the frame geometry, the
motor placement, and the storage volume all have to be solved at once rather than in
sequence. We ran FEA on the frame to confirm it carried a 400 lb load with margin, since
the folding joints put the worst stresses right where the structure had to come apart.

![Rear wheel assembly — chain drive from the brushless motor, disc brake, and the welded aluminum swingarm](/assets/images/courses/design-realization/rear-wheel-assembly.jpg)

![Steering column and front fork with the folding joints and caster wheels, partway through assembly](/assets/images/courses/design-realization/steering-column.jpg)

### Building it

In EML4502 we fabricated a modified version of the design. This was the semester that
taught me how much of a drawing is assumptions you didn't know you were making — tolerances
that were fine on screen and impossible on a manual mill, weldments that moved when they
cooled, fasteners you couldn't physically reach once the frame was together.

![Machining and assembly in the UF shop](/assets/images/courses/design-realization/in-the-shop.jpg)

That gap between the CAD model and the part in your hand is the reason I went on to care
about precision machine design and error budgeting — the idea that you should be able to
*predict* how far off the built thing will be, rather than finding out at assembly.
