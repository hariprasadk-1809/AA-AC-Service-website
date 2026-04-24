# AA AC Service — Website

Professional commercial AC repair & maintenance website built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Quick Start

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Start development server
```bash
npm run dev
```

### Step 3 — Open in browser
```
http://localhost:3000
```

---

## VS Code Extensions (Install These First)

Search in Extensions panel (Ctrl+Shift+X):

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **TypeScript Importer**
4. **Prettier - Code Formatter**
5. **ESLint**
6. **Auto Rename Tag**
7. **Path Intellisense**
8. **GitLens**

---

## Before Going Live — Replace These

### 1. Logo images (put your actual logo files here)
```
public/logo/logo-full.png      ← Full horizontal logo
public/logo/logo-white.png     ← White version for dark backgrounds
public/logo/logo-icon.png      ← Icon only (512x512)
public/favicon.ico             ← Browser favicon
```

### 2. Hero background image
```
public/images/hero-bg.jpg      ← Commercial AC / mall interior photo
```

### 3. Phone & contact (already set in .env.local)
```
NEXT_PUBLIC_PHONE=+919956433497
NEXT_PUBLIC_WHATSAPP=918124000494
NEXT_PUBLIC_EMAIL=aaaservice26@gmail.com
```

---

## Deploy to Vercel

```bash
# Step 1 — Build locally to verify no errors
npm run build

# Step 2 — Push to GitHub
git init
git add .
git commit -m "initial production build"
git remote add origin https://github.com/YOURUSERNAME/aa-ac-service.git
git push -u origin main

# Step 3 — Go to vercel.com
# Click: Add New Project → Import your GitHub repo
# Framework: Next.js (auto-detected)
# Add environment variables from .env.local
# Click Deploy
```

---

## Project Structure

```
src/
├── app/              → Next.js App Router pages
├── components/
│   ├── ui/           → Button, Card, Input, Modal, Badge, Skeleton
│   ├── layout/       → Navbar, Footer, Section, PageWrapper
│   └── sections/     → Hero, Services, FAQ, Contact, WhatsAppFAB...
├── features/
│   ├── booking/      → 3-step booking form, store, validation
│   ├── services/     → Service cards, modal, data
│   └── technicians/  → Technician profiles
├── hooks/            → useScrollPosition, useMediaQuery, useToast
├── lib/              → API client, utils, constants
├── providers/        → QueryProvider, ToastProvider
└── types/            → Global TypeScript types
```

---

## Brand Colors

| Token          | Hex       | Usage                    |
|----------------|-----------|--------------------------|
| `--aa-dark`    | `#0A2560` | Navbar, footer           |
| `--aa-dark2`   | `#0F3C87` | Section backgrounds      |
| `--aa-accent`  | `#1E87D2` | Links, icons, CTAs       |
| `--aa-light`   | `#EBF4FF` | Alternate section BGs    |
| `--aa-offwhite`| `#F7FAFF` | Card backgrounds         |

---

Built for AA AC Service · Chennai · 2025
