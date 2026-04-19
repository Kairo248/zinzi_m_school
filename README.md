# Zinzi Mboniswa Portfolio

A clean, modern static portfolio website built with vanilla HTML, CSS, and JavaScript.

## Why vanilla is recommended
- Simple and fast for a school project
- Easy to maintain and update
- Ready to deploy as a static site
- No build step required

## Files
- `index.html` — main portfolio page
- `styles.css` — layout, styling, and visual theme
- `script.js` — scroll reveal animations

## Media
- Gallery images and hero photo live in `media/`.
- The presentation video is tracked with **Git LFS** (large file). Install [Git LFS](https://git-lfs.com/) before cloning or pushing so the `.mp4` is handled correctly.

## Deploy to GitHub, then Vercel

### 1. Create a GitHub repository
1. On GitHub: **New repository** → name it (e.g. `zinzi-mboniswa`) → leave it empty (no README) → **Create repository**.

### 2. Push this project from your machine
In this folder, run (replace `YOUR_USER` and `YOUR_REPO`):

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

If Git asks for credentials, use a [Personal Access Token](https://github.com/settings/tokens) as the password, or sign in with GitHub Desktop / SSH.

### 3. Connect Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New…** → **Project** → **Import** your repository.
3. Framework preset: **Other** (or **Vite** is fine; there is no build step).
4. **Root directory:** `.` (repository root, where `index.html` is).
5. **Build Command:** leave empty. **Output directory:** leave default / `.`
6. **Deploy.**

Vercel will serve `index.html` at the root URL. Git LFS files are fetched during Vercel’s build when supported; if the video ever fails to load after deploy, open the project **Settings → Git** and ensure LFS is enabled, or add an **Install Command** of `git lfs pull` if your plan requires it.

### Local preview (optional)
Use any static server from this directory, for example:

```bash
npx serve .
```
