---
title: "MEG-Compatible Keyboard"
subtitle: "A 25-key polymer keyboard with no metal in it, so neuroscientists can study the brain playing music inside a magnetoencephalography scanner"
org: "MIT"
period: "Fall 2016"
location: "Cambridge, MA"
role: "Student team, later team mentor (2017–2019)"
course: "2.75 — Medical Device Design"
order: 6
sheet: "PRJ-06"
thumb: "/assets/images/courses/medical-device-design/meg-piano-hero.jpg"
tags: ["Medical devices", "Rapid prototyping", "FDA-style design process"]
---
A magnetoencephalography scanner measures magnetic fields from the brain a billion times
weaker than the Earth's. Put anything metal near it and the measurement is gone — which is
a problem if you want to study what the brain does while someone plays the piano.

Taught by Nevan Hanumara and Alex Slocum, 2.75 runs on a deterministic, peer-reviewed rapid
device development process — identify a real clinical need, work through functional
requirements and design parameters formally, then build and test a working prototype in
one semester. I took it as a student in 2016, and liked it enough that I came back as a
team mentor for three more years, helping guide the design process on other teams' medical
device projects.

### My project: an MEG-compatible piano

No multi-note instrument existed that was explicitly compatible with
magnetoencephalography (MEG) — the kind of brain-music interaction research MEG enables
needed an instrument that wouldn't introduce any magnetic interference into an extremely
sensitive, magnetically shielded scanning environment. Working with Julian Chacon, Daniel
Rathbone, and Hank Yang, I built a 25-key, all-polymer keyboard connected by fiber optic
cables to an electronics box that sits entirely outside the shielded room — no metal, no
electrical current anywhere near the scanner.

![The finished 25-key MEG-compatible keyboard](/assets/images/courses/medical-device-design/meg-piano-hero.jpg)

We started from real Yamaha electric piano keys for a familiar feel, then built a custom
sensing mechanism underneath: each key drives a 3-state optical encoder — a strip printed
with transparent, semi-transparent, and opaque bands — that a pair of fiber-optic
transmitter/receiver pairs read as the key moves. ULTEM springs and Delrin locating pins
hold the encoder aligned to the fiber bundle under each key.

![Labeled cutaway showing the Yamaha keybed, ULTEM springs, and optical fiber bundle](/assets/images/courses/medical-device-design/meg-piano-mechanism.jpg)

On the electronics side, a transimpedance amplifier converts the fiber's light intensity
into a voltage, two comparators turn that into a clean key-state signal, and an MSP432
microcontroller calculates velocity from the timing between transitions and outputs
standard MIDI to an external synthesizer — plus a trigger signal to sync with the MEG data
acquisition system. Measured latency between a key press and audio output was 5ms, reliably
under the ~25ms threshold for human-perceptible delay.

{% include youtube.html id=page.piano_demo_youtube_id title="MEG-compatible piano demo" %}

![The team with the finished keyboard, next to the CAD model](/assets/images/courses/medical-device-design/meg-piano-team.jpg)

This became a published paper — see [Publications](/publications/) — presented at EMBC
2017 in South Korea.

<p class="pub-links"><a href="/assets/files/papers/meg-piano-paper.pdf" target="_blank" rel="noopener">Download paper ↓</a></p>

### Projects I've mentored

Since 2017 I've mentored other 2.75 teams through the same process, mostly on the
mechanical design side. A few highlights:

<div class="pub-entry">
  <img src="/assets/images/courses/medical-device-design/otoscope.png" alt="Crank-powered otoscope battery replacement, next to two C-cell batteries" style="max-width:220px; float:right; margin-left:16px; border:1px solid var(--line-strong);">
  <p class="pub-title">Crank-Powered Battery Replacement for Otoscopes</p>
  <p class="pub-meta">Alexandre Armengol-Urpi, Peter Duerst, Jaemyon Lee, Kerrie Wu, Michael Fuenfer, Gim Hom, and Nevan Hanumara — I contributed to the mechanical design and testing.</p>
  <p>A hand-crank-powered module built to the exact size and electrical contacts of two
  C-cell batteries, so it drops into any existing LED otoscope with zero modification —
  aimed at clinics without reliable grid power or replacement batteries. A few minutes of
  comfortable cranking powers a full day of patient exams.</p>
  <p class="pub-links"><a href="/assets/files/papers/crank-otoscope.pdf" target="_blank" rel="noopener">Download paper ↓</a></p>
