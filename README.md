# hobi362.github.io

Portfolio site, built as a static [Jekyll](https://jekyllrb.com) site. GitHub builds and
deploys this automatically — **there is nothing to install or configure to go live.**

## 1. Deploy it (one time)

```bash
git clone https://github.com/hobi362/hobi362.github.io.git
# copy everything from this folder into the repo root, then:
git add .
git commit -m "Initial portfolio site"
git push
```

In the repo's **Settings → Pages**, make sure "Source" is set to "Deploy from a branch",
branch `main`, folder `/ (root)`. Because the repo is named `hobi362.github.io`, GitHub
already knows to build it with Jekyll — no extra workflow file needed. Your site will be
live at **https://hobi362.github.io** within a minute or two of pushing.

## 2. How content is organized

Every page is one small Markdown file with a front-matter header (the `---` block at the
top) and body text below it. You never touch HTML to add a new entry.

```
_research/       one file per research appointment → shows up at /research/<slug>/
_projects/       one file per project              → shows up at /projects/<slug>/
_experience/     one file per job                  → shows up at /experience/<slug>/
_writeups/       2.77 weekly write-ups             → /projects/t-based-lathe/writeups/<week>/
_seekgeeks/      2.77 Seek & Geek analyses         → /miscellaneous/seek-and-geek/<week>/
```

`_research/` is thesis and lab research; `_projects/` is everything that was built —
course final projects (the class is a `course:` detail on the page), sponsored industry
work and design challenges.

The index pages auto-populate from these folders, so you never have to manually re-list
anything. **Two different sort keys are in play, both most recent first:**

| Index | Order | Driven by |
|---|---|---|
| `/research/`, `/experience/` | most recent first | `sort_date:` |
| `/projects/` and the home page tiles | most recent first | `order:` (chronological, reversed) |
| 2.77 write-ups and Seek & Geeks | week 1 first | `order:` |

`sort_date:` is `"YYYY-MM"` of the **end** of the term or appointment (a Spring term ends
`-05`, Fall `-12`, Summer `-08`). An ongoing role uses `"9999-12"` so it stays pinned to
the top. Don't use `order:` for those two.

### Adding a new project

1. Copy `_projects/rawhide.md` to `_projects/my-new-project.md`.
2. Edit the front matter (title, org, dates, links) and the body. Pages carry no `tags:` —
   skills and stack come from `_data/skills.yml` (see below).
3. Give it the next `order:` number and a `sheet:` label (e.g. `PRJ-03`).
4. Delete the `status: draft` line once it has real content — this removes the
   "PRELIMINARY" stamp on that page automatically.

Adding a new job (`_experience/`) works the same way — copy an existing file in that
folder, edit, remove `status: draft` when ready, and set `sort_date:` rather than `order:`.

### Skills (`_data/skills.yml`)

One file lists every skill, and it drives three things at once: the **/skills/ page**, the
**Skills chips** in the side panel of each project, research and job page, and the **filter
bar** on `/projects/`. Nothing else needs editing to keep them in step.

Each skill looks like this:

```yaml
- id: fabrication          # anchor + filter value; don't change once published
  name: "Fabrication & prototyping"
  short: "Fabrication"     # chip label
  group: "Build"           # heading on /skills/ (group order is set in skills.md)
  summary: "Building real hardware: prototyping, frame construction and assembly."
  filter: true             # offer as a chip on /projects/
  pages:                   # page URLs that show it, trailing slash included
    - "/projects/scoot-case/"
  also:                    # optional: evidence that isn't its own page
    - label: "Certification: GD&T Basics"
      url: "/awards/"
```

To connect a new project to a skill, add its URL under that skill's `pages:`. A `filter:`
chip that matches no project is hidden automatically, and a page with no skills simply
shows no Skills row.

If a page collects so many skills that its side panel gets crowded, cap the chips from that
page's own front matter:

```yaml
skills_show:
  - "surgical-robotics"
  - "medical-devices"
```

Those chips show in that order and the rest collapse into a "+N more" link to `/skills/`.
The Skills page still lists the page under every skill that names it.

### The "PRELIMINARY" stamp

Every placeholder page currently has `status: draft` in its front matter, which renders
a diagonal stamp on the page. It's a visual TODO list — once you've replaced the content,
delete that line (or the whole page won't show it).

## 3. Images, PDFs, and your resume

Put images in `assets/images/` and reference them in a page body like:

```markdown
![Description of image](/assets/images/your-file.jpg)
```

Put your resume PDF at `assets/files/resume.pdf` — the footer link is already wired up in
`_config.yml` (`resume_pdf:`).

## 4. Global settings

Edit `_config.yml` for your name, tagline, email, LinkedIn URL, and resume path — these
values are pulled into the header/footer on every page.

## 5. Previewing changes before you push (optional)

You don't need this to deploy — GitHub builds the site for you on every push. But if you
want to preview locally, install Ruby + Bundler, then:

```bash
gem install bundler jekyll
bundle init
bundle add jekyll-sitemap jekyll-seo-tag
bundle exec jekyll serve
```

and open `http://localhost:4000`.

## 6. Design system reference

The site uses an "engineering drawing sheet" visual language — title blocks, sheet
numbers, a monospace data layer (IBM Plex Mono) over IBM Plex Sans for body/headings.
Color tokens and all styling live in `assets/css/style.css` under `:root` at the top of
the file if you want to adjust the palette.
