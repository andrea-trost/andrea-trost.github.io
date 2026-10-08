# andrea trost: personal site

A plain static site (HTML, CSS, a little JavaScript). No build step, no dependencies.

## Where to edit

| What | File |
|---|---|
| Home: intro, "what i do" rows, link chips | `index.html` |
| Research projects (text, plots, links) | `data/research.js` |
| Publications (first-author / all / posters) | `data/publications.js` |
| CV sections (positions, observing, talks, schools, awards, skills) | `data/cv.js` |
| Colours and type | `assets/style.css` (variables at the top) |
| Spectrum strip behaviour | `assets/site.js`, function `spectrum` |

Each data file starts with a comment explaining its fields.

Things to fill in:

- Put your CV PDF at `assets/TROST_CV.pdf` (the download buttons point there).
- Put plots in `assets/img/` and set `image: 'assets/img/yourplot.png'` in `data/research.js`.
- Replace the `[ ... ]` placeholders: `[N h]`, `[ID]`, `[rank]` in `data/cv.js`, and the `#` links on the home page.
- Check the publication entries (a few volumes and page numbers are left out on purpose).

## Preview locally

Double-click `index.html`, or run a tiny local server from this folder:

    python3 -m http.server 8000

then open http://localhost:8000. The server matters once the random spectra are added, because they are loaded from files.

## Publish on GitHub Pages

1. Create a **public** repository named `YOURUSERNAME.github.io`.
2. Upload everything in this folder to the root of the repository.
3. In the repository: Settings, Pages, Source "Deploy from a branch", branch `main`, folder `/ (root)`.
4. After a minute or two the site is live at `https://YOURUSERNAME.github.io`.

The published site is public. To test first, use the local preview above.

## Notes

- The menu selection is kept in the URL (`research.html#Dark_Photons`), so every project and list can be linked to directly.
- The spectrum strip is a placeholder that draws a random pattern on every load.
