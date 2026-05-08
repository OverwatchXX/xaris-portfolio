<<<<<<< HEAD
# ✨ Xaris Joy Tabayag — Portfolio

A premium, ocean-neon inspired personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Add your portrait image
Replace `public/portrait.jpg` with your actual photo. The image in the hero section works best as a **square or portrait orientation (1:1 or 4:5)** photo.

```
public/
  portrait.jpg   ← Replace this with your actual photo
  resume.pdf     ← Add your CV here
```

### 3. Run the dev server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, glassmorphism, animations
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Page entry point
├── components/
│   ├── Navbar.tsx           # Sticky glassmorphism nav with active highlighting
│   ├── Hero.tsx             # Cinematic hero with portrait + floating elements
│   ├── About.tsx            # About, education, orgs
│   ├── Projects.tsx         # Project cards with GitHub links
│   ├── Skills.tsx           # Categorized skills with animated bars
│   ├── Experience.tsx       # Alternating timeline
│   └── Contact.tsx          # Contact form + footer
├── public/
│   ├── portrait.jpg         # ← YOUR PHOTO HERE
│   └── resume.pdf           # ← YOUR RESUME HERE
├── tailwind.config.ts       # Custom theme: palette, animations, utilities
├── next.config.ts
└── package.json
```

---

## 🎨 Color Palette

| Name       | Hex       |
|------------|-----------|
| Phlox      | `#CAA9F3` |
| Verbena    | `#B37AD4` |
| Periwinkle | `#7997E6` |
| Atlantis   | `#206ABC` |
| Phthalo    | `#0E155E` |
| Deep Space | `#060914` |

---

## ✏️ Customization

### Update personal info
Edit the data arrays in each component:
- **Hero**: Name, subtitle, intro text — `components/Hero.tsx`
- **About**: Bio text, orgs list — `components/About.tsx`
- **Projects**: Add/edit projects in `projectsData` — `components/Projects.tsx`
- **Skills**: Adjust skill levels and categories — `components/Skills.tsx`
- **Experience**: Timeline entries — `components/Experience.tsx`
- **Contact**: Email, social links — `components/Contact.tsx`

### Wire up the contact form
In `components/Contact.tsx`, the `handleSubmit` function has a placeholder. Replace it with:

**Option A: Formspree (easiest)**
```bash
npm install @formspree/react
```
```tsx
// components/Contact.tsx
import { useForm } from '@formspree/react';
// Replace handleSubmit with Formspree's useForm hook
```

**Option B: Resend API**
Create `app/api/contact/route.ts` and use the Resend SDK.

---

## ☁️ Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live 🎉

### Environment Variables (if using contact form API)
Add in Vercel Dashboard → Settings → Environment Variables:
```
RESEND_API_KEY=your_key_here
```

---

## 📦 Dependencies

| Package         | Purpose                          |
|-----------------|----------------------------------|
| `next`          | React framework                  |
| `framer-motion` | Animations & transitions         |
| `lucide-react`  | Icon library                     |
| `tailwindcss`   | Utility-first CSS                |
| `clsx`          | Conditional classnames           |

---

## 💡 Tips

- **Portrait image**: For best results, use a square crop with the subject centered. The component uses `object-top` to show the face.
- **Resume**: Name your CV file `resume.pdf` and place it in `/public/`
- **Custom domain**: Add in Vercel → Settings → Domains

---

Made with 💜 for Xaris Joy Tabayag's portfolio
=======
# xaris-portfolio
Personal portfolio repository showcasing my projects, skills, experiences, certifications, leadership roles, and creative works as a Computer Science student and developer. Built as a central hub for my journey in software development, UI/UX, research, and tech community involvement.
>>>>>>> 0d12d8324844b6eaeb19edf07f5a55944948c817
