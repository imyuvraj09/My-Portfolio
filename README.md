# Yuvraj Singh | Portfolio

## AI, Machine Learning & Software Development

Explore my projects, research experience, education, and the technologies I work with.

![React](https://img.shields.io/badge/React-18.3.1-149ECA?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/Styling-CSS3-663399?style=flat&logo=css&logoColor=white)
![ESLint](https://img.shields.io/badge/Code_Quality-ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)

[Getting Started](#getting-started) · [Tech Stack](#tech-stack) · [Projects](#featured-projects) · [Customization](#customization) · [Deployment](#deployment) · [Contact](#contact)

---

## Overview

My personal portfolio brings together my work in artificial intelligence, computer vision, and software development.

I’m a Computer Science undergraduate specializing in AI & ML at **MCKV Institute of Engineering**, graduating in **2027**. I qualified **GATE CS-IT 2026** and hold a **9.62/10 CGPA**.

My experience includes research at **IISc Bengaluru**, building an AI tutor for limited-connectivity environments, and developing a RAG-based assistant for Indian legal information.

## Features

- **Responsive design** — layouts for desktop, tablet, and mobile.
- **Theme switching** — dark and light modes with saved preferences.
- **About Me** — background, interests, and career direction.
- **Education & Experience** — academic qualifications and internships.
- **Projects** — descriptions, screenshots, technologies, and available live demos.
- **Technical Skills** — a visual grid of tools and technologies.
- **Achievements** — academic milestones, research fellowship, and community involvement.
- **Contact** — social profiles, résumé access, and a contact form.
- **Accessibility** — keyboard focus indicators, labeled controls, and reduced-motion support.

> Email delivery requires a configured contact endpoint. The frontend alone cannot deliver form submissions.

## Tech Stack

<p>
  <img src="https://skillicons.dev/icons?i=react,ts,vite,html,css,git,github,npm&perline=8" alt="React, TypeScript, Vite, HTML, CSS, Git, GitHub, and npm" />
</p>

| Technology | Role |
|---|---|
| ⚛️ **React 18** | Component-based user interface |
| 🔷 **TypeScript 5** | Static typing and development checks |
| ⚡ **Vite 5** | Development server and production bundling |
| 🌐 **HTML5** | Page structure and semantic elements |
| 🎨 **CSS3** | Responsive layouts, styling, and themes |
| 🧩 **React Icons** | Social, technology, and interface icons |
| ✅ **ESLint** | Code-quality checks |
| 📦 **npm** | Dependency management and project scripts |
| 🌿 **Git & GitHub** | Version control and source hosting |
| 💾 **localStorage** | Persisting the selected theme |
| 🔗 **Fetch API** | Contact-endpoint requests |

The technologies displayed in the website’s skills section describe my broader technical background. They are not all dependencies of this portfolio.

## Project Structure

The full development project uses the following structure:

```text
portfolio/
├── public/
│   ├── images/                  # Profile and project images
│   └── resume.pdf               # Downloadable résumé
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Education.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx
│   │   ├── Navbar.tsx
│   │   ├── SocialIcons.tsx
│   │   ├── TechStack.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── WhatsAppWidget.tsx
│   │   ├── Work.tsx
│   │   └── WorkImage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

A production build generates the deployable website in `dist/`.

> The frontend-only archive omits package manifests and build configuration. See [Running the Frontend-Only Version](#running-the-frontend-only-version) if those files are missing.

## Getting Started

### Prerequisites

Install:

- **Node.js 22 LTS**
- **npm**
- **Git**, if cloning the repository

Check the installed versions:

```bash
node --version
npm --version
git --version
```

### 1. Download the project

```bash
git clone https://github.com/imyuvraj09/yuvraj-portfolio.git
cd yuvraj-portfolio
```

Alternatively, download the repository ZIP, extract it, and open a terminal in the folder containing `package.json`.

### 2. Install dependencies

When `package-lock.json` is available:

```bash
npm ci
```

If only `package.json` is available:

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the URL printed in the terminal, usually:

```text
http://localhost:5173
```

Vite updates the page automatically as source files change.

### 4. Run lint checks

```bash
npm run lint
```

### 5. Build for production

```bash
npm run build
```

This runs the configured TypeScript checks and generates production assets inside `dist/`.

### 6. Preview the production build

```bash
npm run preview
```

Open the URL printed in the terminal, usually:

```text
http://localhost:4173
```

The preview server is intended for local verification, not permanent production hosting.

## Available Commands

| Command | Purpose |
|---|---|
| `npm ci` | Install the dependency versions recorded in the lockfile |
| `npm run dev` | Start the development server |
| `npm run lint` | Check source code with ESLint |
| `npm run build` | Check TypeScript and generate the production build |
| `npm run preview` | Preview the production build locally |

## Running the Frontend-Only Version

The frontend-only archive contains the prebuilt website in `dist/`. It can be served without Node.js or npm.

Install **Python 3**, then run one of the following commands from the extracted project folder.

### Windows

```bash
py -m http.server 8000 --directory dist
```

### macOS / Linux

```bash
python3 -m http.server 8000 --directory dist
```

Open:

```text
http://localhost:8000
```

Do not open `dist/index.html` directly using a `file://` URL.

**Important:** Editing `src/` does not update the prebuilt website. Restore the original package manifests and configuration, then rebuild to apply source changes.

## Contact Form Setup

The contact form uses a configurable endpoint:

```env
VITE_CONTACT_ENDPOINT=
```

### Enable message delivery

1. Configure a form service or backend endpoint.
2. Create `.env.local` in the full project’s root directory.
3. Add your endpoint:

```env
VITE_CONTACT_ENDPOINT=https://your-form-service.example/your-endpoint
```

4. Replace the example URL with the real endpoint.
5. Restart the development server.
6. Submit a test message and confirm receipt.

The endpoint receives JSON in this format:

```json
{
  "name": "Visitor name",
  "email": "visitor@example.com",
  "message": "Message content"
}
```

### Configuration notes

- `VITE_` environment variables are exposed to the browser.
- Never place private API keys, SMTP passwords, or email credentials in frontend code.
- Keep private credentials in a backend or the form provider’s configuration.
- The endpoint must accept requests from the website’s origin.
- A custom backend should validate submissions and provide spam protection.
- Rebuild and redeploy after changing production environment variables.
- No custom backend implementation is included in this portfolio.

The form should report success only after receiving a successful response from its configured service.

## Customization

| Content | File or directory |
|---|---|
| Introduction | `src/components/Landing.tsx` |
| About Me | `src/components/About.tsx` |
| Education | `src/components/Education.tsx` |
| Experience | `src/components/Career.tsx` |
| Projects | `src/components/Work.tsx` |
| Technical skills | `src/components/TechStack.tsx` |
| Achievements | `src/components/Achievements.tsx` |
| Navigation | `src/components/Navbar.tsx` |
| Social links | `src/components/SocialIcons.tsx` |
| Contact information | `src/components/Contact.tsx` |
| Contact form | `src/components/ContactForm.tsx` |
| Theme toggle | `src/components/ThemeToggle.tsx` |
| Global styles | `src/index.css` |
| Résumé | `public/resume.pdf` |
| Images | `public/images/` |

### Update the résumé

Replace:

```text
public/resume.pdf
```

Keep the filename unchanged unless you also update the corresponding links.

### Update project screenshots

Place screenshots in:

```text
public/images/
```

Reference them using paths such as:

```text
/images/project-preview.webp
```

Use appropriately sized, compressed images to reduce download time.

### Add a live project URL

Update the relevant project’s `liveUrl` field in `Work.tsx`.

Keep the value empty when no live demo is available. Avoid using dummy URLs as clickable destinations.

### Update themes

Edit the existing theme variables in `src/index.css`.

Check changes in both themes, including text contrast, borders, icons, buttons, and form fields.

## Deployment

### Deploy from source

For a static host with build support:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variables | Configure as required before building |

The repository must contain its package files and build configuration for this approach.

### Deploy a prebuilt website

Upload the **contents of `dist/`** to the host’s public web root.

The deployed root should contain:

```text
index.html
assets/
images/
resume.pdf
```

Do not use the source project’s root `index.html` as a substitute for the generated `dist/index.html`.

### Subdirectory hosting

The existing asset paths assume the website is hosted at the domain root.

For a deployment under a path such as `/portfolio/`, update Vite’s `base` setting and any root-relative asset links, then rebuild.

## Performance & Accessibility

The portfolio uses:

- Production-minified JavaScript and CSS
- Lazy-loaded project screenshots
- Reserved image dimensions
- Native anchor navigation
- Lightweight CSS layouts
- Keyboard focus indicators
- Accessible labels for icon links and form controls
- Reduced-motion support

The website does not depend on decorative WebGL scenes or physics simulations.

Actual performance depends on the hosting environment, network connection, assets, and visitor’s device.

## Troubleshooting

### `package.json` is missing

You may be using the frontend-only archive.

Use the Python static-server instructions to view `dist/`, or restore the full development files to run npm commands.

### The page is blank

- Serve the site over HTTP rather than opening the HTML file directly.
- Check the browser console for JavaScript errors.
- Confirm that the CSS and JavaScript files referenced by `index.html` exist.
- Ensure your host serves the contents of `dist/`.

### Images or the résumé do not load

Check filenames, paths, and capitalization. Production hosts may treat uppercase and lowercase filenames differently.

### Updates are not appearing

Rebuild:

```bash
npm run build
```

Deploy the newly generated `dist/` directory.

Avoid manually editing hashed production JavaScript files when the original source is available.

### The form does not send messages

Check that:

- `VITE_CONTACT_ENDPOINT` points to a real endpoint.
- The service accepts the submitted payload.
- Requests from your website’s origin are permitted.
- Any required recipient verification is complete.
- The site was rebuilt after configuration changes.

## Contact

[![GitHub](https://img.shields.io/badge/GitHub-imyuvraj09-181717?style=flat&logo=github&logoColor=white)](https://github.com/imyuvraj09)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0000--4934--6799-A6CE39?style=flat&logo=orcid&logoColor=white)](https://orcid.org/0009-0000-4934-6799)
[![Email](https://img.shields.io/badge/Email-Contact_Me-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:yuvrajsinghias09122004@gmail.com)

## Third-Party Notices

This website uses third-party libraries and icons. Preserve their applicable license and attribution notices when distributing the project.

README badges and technology icons are served by Shields.io and Skill Icons; they are documentation assets, not application dependencies.

---

Built and maintained by **Yuvraj Singh**.
