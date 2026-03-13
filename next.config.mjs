import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable for static export (optional - Amplify also supports SSR)
  // output: 'export',
};

export default withNextIntl(nextConfig);
