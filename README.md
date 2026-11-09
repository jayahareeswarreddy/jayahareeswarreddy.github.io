# jayahareeswarreddy.github.io

My personal portfolio, built as an arcade cabinet.

**Live → [jayahareeswarreddy.github.io](https://jayahareeswarreddy.github.io/)**

Rather than the usual hero-plus-cards layout, the site borrows the vocabulary of a
game: skills are **equipped inventory**, work history is a **quest log**, projects are
**games**, and achievements are **trophies**. The framing is a joke that has to hold up
under scrutiny, so every section still answers the question a recruiter actually came
to ask — there is a plain-language ten-second summary pinned up front for anyone who
would rather skip the theme entirely.

## How it is built

One file. `index.html` is 1,500-odd lines of hand-written HTML with the stylesheet and
behaviour inlined — no framework, no bundler, no build step, no dependencies to
install. GitHub Pages serves the file exactly as it sits in the repository.

That constraint is deliberate. A portfolio that needs a toolchain to deploy is a
portfolio that quietly rots when the toolchain moves on.

```
index.html    markup, inline <style>, inline <script>
jaya.jpg      portrait
resume.pdf    downloadable CV
```

## Interaction details

- **Canvas backdrops** drive the animated artwork behind several sections, driven by
  `requestAnimationFrame`.
- **`IntersectionObserver`** triggers section reveals on scroll instead of a scroll
  listener, so nothing thrashes the main thread.
- **`prefers-reduced-motion`** is honoured — the animation is decoration, and the site
  is fully readable without it.
- **`localStorage`** remembers small bits of visitor state between loads.
- **A Konami code easter egg** is in there. Finding it is left as an exercise.
- Typography is Anton, Figtree, Press Start 2P and VT323, loaded from Google Fonts with
  `preconnect` so the arcade lettering does not arrive late.

## Running it locally

```bash
git clone https://github.com/jayahareeswarreddy/jayahareeswarreddy.github.io.git
cd jayahareeswarreddy.github.io
python -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` straight from the filesystem
works too; a server is only needed so `resume.pdf` resolves cleanly.

## Contact

[LinkedIn](https://www.linkedin.com/in/jayahareeswarreddy/) · [GitHub](https://github.com/jayahareeswarreddy)
