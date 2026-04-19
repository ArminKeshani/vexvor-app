# VexVor — Deployment Guide

The VexVor Next.js app (with Clerk authentication) is ready to deploy to Vercel.
Follow these steps exactly.

---

## Prerequisites

- Node.js 18+ installed
- A [Clerk](https://clerk.com) account (free tier works)
- A [Vercel](https://vercel.com) account (free tier works)
- Git installed

---

## Step 1 — Set up Clerk

1. Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. Create a new application named **VexVor**
3. Choose your sign-in methods (Email + Google recommended)
4. Go to **API Keys** and copy:
   - `Publishable Key` (starts with `pk_`)
   - `Secret Key` (starts with `sk_`)

---

## Step 2 — Configure Environment Variables

```bash
cd vexvor-app
cp .env.local.example .env.local
```

Open `.env.local` and fill in:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
CLERK_SECRET_KEY=sk_test_YOUR_SECRET_HERE
```

Leave the rest at their defaults for local development.

---

## Step 3 — Install & Run Locally

```bash
npm install
npm run dev
```

> **Note:** After any design update session, always run `npm install` first to ensure
> all dependencies (including `gsap@^3.12.5` for scroll animations) are installed.

Visit [http://localhost:3000](http://localhost:3000) to verify everything works.

Test the auth flow:
- Click **Sign In** → Clerk modal appears ✓
- Click **Apply Now** → scrolls to apply form ✓
- Submit the apply form → success message appears ✓
- After signing in → **Dashboard** button appears in nav ✓
- `/dashboard` route → protected, redirects to sign-in if unauthenticated ✓

---

## Step 4 — Push to GitHub

```bash
git init
git add .
git commit -m "VexVor: initial commit"
git remote add origin https://github.com/YOUR_USERNAME/vexvor-app.git
git push -u origin main
```

> Make sure `.env.local` is in `.gitignore` (it is by default via Next.js).

---

## Step 5 — Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Next.js — keep all defaults
4. Under **Environment Variables**, add:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | `pk_live_...` |
| `CLERK_SECRET_KEY` | `sk_live_...` |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | `/sign-up` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | `/dashboard` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | `/dashboard` |
| `NEXT_PUBLIC_APP_URL` | `https://your-domain.vercel.app` |

5. Click **Deploy**

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Follow the prompts, then set env vars:

```bash
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY production
vercel env add CLERK_SECRET_KEY production
# ... repeat for all vars in .env.local.example
```

---

## Step 6 — Configure Clerk Production Keys

After deploying:

1. Go back to [Clerk Dashboard](https://dashboard.clerk.com)
2. Switch from **Development** to **Production** instance
3. Copy the **live** `pk_live_` and `sk_live_` keys
4. Update them in Vercel → Project Settings → Environment Variables
5. Add your Vercel domain to Clerk's **Allowed origins**:
   - `https://your-domain.vercel.app`
   - `https://vexvor.com` (if custom domain)

---

## Step 7 — Custom Domain (optional)

1. In Vercel → Project → Domains → Add `vexvor.com`
2. Update DNS at your registrar:
   - `A` record → Vercel IP (shown in dashboard)
   - `CNAME www` → `cname.vercel-dns.com`
3. Update `NEXT_PUBLIC_APP_URL` to `https://vexvor.com`
4. Add `https://vexvor.com` to Clerk's allowed origins

---

## File Structure

```
vexvor-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # ClerkProvider + fonts + metadata
│   │   ├── page.tsx             # Homepage (hero, all sections, apply form)
│   │   ├── globals.css          # All VexVor CSS variables + utilities
│   │   ├── dashboard/
│   │   │   ├── page.tsx         # Server component (protected, gets Clerk user)
│   │   │   └── DashboardClient.tsx  # Full dashboard UI
│   │   ├── ordeals/
│   │   │   └── page.tsx         # Gauntlet browser
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/page.tsx
│   │   ├── sign-up/
│   │   │   └── [[...sign-up]]/page.tsx
│   │   └── api/
│   │       └── apply/route.ts   # Application submission endpoint
│   ├── components/
│   │   ├── SpiralAnimation.tsx  # Canvas 2D galaxy animation (client)
│   │   ├── IntroOverlay.tsx     # Cinematic intro screen (client)
│   │   ├── Nav.tsx              # Responsive nav with Clerk auth (client)
│   │   └── ApplyForm.tsx        # Application form with API call (client)
│   └── middleware.ts            # Clerk route protection
├── .env.local.example
├── vercel.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Extending the Apply Route

`src/app/api/apply/route.ts` currently logs submissions and returns success.
Uncomment the webhook section to forward to your CRM, Notion DB, or email service.

**Resend (email):**
```bash
npm install resend
```

**Notion API:**
```bash
npm install @notionhq/client
```

---

## Being Before Having.
