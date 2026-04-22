# Njogu Michael — Portfolio

A dual-track personal portfolio showcasing work in **Software Engineering** and **Wellness Systems Design**.

🌐 Live Site: https://njogumichael.co.ke


## Overview

This portfolio is designed as a **mode-based experience**, allowing visitors to explore two distinct but connected domains:

- **Tech Mode** — Full-stack engineering, system design, and scalable applications  
- **Wellness Mode** — Performance training, corporate wellness, and human performance development.

The goal is not just to display projects, but to communicate:

- Thinking  
- Execution  
- Results  

---

## Tech Stack

### Frontend
- Javascript
- React (Vite)
- TypeScript
- Custom CSS (component-structured)

### Deployment & Infrastructure
- Cloudflare (CDN + hosting)
- Domain: njogumichael.co.ke

---

## Features

- Mode-based UI (Tech ↔ Wellness)
- Responsive, mobile-first layout
- Modular component architecture
- Dynamic content rendering via structured data
- Modal-based interaction (contact flow)
- Scroll-based navbar state transitions

---

## Project Structure

src
├── App.tsx
├── assets
├── components
│   ├── common
│   │   └── EmailModal.tsx
│   ├── home
│   │   ├── AboutSection.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── FeaturedCards.tsx
│   │   ├── Hero.tsx
│   │   └── StatsBar.tsx
│   ├── landing_page
│   │   ├── LandingPageCards.tsx
│   │   └── LandingPageHero.tsx
│   └── layout
│       ├── Footer.tsx
│       └── Navbar.tsx
├── data
│   └── portfolioData.ts
├── main.tsx
├── pages
│   ├── LandingPage.tsx
│   └── Portfolio.tsx
├── styles
├── types
└── utils
    └── portfolioPath.ts


---

## Design Approach

This portfolio prioritizes:

- **Clarity of identity** — separating technical and wellness audiences  
- **Minimalism with depth** — clean UI backed by structured content  
- **Scalability** — content-driven design using reusable data structures  
- **User flow** — guided navigation rather than overwhelming options  

---

## Architecture Notes

The application uses a **content-driven approach**, where the UI is powered by structured data (`portfolioData.ts`).  
This allows:

- Easy extension into route-based rendering (`/tech`, `/wellness`)
- Consistent UI patterns across sections
- Separation of content from presentation logic

---

## Current Limitations / Roadmap

Planned improvements:

- [ ] Route-based separation (`/tech` and `/wellness`)
- [ ] Dedicated case study pages for projects  
- [ ] Improved SEO (meta tags, Open Graph, structured data)  
- [ ] Accessibility enhancements (focus trapping, keyboard navigation)  
- [ ] Refactored styling architecture (CSS modules or scoped styles)  
- [ ] Stronger CTA linking (real project links and flows)  

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/NjoguMike/my-portfolio.git

# Navigate into the project
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev