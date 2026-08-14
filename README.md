# LIBRIS.insights 📖

Welcome to **LIBRIS.insights** — a cozy, clean, and friendly book reading, knowledge-distillation, and quote-sharing platform. 

This project is built using **Next.js 16 (App Router)** and **Fumadocs**, featuring a premium design inspired by nature, reading spaces, and active learning.

---

## ✨ Features

- **Cozy Earth & Forest Theme**: Designed with warm cream, sand, and sage-green tones to create a welcoming, soft, and readable digital bookshelf.
- **Fumadocs Documentation Engine**: Dynamic, type-safe MDX content rendering with built-in sidebar navigation, headings index, and instant headers search.
- **HTML5 Video Background**: A high-performance, looping nature scene background overlayed with a cozy readability filter.
- **Interactive Remotion Showcase**: An aspect-video card in the hero section powered by **Remotion Player** demonstrating a live, responsive particle loop.
- **Newsletter Signup**: An interactive, client-side subscription component to keep readers updated with your monthly takeaways.

---

## 🛠️ Tech Stack

- **Core**: Next.js 16 (React 19)
- **Content**: Fumadocs Core, Fumadocs UI, & Fumadocs MDX
- **Styling**: Tailwind CSS v4 & custom HSL colors
- **Animation**: Remotion & `@remotion/player`
- **Package Manager**: pnpm

---

## 🚀 Getting Started

### 1. Install Dependencies

Ensure you have `pnpm` installed, then run:

```bash
pnpm install
```

### 2. Run the Development Server

Start the local server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your cozy landing page.

---

## 📂 Project Structure

- `app/page.tsx` — The clean and friendly light-themed landing page.
- `app/components/` — Modular components including the Remotion player, video showcase, and newsletter.
- `app/docs/` — Route layout and catch-all page templates for rendering MDX documentation.
- `content/docs/` — Your markdown (`.mdx`) files (e.g. book summaries, active guides, and quotes).
- `lib/source.ts` & `source.config.ts` — Configuration for Fumadocs content collection.

---

## ✍️ Customizing Content

To add or modify book summaries:
1. Create or edit a `.mdx` file under `content/docs/`.
2. Add your frontmatter at the top:
   ```yaml
   ---
   title: Book Name
   description: Brief description or takeaway
   ---
   ```
3. Write your content. It will automatically compile and appear in your library sidebar navigation.

To customize the background video:
- Drop your own `mp4` file in the `public` folder and update the video source in `app/components/LandingBackground.tsx`.
