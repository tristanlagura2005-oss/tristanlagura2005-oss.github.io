# Tristan Lagura Portfolio

A polished, accessible, single-page portfolio for **Tristan Lagura — Executive Operations & E-Commerce Coordinator**.

The site uses semantic HTML, modern CSS, and small vanilla JavaScript. It has no build step, no npm packages, no framework, no database, and no external font or icon dependency.

## Quick preview

The simplest preview is to open `index.html` in a browser. For a more accurate local test, start a small static server from this folder:

```bash
python -m http.server 8000
```

On Windows, this may be:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000`.

## Recommended repository options

Use the GitHub account **tristanlagura2005-oss**.

### Option A — GitHub user site

Repository name:

```text
tristanlagura2005-oss.github.io
```

Default URL:

```text
https://tristanlagura2005-oss.github.io/
```

This is the cleanest option before the custom domain is connected.

### Option B — GitHub project site

Repository name:

```text
tristan-lagura-portfolio
```

Default URL:

```text
https://tristanlagura2005-oss.github.io/tristan-lagura-portfolio/
```

The included relative asset paths work with either repository option, a custom domain, and local preview.

## Deploy to GitHub Pages

### 1. Create the repository

1. Sign in to GitHub.
2. Select **New repository**.
3. Choose one of the repository names above.
4. Set the repository to **Public** when using GitHub Free.
5. Do not add a template that would replace these files.
6. Create the repository.

### 2. Upload the website files

Upload **the contents of this folder**, not the enclosing ZIP file itself. The repository root should contain:

```text
index.html
styles.css
script.js
404.html
robots.txt
sitemap.xml
favicon.svg
README.md
assets/
```

Keep the `.nojekyll` file in the repository root. It tells GitHub Pages to publish the static files without Jekyll processing.

### 3. Commit the files

Use a clear first commit message, such as:

```text
Launch Tristan Lagura portfolio
```

Commit directly to the `main` branch.

### 4. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. In the left sidebar, open **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch.
6. Select the `/ (root)` folder.
7. Select **Save**.

GitHub will publish the site after the Pages deployment finishes. Check the repository's **Actions** tab if the first deployment is still running or reports an error.

Official reference: [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 5. Test the GitHub Pages URL

Check the correct URL for the repository option selected above. Test at minimum:

- Main navigation and every section anchor
- Mobile navigation
- All four case-study dialogs
- Resume open and download links
- Email and phone links
- LinkedIn and GitHub links
- Images at desktop and mobile widths
- The custom `404.html` page by entering a made-up path

## Connect `tristanlagura.com`

The package includes `CNAME.example`, not an active `CNAME`, because the domain may not yet be purchased or connected.

### 1. Purchase the domain

Purchase `tristanlagura.com` from a domain registrar. Domain registration is separate from GitHub Pages.

### 2. Verify the domain in GitHub first

GitHub recommends verifying a custom domain before attaching it to a Pages repository. Verification reduces the risk of another GitHub user claiming the domain for a Pages site.

Official reference: [Verifying a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

### 3. Add the custom domain in the repository

1. Open **Repository → Settings → Pages**.
2. Under **Custom domain**, enter:

```text
tristanlagura.com
```

3. Select **Save**.

For a branch-based Pages deployment, GitHub may create a `CNAME` file automatically. Alternatively, rename `CNAME.example` to `CNAME`, commit it to the repository root, and confirm that it contains only:

```text
tristanlagura.com
```

Do not keep both `CNAME` and `CNAME.example` as active configuration files. `CNAME.example` is harmless, but only `CNAME` is used by GitHub Pages.

### 4. Configure DNS at the registrar

For the apex domain `tristanlagura.com`, create these four `A` records:

| Type | Host/Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional IPv6 `AAAA` records:

| Type | Host/Name | Value |
|---|---|---|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

For the `www` version, create this record:

| Type | Host/Name | Value |
|---|---|---|
| CNAME | `www` | `tristanlagura2005-oss.github.io` |

Important details:

- The `www` CNAME points to the GitHub user domain and **does not include a repository name**.
- Remove conflicting default parking records from the registrar.
- Do not use wildcard DNS such as `*.tristanlagura.com`.
- Some registrars support an `ALIAS` or `ANAME` at the apex instead of the four `A` records. Follow the registrar's instructions when using that option.
- DNS changes may take up to 24 hours to propagate.

Official reference and current DNS values: [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

### 5. Enable HTTPS

After GitHub confirms the DNS configuration:

1. Return to **Repository → Settings → Pages**.
2. Wait for the TLS certificate to be issued.
3. Select **Enforce HTTPS** when the option becomes available.

The option can take time to appear after DNS changes. Avoid mixed content by keeping all site assets on relative or HTTPS URLs; this site already does so.

Official reference: [Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## Update the website later

### Text and project content

Edit `index.html`. Preserve the heading order, button labels, alternative text, and dialog labels so the accessibility structure remains intact.

### Colors and layout

Edit the variables near the top of `styles.css`. Test color contrast before changing text or background colors.

### JavaScript behavior

Edit `script.js` only when changing mobile navigation, reveal effects, or dialog behavior. The site does not need JavaScript for its basic content, but JavaScript powers the expanded case-study dialogs and mobile menu.

### Replace images safely

1. Create a copy of the new image rather than publishing an unreviewed original.
2. Remove metadata when exporting.
3. Crop out account controls, notifications, customer information, supplier URLs, private identifiers, credentials, or confidential data.
4. Export a compressed JPG fallback and a WebP version.
5. Keep the existing lowercase filename when replacing an image directly, or update every matching path in `index.html`.
6. Keep the correct `width`, `height`, and alternative text in the HTML.
7. Recheck desktop and mobile cropping.

Do not place the original private screenshots in the public repository.

### Update the resume

Replace this file with the new PDF while keeping the same filename:

```text
assets/documents/tristan-lagura-resume.pdf
```

Then test all resume links in the navigation, hero, resume section, and contact section.

### Update the custom domain

If the domain changes, update all of these locations:

- Canonical URL in `index.html`
- Open Graph URLs in `index.html`
- Person JSON-LD URL and image paths in `index.html`
- `robots.txt`
- `sitemap.xml`
- `CNAME` after the new domain is ready

## Final link test before job applications

Open the live site in a private/incognito browser window and test:

1. Home, Work, Skills, About, Experience, Resume, and Contact navigation
2. All project-detail buttons and close controls using mouse and keyboard
3. `Escape` to close dialogs
4. Mobile menu at 390px and 320px widths
5. Resume open and download actions
6. `mailto:` email link
7. `tel:` phone link on a phone
8. LinkedIn and GitHub links
9. Every image and caption
10. The site's HTTPS padlock and custom domain redirect
11. Browser console for errors
12. A made-up URL to confirm the custom 404 page

## Included documentation

- `quality-control-report.md` — completed implementation checks
- `privacy-review.md` — image sanitization and privacy review
- `files-included.txt` — final package manifest

## Source and privacy note

The portfolio uses supplied resume information, approved client-work screenshots, supplied promotional graphics, and supplied personal photographs. Sanitized public copies are included in the package; the original private screenshots are not included.
