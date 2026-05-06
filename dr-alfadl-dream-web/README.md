# Dr. Alfadl Digestive & Laser Proctology Center
### مركز د. الفضل للجهاز الهضمي وجراحة المستقيم بالليزر

A premium bilingual (Arabic/English) medical website built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Saudi-market ready with RTL/LTR language switching.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + Custom Design System |
| UI Components | Radix UI / shadcn/ui primitives |
| Animations | Framer Motion 11 |
| Forms | React Hook Form + Zod validation |
| Fonts | Inter (EN) · Tajawal (AR) · Playfair Display (headings) |
| i18n | Custom context-based RTL/LTR switcher |

---

## Features

### Pages
| Route | Page |
|---|---|
| `/en` or `/ar` | Premium homepage with all sections |
| `/[locale]/about` | Doctor profile with career timeline |
| `/[locale]/services` | Full services listing |
| `/[locale]/treatments` | Laser proctology + endoscopy detail |
| `/[locale]/store` | Digital health products store |
| `/[locale]/ai-tools` | AI tools with live symptom checker demo |
| `/[locale]/blog` | Article grid with search + category filter |
| `/[locale]/booking` | Appointment booking form |
| `/[locale]/privacy` | Privacy policy |
| `/[locale]/terms` | Terms of service |
| `/[locale]/disclaimer` | Medical disclaimer |

### Homepage Sections
- **Hero** — Full-screen with animated stats, dual CTAs, scroll indicator
- **Services** — 8-card interactive grid (hover reveals navy gradient)
- **Stats** — Live count-up animation bar
- **Laser Proctology** — Feature section with tech comparison card
- **Endoscopy** — Split layout with live scope visualization
- **Doctor Profile** — Card + timeline + credentials
- **Digital Store** — 5 product cards with SAR pricing
- **AI Tools** — 5 tool cards (2 live, 3 coming soon)
- **Blog** — 6 article cards with category tags
- **WhatsApp CTA** — Floating button + banner section
- **Booking Form** — Full validated form with working-hours info

### Design System
- **Colors:** Navy (`#0A1628` → `#243B55`) · Gold (`#C9A84C` → `#F0C040`) · Cream
- **Typography:** Display headings (Playfair EN / Tajawal AR) + Inter body
- **Effects:** Glass morphism · Noise texture overlays · Radial ambient orbs · Gold gradients
- **Animations:** Page-load fade-up · Scroll-triggered reveals · Hover lift · Count-up · Floating badges
- **Layout:** Mobile-first, fully responsive (xs → 2xl breakpoints)

### Bilingual System
- URL-based locale: `/en/*` and `/ar/*`
- Full RTL layout for Arabic via `dir="rtl"` on `<html>`
- Arabic font (Tajawal) auto-applied in RTL mode
- All 800+ strings translated across both languages
- Language switcher in header and mobile menu

### Payment Placeholders
- Moyasar · HyperPay · Apple Pay · Mada
- Displayed as accepted payment badges in the store

---

## Getting Started

### Prerequisites
- Node.js 18.17+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone or extract the project
cd dr-alfadl-dream-web

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — auto-redirects to `/en`.

