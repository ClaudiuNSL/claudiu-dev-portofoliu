# Portfolio Critical Improvements Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the portfolio professional, accessible, and performant with scroll animations, real icons, optimized images, form feedback, and WCAG accessibility.

**Architecture:** Add framer-motion for scroll animations, lucide-react for SVG icons, next/image for image optimization. Create a reusable AnimatedSection wrapper. Convert contact form to client component with JS submission + feedback. Add comprehensive ARIA attributes and keyboard navigation throughout.

**Tech Stack:** Framer Motion, Lucide React, Next.js Image component

---

### Task 1: Install dependencies

**Step 1:** Install framer-motion and lucide-react
```bash
npm install framer-motion lucide-react
```

**Step 2:** Verify installation
```bash
npm ls framer-motion lucide-react
```

---

### Task 2: Create AnimatedSection component with Framer Motion

**Files:**
- Create: `app/components/AnimatedSection.tsx`

Reusable wrapper that animates children on scroll using framer-motion's `useInView`.

---

### Task 3: Optimize profile image with next/image

**Files:**
- Modify: `app/page.tsx` (Hero section, line ~53-59)

Replace `<img>` with `<Image>` from next/image with proper width/height/alt/priority.

---

### Task 4: Replace emoji icons with Lucide SVG icons

**Files:**
- Modify: `app/page.tsx` (Services section, lines ~131-152)
- Modify: `app/page.tsx` (Projects section, lines ~173, 213, 247)
- Modify: `app/projects/page.tsx` (project data)
- Modify: `app/services/page.tsx` (service data)

Replace 💻🤖⚡🎨🌐💼🚀 with Lucide icons: Monitor, Bot, Zap, Palette, Globe, Briefcase, Rocket.

---

### Task 5: Contact form with JS submission + success/error feedback

**Files:**
- Create: `app/components/ContactForm.tsx`

Client component with useState for form status, fetch to Formspree, success/error messages with proper ARIA live regions.

---

### Task 6: Add comprehensive accessibility (a11y)

**Files:**
- Modify: `app/components/Navbar.tsx` — aria-labels, aria-expanded, role, skip-to-content link
- Modify: `app/components/Footer.tsx` — nav landmark, aria-labels
- Modify: `app/page.tsx` — section aria-labels, heading hierarchy, alt texts, focus styles
- Modify: `app/layout.tsx` — skip navigation target
- Modify: `app/globals.css` — focus-visible styles, reduced-motion media query

---

### Task 7: Apply scroll animations to all sections

**Files:**
- Modify: `app/page.tsx` — wrap each section content with AnimatedSection

---

### Task 8: Create custom 404 page

**Files:**
- Create: `app/not-found.tsx`

---

### Task 9: Add prefers-reduced-motion support

**Files:**
- Modify: `app/globals.css` — `@media (prefers-reduced-motion: reduce)` to disable animations
- Modify: `app/components/AnimatedSection.tsx` — respect reduced motion preference
