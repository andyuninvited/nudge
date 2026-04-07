# Claude Code Prompt — nudgesidebar.com Landing Page
## Instructions: Paste this entire prompt into Claude Code (claude.ai/code or Cursor/Windsurf with Claude)

---

Build a production-ready Next.js 14 landing page for a product called **Nudge** — deployed to Vercel. This is a waitlist/pre-launch page. No backend needed. Email capture via Resend's API or a simple form POST to a free Formspree endpoint.

---

## TECH STACK
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui for components (button, input, badge)
- Framer Motion for subtle animations (fade-in on scroll)
- Resend OR Formspree for email capture (use Formspree as default — no API key setup needed, just a form POST to `https://formspree.io/f/REPLACE_WITH_ID`)
- Deploy-ready for Vercel (no special config needed beyond standard Next.js)

---

## BRAND / STYLE

**Personality:** Calm, direct, a little dry. Speaks like a founder who's been burned by over-engineered tools and is done with it. Not loud, not salesy — honest and specific.

**Color palette:**
- Background: `#0F0F0F` (near-black)
- Surface/cards: `#1A1A1A`
- Primary accent: `#6EE7B7` (mint green — the "nudge" color)
- Secondary accent: `#F59E0B` (amber — used sparingly for price/CTA)
- Text primary: `#F5F5F5`
- Text muted: `#9CA3AF`
- Border: `#2A2A2A`

**Typography:**
- Font: Inter (Google Fonts)
- Headline: `text-5xl font-bold tracking-tight` (desktop), `text-3xl` mobile
- Body: `text-lg text-gray-400`
- Monospace accents for stats/numbers: use `font-mono`

**Aesthetic:** Dark, minimal, slightly technical. Think Linear.app meets a no-nonsense founder tool. No gradients except a very subtle radial glow behind the hero headline (mint green, 5% opacity). No illustrations. Clean white space. 

---

## PAGE STRUCTURE (build exactly this, in order)

### 1. NAV (sticky, minimal)
- Logo: "Nudge" in white, bold, left side
- Small badge next to logo: `Early Access` in mint green with mint border, small text
- Right side: single CTA button "Get Founding Access" → scrolls to waitlist form
- Background: `#0F0F0F` with bottom border `#2A2A2A` on scroll

---

### 2. HERO SECTION
**Badge (centered above headline):**
`🔦 The CRM-less CRM for founders`  
Pill badge, mint green border, small text, `#1A1A1A` background

**Headline (centered):**
`You're losing deals because you forgot to follow up.`

**Subheadline:**
`Nudge lives in your Gmail sidebar. Drop a quick note, set a follow-up date, and we'll remind you before the deal goes cold. No CRM to manage. No fields to fill. Just a nudge when you need it.`

**CTA block (centered):**
- Email input (placeholder: `your@email.com`)
- Button: `Get Founding Access — $49/year` (amber background, dark text, bold)
- Under button, small muted text: `Price goes up at launch. 30-day money back. No spam.`

**Social proof line (below CTA):**
Small text, centered, muted: `Join founders who are done managing their CRM.`

**Subtle stat block (3 items, inline, centered, monospace font):**
- `$49/yr` → `Founding price`
- `< 60s` → `Setup time`  
- `Your data` → `In your own Google Sheet`

---

### 3. THE PROBLEM SECTION
**Section header:** `Sound familiar?`  
**Left-aligned, large font, stacked list style:**

Each item is a "complaint card" — dark card with left border in mint green:

1. `"I've tried every CRM. They all make me feel like I'm doing it wrong."`
2. `"I went back to a spreadsheet. It's simple, but it never follows up with me."`
3. `"I have proposals out there that I genuinely forgot about."`
4. `"I lost a $8,000 deal because I waited too long to follow up."`

Small italic attribution under each: `— founder, consultant, freelancer`  

---

### 4. HOW IT WORKS
**Section header:** `Three steps. That's it.`

3-column grid (stacked on mobile):

**Step 1:**
Icon: `⚡` (or a simple numbered circle "1")
Title: `Install the Chrome extension`
Body: `Adds a sidebar to Gmail. 30 seconds. No setup wizard, no required fields.`

**Step 2:**
Icon: `🗒️`
Title: `Drop a note`
Body: `Type or speak one line about a contact. "Sent proposal. $4,500. Waiting." That's enough.`