To view Arabic version: [http://localhost:3000/ar](http://localhost:3000/ar)

### Production Build

```bash
npm run build
npm run start
```

### Type Checking

```bash
npm run type-check
```

---

## Project Structure

```
dr-alfadl-dream-web/
├── app/
│   ├── layout.tsx                  # Root layout (metadata)
│   ├── page.tsx                    # Redirects / → /en
│   ├── globals.css                 # Global styles + Tailwind
│   └── [locale]/
│       ├── layout.tsx              # Locale layout (html dir, fonts, I18nProvider)
│       ├── page.tsx                # Homepage
│       ├── about/page.tsx
│       ├── services/page.tsx
│       ├── treatments/page.tsx
│       ├── store/page.tsx
│       ├── ai-tools/page.tsx
│       ├── blog/page.tsx
│       ├── booking/page.tsx
│       ├── privacy/page.tsx
│       ├── terms/page.tsx
│       └── disclaimer/page.tsx
│
├── components/
│   ├── providers/
│   │   └── I18nProvider.tsx        # Context + locale state
│   ├── layout/
│   │   ├── Header.tsx              # Sticky nav with dropdown + mobile menu
│   │   └── Footer.tsx              # 4-column footer
│   ├── sections/                   # Homepage sections (reused across pages)
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── LaserProctology.tsx
│   │   ├── Endoscopy.tsx
│   │   ├── DoctorProfile.tsx
│   │   ├── DigitalProducts.tsx
│   │   ├── AITools.tsx
│   │   ├── Blog.tsx
│   │   ├── BookingForm.tsx
│   │   └── WhatsAppCTA.tsx
│   ├── pages/                      # Page-specific content components
│   │   ├── AboutContent.tsx
│   │   ├── ServicesContent.tsx
│   │   ├── TreatmentsContent.tsx
│   │   ├── StoreContent.tsx
│   │   ├── AIToolsContent.tsx
│   │   ├── BlogContent.tsx
│   │   ├── LegalPage.tsx           # Shared legal template
│   │   ├── PrivacyContent.tsx
│   │   ├── TermsContent.tsx
│   │   └── DisclaimerContent.tsx
│   └── common/
│       ├── SectionHeader.tsx       # Animated badge + title + divider
│       └── AnimatedCard.tsx        # Scroll-triggered animated wrapper
│
├── lib/
│   ├── i18n.ts                     # I18n context + useI18n hook
│   ├── translations.ts             # All EN + AR strings (~800 keys)
│   └── utils.ts                    # cn(), formatPrice()
│
├── types/
│   └── index.ts                    # TypeScript interfaces
│
├── public/
│   └── images/                     # Place doctor photos here
│
├── tailwind.config.ts              # Custom colors, fonts, animations
├── next.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## Customization Guide

### 1. Doctor Phone Number
Find and replace `966500000000` across:
- `components/layout/Header.tsx`
- `components/sections/BookingForm.tsx`
- `components/sections/WhatsAppCTA.tsx`
- `components/layout/Footer.tsx`

### 2. Doctor Photo
Place image at `public/images/dr-alfadl.jpg` and replace the initials placeholder in `components/sections/DoctorProfile.tsx` with:
```tsx
import Image from "next/image";
// Replace the initials div with:
<Image src="/images/dr-alfadl.jpg" alt="Dr. Alfadl" fill className="object-cover" />
```

### 3. Email Address
Replace `info@dr-alfadl.com` in `lib/translations.ts` and `components/layout/Footer.tsx`.

### 4. Payment Integration
The store uses placeholder payment buttons. Integrate Moyasar by:
1. Adding `@moyasar/core` package
2. Replacing the `btn-gold` buy buttons in `StoreContent.tsx` with Moyasar payment triggers

### 5. Booking Backend
The booking form in `BookingForm.tsx` has a simulated submit. Wire it to your backend:
```tsx
// In BookingForm.tsx, replace the setTimeout with:
const response = await fetch("/api/booking", {
  method: "POST",
  body: JSON.stringify(data),
});
```

### 6. AI Tools
The symptom checker demo in `AIToolsContent.tsx` returns random canned responses. Integrate Claude API:
```tsx
// Replace the demo response logic with an API call to /api/symptom-check
// which calls the Anthropic API with a medical system prompt
```

### 7. Colors
Edit `tailwind.config.ts` — the `navy` and `gold` color scales.

### 8. Translations
All strings live in `lib/translations.ts`. Each key has an `en` and `ar` value.

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

Set environment variables in Vercel dashboard if needed.

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Add `output: "standalone"` to `next.config.ts` for Docker.

### Self-hosted VPS

```bash
# Build
npm run build

# Start with PM2
npm install -g pm2
pm2 start npm --name "dr-alfadl-web" -- start
pm2 save
pm2 startup
```

Use Nginx as reverse proxy on port 80/443.

---

## SEO

- Metadata configured in `app/[locale]/layout.tsx` per locale
- Arabic `lang="ar"` and `dir="rtl"` attributes set automatically
- Open Graph and alternate locale metadata included
- Robot-friendly: `index, follow`

Add sitemap by creating `app/sitemap.ts`:
```ts
export default function sitemap() {
  return [
    { url: "https://dr-alfadl.com/en", lastModified: new Date() },
    { url: "https://dr-alfadl.com/ar", lastModified: new Date() },
    // ... other routes
  ];
}
```

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Safari (iOS 14+) | ✅ Full |
| Chrome Mobile | ✅ Full |

---

## License

Proprietary — All rights reserved.  
© 2025 Dr. Alfadl Digestive & Laser Proctology Center  
Unauthorized reproduction or distribution is prohibited.

---

## Support

For technical support or customization requests, contact the development team.
