# ZoningLogic Marketing Website

Modern Next.js 16 marketing website for ZoningLogic - an AI-powered zoning feasibility analysis platform with 3D visualization. Currently in beta and supporting Ontario, Canada.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Next.js 16.1.6** - React framework with App Router and Turbopack
- **React 19.2** - Latest React with View Transitions
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4** - Utility-first CSS with CSS variables
- **next-themes** - Dark/light mode support
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **Zod** - Schema validation

## 📁 Project Structure

```
zoninglogic-website/
├── src/
│   ├── app/              # App Router pages
│   │   ├── contact/      # Contact page
│   │   ├── demo/         # Demo page
│   │   ├── features/     # Features page
│   │   ├── pricing/      # Pricing page
│   │   ├── legal/        # Legal pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── forms/        # Form components
│   │   ├── layout/        # Layout components (Header, Footer, etc.)
│   │   ├── sections/     # Page sections (Hero, Features, etc.)
│   │   └── ui/           # UI components (Button, Card, etc.)
│   └── lib/              # Utilities and helpers
├── public/               # Static assets
├── .env.local           # Environment variables (not committed)
└── package.json
```

## 🎨 Features

- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Comprehensive metadata, Open Graph, and Twitter cards
- **Static Generation** - Fast page loads with static site generation
- **Type Safety** - Full TypeScript coverage
- **Accessibility** - WCAG compliant components

## 📄 Pages

- **Home** (`/`) - Hero, Features, How It Works, Stats, CTA
- **Features** (`/features`) - Detailed feature descriptions
- **Pricing** (`/pricing`) - Pricing tiers and FAQ
- **Demo** (`/demo`) - Demo video and request form
- **Contact** (`/contact`) - Contact form and information
- **Legal** (`/legal`, `/privacy`, `/terms`) - Legal pages

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📦 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🏗️ Build

```bash
# Create production build
npm run build

# Start production server locally
npm start
```

## 📝 Notes

- Currently in **beta** phase
- Supports **Ontario, Canada** only
- Uses **Turbopack** for faster development builds
- All pages are statically generated for optimal performance

## 📄 License

Private - All rights reserved