**Step 3:**
Icon: `🔔`
Title: `Get nudged`
Body: `We remind you when a contact goes cold or a proposal goes unanswered. You decide what to do next.`

---

### 5. FEATURES (FREE vs PAID)

**Section header:** `Simple pricing. No surprises.`

Two-column comparison cards side by side (stacked mobile):

**LEFT CARD — Free:**
Title: `The Notebook` — `Free forever`
Badge: `Free`
List:
- Up to 10 active contacts
- One-line notes or voice-to-text
- Follow-up reminders (browser notifications)
- Your data lives in your Google Sheet
- Works in Gmail sidebar

**RIGHT CARD — Paid (highlight this one):**
Title: `The Closer` — `$49/year founding`
Badge: `Founding Price` in amber
Subtitle: `$7/mo after launch`
List:
- Everything in Free, plus:
- Unlimited contacts
- **Proposal tracker** — log amount, date sent, status
- Auto reminders: Day 3, Day 7, Day 14
- Email nudges (not just browser)
- Weekly summary: "You have $11,200 in open proposals"
- One-tap note templates

CTA button below right card: `Lock in $49/year →` (amber button)

---

### 6. THE DATA SECTION (trust block)
**Section header:** `Your data. Always.`
**Body:**
`Nudge stores your contacts in your own Google Sheet — not our database. You own it. You can read it, edit it, export it, delete it. We just make it smart.`

Small supporting details (icon + text, 3 inline):
- `🔒 Google OAuth — no password stored`  
- `📊 Google Sheets — you own the data`  
- `🗑️ Delete anytime — no lock-in`

---

### 7. WHO IT'S FOR
**Section header:** `Built for one person doing their own sales.`

Bullet list, two columns:
✓ Founders doing their own BD
✓ Consultants managing client relationships  
✓ Freelancers who send proposals and wait
✓ Anyone who's lost a deal because they forgot

✗ Not for teams  
✗ Not for enterprise  
✗ Not for people who enjoy CRM configuration  

---

### 8. WAITLIST / CTA (bottom of page, full-width section)
**Background:** `#111111` with subtle mint radial glow

**Headline:** `Ready to stop losing deals because you forgot to follow up?`
**Sub:** `Get founding access at $49/year — locked forever when we launch.`

**Form:**
- Name input (placeholder: `Your name`)
- Email input (placeholder: `your@email.com`)
- Button: `Grab a Founding Spot` (amber, full width on mobile)
- Below form: `30-day money back. No spam. Unsubscribe anytime.`

Form submits to Formspree (POST, show a thank-you message inline: `"You're in. We'll nudge you when it's ready. 🔔"`)

---

### 9. FOOTER
Minimal. Dark.
- Left: `Nudge © 2026`  
- Center: `nudgesidebar.com`  
- Right: `Made for founders who hate CRMs`

---

## ANIMATIONS
- Hero section: fade-in-up on load (Framer Motion, 0.6s ease)
- Problem cards: staggered fade-in on scroll (0.1s delay each)
- Feature cards: fade-in on scroll
- Keep it subtle. No bouncing, no spinning. This is a serious tool.

---

## MOBILE
Fully responsive. Test these breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

Stack all multi-column grids on mobile. Full-width CTA buttons on mobile.

---

## SEO / META
```
title: "Nudge — The CRM-less CRM for Founders"
description: "Drop a note. Get a nudge. Close more deals. A dead-simple Gmail sidebar that reminds you to follow up — no CRM required."
og:image: generate a simple dark card with the Nudge tagline (can be a static /public/og.png)
canonical: https://nudgesidebar.com
```

---

## FORMSPREE SETUP NOTE
Replace `REPLACE_WITH_ID` in the form action with the actual Formspree form ID after the owner creates a free account at formspree.io. Until then, use a console.log mock that shows the success state.

---

## DELIVERABLES
- `/app/page.tsx` — full landing page
- `/app/layout.tsx` — with Inter font, metadata, dark background
- `/app/globals.css` — Tailwind base + any custom styles
- `/components/WaitlistForm.tsx` — reusable form component with Formspree integration + success state
- `/components/PricingCards.tsx` — the two-tier pricing component
- `tailwind.config.ts` — extended with brand colors
- `package.json` — with all deps (next, tailwind, shadcn, framer-motion)
- `README.md` — one-paragraph deploy instructions for Vercel

No auth, no database, no API routes needed. Pure static + Formspree.
