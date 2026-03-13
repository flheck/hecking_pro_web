# hecking.pro

Personal professional website built with **Next.js 14**, **MUI**, and **next-intl** — hosted on **AWS Amplify**.

## ✨ Features

| Feature | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| UI Library | Material UI (MUI v5) |
| i18n | next-intl (EN / DE) |
| Rich text content | MDX via next-mdx-remote |
| Structured content | YAML via js-yaml |
| Hosting | AWS Amplify |
| Version control | GitHub |

## 🗂 Project Structure

```
hecking_pro/
├── amplify.yml                    # AWS Amplify build config
├── content/                       # All page content (locale-based)
│   ├── en/
│   │   ├── about.mdx              # About page text (Markdown/MDX)
│   │   ├── skills.yml             # Skills data
│   │   ├── contact.yml            # Contact info
│   │   └── impressum.mdx          # Legal notice text
│   └── de/                        # Same structure in German
├── messages/                      # UI strings (buttons, labels, etc.)
│   ├── en.json
│   └── de.json
└── src/
    ├── app/
    │   └── [locale]/
    │       ├── layout.tsx          # Root layout (providers, NavBar, Footer)
    │       ├── page.tsx            # Main scrollable page (About, Skills, Contact)
    │       └── impressum/
    │           └── page.tsx        # Standalone legal notice page
    ├── components/
    │   ├── layout/                 # NavBar, Footer
    │   ├── providers/              # ThemeRegistry (MUI + Emotion)
    │   ├── sections/               # AboutSection, SkillsSection, ContactSection
    │   └── ui/                     # SectionWrapper, LanguageSwitcher
    ├── lib/
    │   └── content.ts              # Helpers to load MDX / YAML files
    ├── styles/
    │   └── theme.ts                # MUI theme configuration
    └── types/
        └── index.ts                # Shared TypeScript types
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
The middleware will redirect `/` → `/en` automatically.

### 3. Build for production

```bash
npm run build
npm start
```

## 🌐 i18n (Internationalization)

All user-facing text lives in two places:

- **`messages/{locale}.json`** — UI strings (navigation labels, button text, form labels)
- **`content/{locale}/*.mdx|yml`** — Page content

To add a new language, e.g. French:

1. Add `'fr'` to `routing.locales` in `src/routing.ts`
2. Create `messages/fr.json` (copy from `en.json` and translate)
3. Create `content/fr/` directory and translate all content files

## 📝 Editing Content

| What | Where |
|---|---|
| About text | `content/{locale}/about.mdx` |
| Skills list | `content/{locale}/skills.yml` |
| Contact info | `content/{locale}/contact.yml` |
| Impressum text | `content/{locale}/impressum.mdx` |
| Navigation / button labels | `messages/{locale}.json` |

## ☁️ AWS Amplify Deployment

1. Push this repository to GitHub.
2. In the [AWS Amplify Console](https://console.aws.amazon.com/amplify/), choose **"Host a web app"**.
3. Connect your GitHub repository.
4. Amplify will detect the `amplify.yml` and configure the build automatically.
5. Set the framework to **Next.js - SSR** for full server-side rendering support.

> **Tip:** For a fully static export (no Lambda), add `output: 'export'` to `next.config.mjs`
> and switch to the `Static` compute platform in Amplify — note that this disables SSR features.

## 📬 Contact Form

The contact form currently shows a success message on submit. To wire it up to a real backend:

- **AWS SES** — Create a Lambda + API Gateway endpoint
- **Resend** — Drop-in email API, add an `/api/contact` route in Next.js
- **Formspree** — No-code option, replace the `handleSubmit` in `ContactSection.tsx`

## 🔧 Customisation Checklist

- [ ] Replace placeholder name & contact info in `content/{locale}/`
- [ ] Add your own profile photo to `public/`
- [ ] Adjust colour palette in `src/styles/theme.ts`
- [ ] Update social links in `content/{locale}/contact.yml`
- [ ] Configure the contact form backend
- [ ] Connect your domain in the Amplify Console
