# Vinesh Makhija — Portfolio Site

## Files
- `index.html` — page structure & content
- `styles.css` — all styling (dark, avionics-inspired theme)
- `script.js` — nav toggle, scroll reveal, contact form submission
- `Vinesh_Makhija_Resume.pdf` — linked from the nav and hero "Download résumé" button

## Before you deploy — 2 things to fix

### 1. Formspree form ID (required for contact form to work)
1. Go to https://formspree.io and sign up free.
2. Create a new form, point it at your email.
3. Copy the form endpoint, e.g. `https://formspree.io/f/abcd1234`.
4. In `index.html`, find this line (~line 195):
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual ID.

Until you do this, the form will show an error note instead of submitting (it won't silently fail or hit a fake endpoint).

### 2. Project placeholders
Two project cards ("Ship Detection" and "Wheely — Extended Build") are placeholders since I didn't have details. Search `index.html` for `project-card--placeholder` and replace the tag, description, and tech stack with real info — or delete the `<article>` block entirely if you don't want them shown.

Also worth double-checking: the resume lists "Wheely" as a single project (Java/JSP/Servlets/JDBC). If "wheely" you mentioned earlier is the same thing, delete the second placeholder card so it's not duplicated.

## Deploying to Vercel (recommended, free)
1. Go to https://vercel.com and sign up (GitHub login is easiest).
2. Push this folder to a new GitHub repo (or use Vercel's drag-and-drop deploy — no repo needed for a static site).
3. In Vercel: **Add New → Project → Import** your repo, or drag the folder onto the deploy page.
4. Framework preset: choose "Other" (it's plain HTML/CSS/JS, no build step needed).
5. Deploy. You'll get a `*.vercel.app` URL instantly, and can attach a custom domain later under Project Settings → Domains.

## Deploying to Netlify (alternative)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. Done — instant live URL.

## Customizing further
- Colors/fonts: all defined as CSS variables at the top of `styles.css` under `:root` — change once, updates everywhere.
- Adding a project: copy a `<article class="project-card">` block in `index.html` and edit the tag, title, description, stack, and link.
- The hero "STATUS" badge currently says "ACTIVE · OPEN TO OPPORTUNITIES" — update if your availability changes.
