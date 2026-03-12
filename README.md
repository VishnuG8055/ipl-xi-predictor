# 🏏 IPL XI Predictor — Pick. Predict. Prove.

Build your dream IPL XI, predict match winners, and compete with cricket fans worldwide. **100% free to use!**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-green?logo=supabase)](https://supabase.com/)

---

## ✨ Features

- 🏏 **Team XI Picker** — Build your dream playing XI for any IPL team
- 📊 **Most Predicted XI** — See which players fans pick the most
- 📅 **Match Schedule** — Full IPL 2025 schedule with countdown timers
- 🏆 **Leaderboard** — Compete with fans on prediction accuracy
- 🥇 **Badges** — Earn badges for predictions and accuracy
- 🔐 **Google Sign-In** — One-click login, no password needed
- 📱 **Mobile First** — Works great on phones with bottom tab navigation
- 🌙 **Neon Cricket Dark Theme** — Glassmorphism UI with team colors

---

## 🛠️ Tech Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| **Frontend** | Next.js 14 (App Router) | React framework |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Animations** | Framer Motion | Smooth animations |
| **Auth** | Supabase + Google OAuth | Login system |
| **Database** | Supabase (PostgreSQL) | Data storage |
| **State** | Zustand | Global state |
| **Icons** | Lucide React | Icon library |

---

## 🚀 Setup Instructions (Beginner Friendly)

### Step 1: Clone the repository

```bash
git clone https://github.com/VishnuG8055/ipl-xi-predictor.git
cd ipl-xi-predictor
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Create your environment file

```bash
cp .env.example .env.local
```

### Step 4: Set up Supabase (free account)

1. Go to [supabase.com](https://supabase.com/) and create a free account
2. Click **"New Project"** and fill in the details
3. Once created, go to **Settings → API**
4. Copy your **Project URL** and **anon/public** key
5. Paste them into `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 5: Run the database migrations

1. In your Supabase dashboard, click **SQL Editor**
2. Run the files in order:
   - Paste and run `supabase/migrations/001_initial_schema.sql`
   - Paste and run `supabase/migrations/002_views.sql`
   - Paste and run `supabase/migrations/003_seed_data.sql`

### Step 6: Set up Google OAuth (optional)

1. In Supabase dashboard, go to **Authentication → Providers**
2. Enable **Google** provider
3. Follow the [Supabase Google Auth guide](https://supabase.com/docs/guides/auth/social-login/auth-google)
4. Add your callback URL: `https://your-project.supabase.co/auth/v1/callback`

### Step 7: Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
ipl-xi-predictor/
├── app/                      # Next.js App Router pages
│   ├── auth/                 # Auth pages (login, callback, setup)
│   ├── team/[teamId]/        # Team detail page
│   ├── schedule/             # Match schedule
│   ├── predict/              # Predictions
│   ├── leaderboard/          # Leaderboard
│   ├── community/            # Community polls
│   ├── profile/              # User profile
│   ├── points-table/         # IPL points table
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/               # Reusable React components
│   ├── layout/               # Navbar, Footer, MobileNav
│   └── shared/               # GlowCard, AnimatedCounter, etc.
├── lib/                      # Utilities and config
│   ├── hooks/                # Custom React hooks
│   ├── store/                # Zustand state stores
│   ├── supabase/             # Supabase client setup
│   ├── types/                # TypeScript interfaces
│   └── utils/                # Helper functions + constants
├── supabase/migrations/      # SQL files for database setup
├── .env.example              # Environment variable template
└── README.md                 # This file
```

---

## 🗺️ Roadmap

### ✅ Phase 1 (Current) — Foundation
- [x] Next.js 14 project setup
- [x] Neon Cricket dark theme
- [x] Google Auth integration
- [x] Landing page with team cards
- [x] Database schema + seed data

### 🔄 Phase 2 — Core Features
- [ ] Team XI picker (drag & drop)
- [ ] Most predicted XI comparison
- [ ] Match predictions with scoring
- [ ] Leaderboard with rankings

### 🔮 Phase 3 — Advanced
- [ ] Real-time updates
- [ ] Share XI as image
- [ ] IPL points table (live)
- [ ] Community polls

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push and open a Pull Request

---

## 📄 License

MIT — free to use for everyone!

Made with ❤️ for cricket fans 🏏
