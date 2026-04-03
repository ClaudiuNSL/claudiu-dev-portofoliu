# Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign Comsa Claudiu's portfolio from dark black & gold theme to a modern bej/cream + verde-lime theme (Juda-inspired), with hybrid page structure and full SEO optimization.

**Architecture:** Hybrid single-page homepage with all sections + dedicated /services and /projects pages. Shared layout with premium "CC" logo navbar. SEO via Next.js metadata API, JSON-LD structured data, sitemap.xml, and robots.txt.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Formspree, Google Maps embed

---

### Task 1: Update globals.css — New Theme & Animations

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace globals.css with new bej/cream theme**

Replace the entire file with:
- Root CSS variables: `--background: #F5F0E8` (bej), `--foreground: #1a1a1a`, `--accent: #C4E532` (verde-lime), `--accent-dark: #a8c428`
- Remove dark media query (single light theme)
- Keep smooth scroll
- Update animations: remove blob/glow, add subtle fade-in, slide-up for sections
- Remove `.bg-grid-pattern-dark`, update `.bg-grid-pattern` for light theme
- Add `.animate-fade-in`, `.animate-slide-up` utility classes

**Step 2: Verify dev server loads new theme**

Run: `npm run dev`
Expected: Page loads with bej background

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: update CSS theme to bej/cream + verde-lime"
```

---

### Task 2: Update layout.tsx — SEO Metadata + Fonts

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update layout.tsx with comprehensive SEO**

- Change `lang="en"` to `lang="ro"` (primary audience Romanian)
- Add comprehensive Metadata export:
  - title template: `%s | Comsa Claudiu — Web Developer`
  - default title: `Comsa Claudiu — Web Developer & Freelancer`
  - description targeting keywords: "programator web", "web developer Romania", "creare site-uri Constanta"
  - Open Graph: title, description, url, siteName, locale "ro_RO", type "website"
  - Twitter card: "summary_large_image"
  - keywords array
  - robots: index, follow
  - alternates: canonical URL
- Add viewport meta
- Keep Geist fonts (they fit the modern look)
- Add JSON-LD script in body for Person + LocalBusiness schema

**Step 2: Verify metadata in browser dev tools**

Run: `npm run dev`, check `<head>` in browser
Expected: All meta tags present

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add comprehensive SEO metadata and JSON-LD schema"
```

---

### Task 3: Redesign Homepage — Navbar + Hero

**Files:**
- Modify: `app/page.tsx`

**Step 1: Rewrite Navbar**

