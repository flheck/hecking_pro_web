import type { ReactNode } from 'react';

// Root layout is minimal — all actual layout work (html, body, providers)
// happens inside src/app/[locale]/layout.tsx.
// This file is required to satisfy the Next.js App Router contract and to
// provide a mounting point for the 404 not-found page.
export default function RootLayout({ children }: { children: ReactNode }) {
  // The [locale] layout renders <html> and <body>, so we just pass through.
  return children;
}
