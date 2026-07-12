# Notemark 📝

A minimal, fast markdown note-taking app built with React. Write notes in 
markdown and see them rendered live — with search, tags, dark mode, and export.

🔗 **Live Demo:** [your-vercel-link-here]

## Features

- 📝 **Live markdown preview** — renders as you type using react-markdown + remark-gfm
- 💾 **Auto-save** — notes persist across sessions via localStorage
- 🔍 **Search** — filter notes by title in real time
- 🏷️ **Auto tags** — write #tag in your note body and tags appear automatically
- 🌙 **Dark / light mode** — theme preference saved to localStorage
- 📤 **Export** — download notes as .md files or render-accurate .pdf files
- 📐 **Math equations** — write LaTeX with $...$ syntax, rendered via KaTeX
- 💻 **Syntax highlighting** — code blocks highlighted via rehype-highlight
- 📱 **Responsive** — mobile-friendly with tab-based panel navigation

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React + Vite | UI framework and build tool |
| react-markdown | Markdown to HTML rendering |
| remark-gfm | Tables, checkboxes, strikethrough |
| remark-math + rehype-katex | Math equation rendering |
| rehype-highlight | Code syntax highlighting |
| html2pdf.js | PDF export |
| react-icons | UI icons |

---

## Getting Started

```bash
# clone the repo
git clone https://github.com/yourusername/notemark.git

# install dependencies
cd notemark
npm install

# run locally
npm run dev
```

---
