# Shiel Yule — AI Delivery Manager & Portfolio

A personal website, portfolio gallery, work history timeline, and contact telemetry system built for **Shiel Yule** (AI Delivery Manager specializing in Copilot Studio, Azure AI Foundry, Purview, and Governed AI products).

Designed with a **1970s retro space aesthetic**, clean Swiss-inspired typography, and a muted earth-and-orbit color palette.

---

## 🛰️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + 70s NASA & Swiss typographical system
- **Icons**: Lucide React
- **Audio Synthesizer**: Web Audio API (tactile analog 70s telemetry chirps)
- **Deployment**: Compatible with Vercel, GitHub Pages, Cloud Run, Netlify

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open `http://localhost:3000` (or the port Vite outputs) in your browser.

### 3. Build for production
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

---

## 📦 Pushing to GitHub (`github.com/shielyule/ShielYule`)

The local git repository is already initialized on branch `main` with `origin` pointing to:
`https://github.com/shielyule/ShielYule.git`

To push all commits to your GitHub repo:
```bash
git push -u origin main
```
*(If pushing with a Personal Access Token or SSH key, authenticate when prompted).*

---

## ⚡ Hosting on Cloudflare Pages (Direct GitHub Integration)

Cloudflare Pages connects directly to your GitHub repository and automatically builds and deploys on every push—exactly like Railway and Vercel.

### Step 1: Connect Cloudflare Pages to GitHub
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left sidebar, navigate to **Compute (Workers & Pages)** &rarr; **Pages** (or **Workers & Pages** &rarr; **Create** &rarr; **Pages**).
3. Select **Connect to Git**.
4. Authorize Cloudflare to access your GitHub account and choose the **`ShielYule`** repository.
5. In the Build Configuration screen, configure:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18 or 20 (default)
6. Click **Save and Deploy**. Cloudflare will build the site in ~30 seconds and give you a live `*.pages.dev` URL with free global edge CDN and automatic SSL.

---

## 🌐 Custom Domain via Cloudflare Registrar

Since you already use Cloudflare:
1. **Register Domain**: Go to Cloudflare Dashboard &rarr; **Domain Registration** &rarr; **Register Domains**. Search and purchase your chosen domain (Cloudflare sells domains at wholesale zero-markup cost).
2. **Bind to Cloudflare Pages**:
   - Go to your Cloudflare Pages project &rarr; **Custom domains** tab.
   - Click **Set up a custom domain**.
   - Type your domain (e.g. `shielyule.com` or `shielyule.co.uk`).
   - Cloudflare will automatically configure the CNAME and DNS records for you with 1 click.
   - SSL/TLS certificate is provisioned automatically with HTTP/3 and edge caching enabled.

## 📄 License
Created for Shiel Yule.
