# Portfolio Redesign — Comsa Claudiu

## Overview
Complete redesign of claudiu.dev portfolio from black & gold dark theme to a modern, professional bej/cream + verde-lime theme inspired by the Juda Business Agency template.

## Visual Theme
- **Background:** Bej/cream (#F5F0E8)
- **Accent:** Verde-lime (#C4E532) on buttons, highlights, hover states
- **Text:** Black/dark gray for headings, gray for body
- **Cards:** White with subtle border and soft shadow
- **Typography:** Modern sans-serif (Inter/Geist), large bold headings
- **Logo:** "CC" premium styled — elegant serif font with verde-lime accent

## Architecture: Hybrid (Single Page + Dedicated Pages)

### Homepage (/)
Single page with smooth scroll sections:

1. **Navbar** — "CC" logo left, links (Home, About, Services, Projects, Contact), CTA button "Get in Touch" verde-lime
2. **Hero** — Large bold title, subtitle, 2 buttons (View Projects + Contact Me), stats (50+ Projects, 3+ Years), large image right side
3. **About** — Profile photo, personal story, skills with progress bars
4. **Services Preview** — 3-4 cards with icons (Web Development, AI Integration, Custom Solutions) + "View All Services" link
5. **Projects Preview** — 3 image cards with overlay + "View All Projects" link
6. **Testimonials** — Client review slider
7. **Contact** — Form (Formspree), contact details, Google Maps embed (Constanta)
8. **Footer** — Logo, quick links, social media, copyright

### Services Page (/services)
- Detailed service descriptions
- Pricing guidance
- CTAs per service

### Projects Page (/projects)
- Full project grid with filters
- Project details

## SEO Strategy
- Meta tags + Open Graph + Twitter Cards per page
- JSON-LD Schema (Person + LocalBusiness)
- Sitemap.xml + robots.txt
- Semantic HTML (header, main, section, article, footer)
- Target keywords: "web developer Romania", "programator Constanta", "creare site-uri web", "freelancer React Next.js"

## Map
- Google Maps iframe embed centered on Constanta in Contact section

## Tech Stack
- Next.js 16 (existing)
- React 19 (existing)
- Tailwind CSS 4 (existing)
- TypeScript (existing)
- Formspree (existing contact form integration)

## Contact Info (existing)
- Email: claudiucomsa29@gmail.com
- Phone: 0761 880 406
- Location: Constanta, Romania
- GitHub + LinkedIn (existing links)