- Background: white/cream with subtle border bottom
- Logo: "CC" in elegant serif style (use CSS for premium look — gradient or bordered letters), verde-lime accent
- Nav links: Home, About, Services, Projects, Contact — dark text, verde-lime hover
- CTA button: "Get in Touch" — verde-lime background (#C4E532), black text, rounded-full
- Mobile hamburger: dark icon, verde-lime menu
- Sticky with backdrop-blur

**Step 2: Rewrite Hero Section**

- Layout: 2-column grid (text left, image right) like Juda reference
- Background: bej/cream (#F5F0E8)
- Title: Large bold black text "Building Digital Solutions That Drive Results"
- Subtitle: Gray text describing services
- Stats row: "50+ Projects" | "3+ Years Experience" | "100% Dedication" — with verde-lime number accents
- Two buttons: "Read More →" (verde-lime bg) and "Learn More →" (bordered)
- Right side: Large rounded image (profil.jpg) with subtle shadow
- Remove all dark theme classes, animated blobs

**Step 3: Verify in browser**

Run: `npm run dev`
Expected: Clean bej hero with verde-lime accents, matching Juda style

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign navbar and hero section with bej/verde-lime theme"
```

---

### Task 4: Redesign Homepage — About Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Rewrite About section**

- Background: slightly different shade or white card on bej
- Layout: 2-column (image/text left, content right)
- Profile photo on one side
- "About Me" heading in large bold black
- Story text in gray
- Skills shown as tags/pills (verde-lime borders) instead of progress bars
- Stats cards: clean white cards with verde-lime number accents
- Remove all dark bg classes, yellow references

**Step 2: Verify in browser**

Expected: Clean about section, readable, professional

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign about section"
```

---

### Task 5: Redesign Homepage — Services Preview Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add Services preview section**

New section between About and Projects with:
- Section title: "Services" with subtitle
- 3-4 service cards in grid:
  1. **Web Development** — React, Next.js, modern web apps
  2. **AI Integration** — ChatGPT, AI tools, automation
  3. **Custom Solutions** — Tailored business applications
  4. **UI/UX Design** — Clean, modern interfaces
- Each card: white background, icon (SVG or emoji), title, short description, verde-lime hover effect
- "View All Services →" link at bottom pointing to /services

**Step 2: Verify in browser**

Expected: 3-4 clean service cards in grid

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add services preview section"
```

---

### Task 6: Redesign Homepage — Projects Preview Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Rewrite Projects section**

- Clean white/cream cards with image area (gradient placeholder or screenshot)
- Project title bold, description in gray
- Tech tags as verde-lime pills
- "View Live" button verde-lime, "GitHub" button bordered
- Keep existing 3 projects with same data
- "View All Projects →" link to /projects
- Remove dark theme classes

**Step 2: Verify in browser**

Expected: Clean project cards matching bej theme

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign projects section"
```

---

### Task 7: Add Testimonials Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add testimonials section**

- Section between Projects and Contact
- 2-3 testimonial cards (placeholder content — user can update later)
- Each card: quote text, client name, role/company, star rating
- Clean white cards on bej background
- Subtle verde-lime quote marks or accents

**Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add testimonials section"
```

---

### Task 8: Redesign Homepage — Contact Section + Google Maps

**Files:**
- Modify: `app/page.tsx`

**Step 1: Rewrite Contact section**

- Two-column layout: form left, info + map right
- Form: white card, clean inputs with bej/gray borders, verde-lime focus ring
- Keep Formspree action URL: `https://formspree.io/f/xkovzrpr`
- Fields: Name, Email, Subject, Message (keep same names for Formspree)
- Submit button: verde-lime
- Contact info cards: Email, Phone, Location — clean with icons
- Social links: GitHub, LinkedIn
- Google Maps iframe embed:
  ```html
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89717.47034519996!2d28.5831228!3d44.1598013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bae0ba0a462f71%3A0x5765bc591a20fdd6!2sConstan%C8%9Ba!5e0!3m2!1sen!2sro!4v1" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  ```

**Step 2: Verify map loads and form submits**

Expected: Map shows Constanța, form submits to Formspree

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign contact section with Google Maps"
```

---

### Task 9: Redesign Footer

**Files:**
- Modify: `app/page.tsx`

**Step 1: Rewrite Footer**

- Background: dark (black or very dark gray) for contrast with bej body
- Logo "CC" repeated
- Quick links: Home, About, Services, Projects, Contact
- Social links: GitHub, LinkedIn, Email
- Copyright: © 2026 Comsa Claudiu. All rights reserved.
- Clean, minimal design

**Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign footer"
```

---

### Task 10: Create /services Page

**Files:**
- Create: `app/services/page.tsx`

**Step 1: Create dedicated services page**

- Export metadata for SEO (title, description targeting "servicii web development", "creare site-uri")
- Reuse navbar and footer from homepage (extract as components if needed)
- Detailed service cards with:
  - Full description per service
  - What's included lists
  - CTA buttons linking to contact
- Breadcrumb navigation

**Step 2: Verify page loads at /services**

Run: `npm run dev`, navigate to `/services`
Expected: Full services page renders

**Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add dedicated services page"
```

---

### Task 11: Create /projects Page

**Files:**
- Create: `app/projects/page.tsx`

**Step 1: Create dedicated projects page**

- Export metadata for SEO (title, description targeting "portofoliu web developer")
- Full project grid with all 3 projects
- More detailed descriptions than homepage preview
- Tech stack details per project
- Links to live sites and GitHub

**Step 2: Verify page loads at /projects**

Run: `npm run dev`, navigate to `/projects`
Expected: Full projects page renders

**Step 3: Commit**

```bash
git add app/projects/page.tsx
git commit -m "feat: add dedicated projects page"
```

---

### Task 12: Extract Shared Components (Navbar + Footer)

**Files:**
- Create: `app/components/Navbar.tsx`
- Create: `app/components/Footer.tsx`
- Modify: `app/page.tsx`
- Modify: `app/services/page.tsx`
- Modify: `app/projects/page.tsx`

**Step 1: Extract Navbar and Footer into reusable components**

Move navbar and footer JSX from page.tsx into separate client components. Import and use in all 3 pages.

**Step 2: Verify all pages still work**

Navigate between /, /services, /projects — all should render navbar and footer correctly.

**Step 3: Commit**

```bash
git add app/components/Navbar.tsx app/components/Footer.tsx app/page.tsx app/services/page.tsx app/projects/page.tsx
git commit -m "refactor: extract Navbar and Footer into shared components"
```

---

### Task 13: Add sitemap.xml + robots.txt

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

**Step 1: Create Next.js sitemap generator**

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://claudiu.dev'
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]
}
```

**Step 2: Create robots.txt**

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://claudiu.dev/sitemap.xml',
  }
}
```

**Step 3: Verify**

Run: `npm run dev`, check `/sitemap.xml` and `/robots.txt`
Expected: Both files generated correctly

**Step 4: Commit**

```bash
git add app/sitemap.ts app/robots.ts
git commit -m "feat: add sitemap.xml and robots.txt for SEO"
```

---

### Task 14: Build & Final Verification

**Step 1: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 2: Run production server and verify all pages**

Run: `npm run start`
Check: /, /services, /projects — all render correctly
Check: Meta tags in page source
Check: Google Maps loads
Check: Contact form works
Check: Mobile responsive

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio redesign — bej/verde-lime theme with SEO"
```