</div>

<div class="pub-entry">
  <img src="/assets/images/courses/medical-device-design/cog-tracker.png" alt="Center of gravity tracker seat with force measurement modules" style="max-width:260px; float:right; margin-left:16px; border:1px solid var(--line-strong);">
  <p class="pub-title">Center of Gravity Tracker for Operator Fatigue Detection</p>
  <p class="pub-meta">Elliot Owen, Tomohiro Maeda, Ziwen Jiang, Isaiah Udotong, Erik Hornberger, Junichi Morita, Gim Hom, and Nevan Hanumara — I mentored the team on the mechanical design.</p>
  <p>A low-cost sensor that tracks a seated operator's center of gravity from four flexure-
  protected load cells built into the seat mounts, aimed at non-invasively detecting driver
  fatigue in heavy machinery — no electrodes, no cameras, nothing the operator has to wear.</p>
  <p class="pub-links"><a href="/assets/files/papers/cog-fatigue-tracker.pdf" target="_blank" rel="noopener">Download paper ↓</a></p>
</div>

<div class="pub-entry">
  <img src="/assets/images/courses/medical-device-design/splint.png" alt="Origami-style folding splint strapped to a leg" style="max-width:220px; float:right; margin-left:16px; border:1px solid var(--line-strong);">
  <p class="pub-title">Distal Extremity Fracture Stabilization (Origami Splint)</p>
  <p class="pub-meta">Rebecca Kestin, Chetan Sharma, Austin Brown, and Thanh Nguyen, with Dr. Jay Connor and Prof. Alex Slocum — I contributed to the design and mechanical testing.</p>
  <p>A folding-panel splint for EMTs — Lexan panels linked by Kevlar fabric hinges fold down
  to 8"×8"×1" for storage, then unfold and Velcro-strap around a leg. Held 2700N in bending
  tests (5.8× the target load) and can reconfigure into two board splints for angled
  fractures.</p>
  <p class="pub-links"><a href="/assets/files/papers/origami-splint.pdf" target="_blank" rel="noopener">Download paper ↓</a></p>
</div>

<div class="pub-entry">
  <img src="/assets/images/courses/medical-device-design/breech-device.png" alt="Cervical retractor device prototype" style="max-width:220px; float:right; margin-left:16px; border:1px solid var(--line-strong);">
  <p class="pub-title">Device Prototype for Vaginal Delivery of Extremely Preterm Fetuses in the Breech Presentation</p>
  <p class="pub-meta">Mallory Whalen, Elizabeth Chang-Davidson, Terra Moran, Galit Frydman, Prof. Alex Slocum, and Dr. Alissa Dangel — published in ASME Journal of Medical Devices, 2020.</p>
  <p>A two-part device to enable vaginal delivery of extremely preterm breech fetuses
  without head entrapment: a saline-filled cervical balloon that dilates the cervix, and a
  cervical retractor built from inflatable rings and curved beams that holds the birth canal
  open during delivery. See also <a href="/publications/">Publications</a>.</p>
  <p class="pub-links"><a href="/assets/files/papers/breech-delivery-device.pdf" target="_blank" rel="noopener">Download paper ↓</a></p>
</div>

<div class="pub-entry">
  <img src="/assets/images/courses/medical-device-design/lift-device.png" alt="CAD model of a portable powered seat-to-stand lifting device" style="max-width:220px; float:right; margin-left:16px; border:1px solid var(--line-strong);">
  <p class="pub-title">Portable Powered Seat-to-Stand Lifting Device</p>
  <p class="pub-meta">Mentored project — helping a physically impaired user transition from seated to standing.</p>
  <p>A compact, portable lift mechanism aimed at helping physically impaired users move from
  sitting to standing without a caregiver's assistance.</p>
</div>
