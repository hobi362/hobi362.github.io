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
_projects/       one file per project   → shows up at /projects/<slug>/
_experience/     one file per job       → shows up at /experience/<slug>/
_courses/        one file per class     → shows up at /coursework/<slug>/
```

The home page, `/projects/`, `/experience/`, and `/coursework/` index pages all
auto-populate from these folders and auto-sort by the `order:` field — you never have to
manually re-list anything.

### Adding a new project

1. Copy `_projects/masters-project-1.md` to `_projects/my-new-project.md`.
2. Edit the front matter (title, org, dates, tags, links) and the body.
3. Give it the next `order:` number and a `sheet:` label (e.g. `PRJ-05`).
4. Delete the `status: draft` line once it has real content — this removes the
   "PRELIMINARY" stamp on that page automatically.

Adding a new job (`_experience/`) or class (`_courses/`) works the same way — copy an
existing file in that folder, edit, remove `status: draft` when ready.

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
