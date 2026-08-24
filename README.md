# 🚀 Interactive 3D Personal Portfolio

A personal portfolio web application built with **React**, **TypeScript**, **Tailwind CSS**, **Three.js / React Three Fiber**, and **Framer Motion**.

---

## ✨ Features

- **🌐 Interactive 3D WebGL Canvas**: Morphing liquid cyber-sphere and orbiting particle galaxy with dynamic cursor lighting.
- **🌌 Ambient Particle Constellation**: Responsive background particle wave with mouse repulsion.
- **✨ 3D Tilt Cards with Dynamic Glare**: Interactive cards with realistic depth and specular reflections.
- **🎭 Smooth Framer Motion Animations**: Scroll-triggered section reveals, spring tabs, and layout morphs.
- **📱 Fully Responsive**: Optimized across all viewports from mobile devices to ultra-wide 4K monitors.
- **🔍 Project Inspection Modal**: Detailed view for featured works with key performance metrics, architecture breakdown, and live preview links.
- **📬 Interactive Contact Form**: Client-side validation, confetti celebration on submission, and 1-click clipboard email copy.
- **⚙️ Centralized Data File**: Update all your personal info, projects, skills, and experience by simply editing `src/data/portfolioData.ts`.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

---

## ✏️ Personalizing Your Portfolio

All content is structured inside a single configuration file:
👉 **[`src/data/portfolioData.ts`](src/data/portfolioData.ts)**

You can easily change:
- **Personal Info**: Name, animated typewriter titles, avatar image, bio paragraphs, social links, location.
- **Skills**: Add or modify skills, categories, colors, and proficiency percentages.
- **Projects**: Update titles, descriptions, live demo URLs, GitHub repositories, screenshots, and engineering highlights.
- **Experience**: Add work history, education milestones, dates, and achievements.
- **Testimonials**: Add client endorsements and star ratings.

---

## 🚢 Deployment

You can deploy this project instantly with zero configuration on:
- **Vercel**: `npx vercel`
- **Netlify**: Connect your GitHub repo and set build command to `npm run build` with publish directory `dist`.
- **GitHub Pages**: Build the project and deploy the `dist` folder.
