# tomasort.github.io

Personal portfolio website built with React + Vite, deployed to GitHub Pages.

## Tech Stack

- **React 19** with React Router v6
- **Vite** (build tool, replacing Create React App)
- **SCSS** for styles
- **EmailJS** for the contact form
- **Leaflet / react-leaflet** for the interactive map
- **react-loaders** for page loader animations
- **gh-pages** for deployment

## Getting Started

### 1. Install dependencies

```bash
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` is required because `react-loaders` has outdated peer dependency declarations.

### 2. Set up environment variables

Create a `.env.local` file in the project root (it is already gitignored):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These values come from your [EmailJS](https://www.emailjs.com/) dashboard.

### 3. Run the dev server

```bash
npm start
```

Opens at [http://localhost:5173](http://localhost:5173). The page hot-reloads on changes.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the Vite dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and push to GitHub Pages |

## Deployment

See the [Deployment](#deploying-to-github-pages) section below.

## Project Structure

```
src/
  assets/          # Images, fonts, SVG icons
  components/
    About/         # About me page with rotating 3D cube
    AnimatedLetters/
    Contact/       # Contact form + Leaflet map
    Home/          # Landing page
    Layout/        # App shell with sidebar
    Logo/          # Animated SVG logo
    Projects/      # Projects page
    Sidebar/       # Navigation sidebar
  App.jsx          # Route definitions
  index.jsx        # Entry point
index.html         # Vite HTML entry (project root)
vite.config.js     # Vite config
```

## Deploying to GitHub Pages

The site deploys to `https://tomasort.github.io` via the `gh-pages` npm package.

### One-time setup

1. Make sure the `homepage` field in `package.json` is set to your GitHub Pages URL:
   ```json
   "homepage": "https://tomasort.github.io"
   ```

2. In your GitHub repository settings, go to **Settings → Pages** and set the source branch to `gh-pages`.

### Deploying

```bash
npm run deploy
```

This runs `vite build` first (via the `predeploy` hook), then pushes the `dist/` folder to the `gh-pages` branch. GitHub Pages serves that branch automatically.

> **Note:** `.env.local` is never included in the build output. Your EmailJS credentials stay local. The built JS bundle will contain the resolved values of `import.meta.env.VITE_*` — so treat them as client-side keys (EmailJS keys are designed to be used this way).
