import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { AnchorHTMLAttributes } from 'react';
import { getMdxContent } from '@/lib/content';
import { Link } from '@/navigation';
import { routing } from '@/routing';

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

const mdxComponents = {
  h1: (props: object) => (
    <Typography variant="h4" component="h1" gutterBottom fontWeight={700} sx={{ mt: 4, mb: 2 }} {...props} />
  ),
  h2: (props: object) => (
    <Typography variant="h5" component="h2" gutterBottom fontWeight={600} sx={{ mt: 4, mb: 1.5 }} {...props} />
  ),
  h3: (props: object) => (
    <Typography variant="h6" component="h3" gutterBottom fontWeight={600} sx={{ mt: 3, mb: 1 }} {...props} />
  ),
  p: (props: object) => (
    <Typography variant="body1" paragraph color="text.secondary" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Box
      component="a"
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      sx={{ color: 'primary.main' }}
      {...props}
    >
      {children}
    </Box>
  ),
  ul: (props: object) => (
    <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 0.5 } }} {...props} />
  ),
  li: (props: object) => (
    <Typography component="li" variant="body1" color="text.secondary" {...props} />
  ),
};

interface ImpressumPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ImpressumPage({ params }: ImpressumPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'impressum' });
  const content = getMdxContent(locale, 'impressum');

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Back button */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          color="inherit"
          sx={{ mb: 4, color: 'text.secondary', fontWeight: 500 }}
        >
          {t('back')}
        </Button>
      </Link>

      <Divider sx={{ mb: 4 }} />

      {/* Page title */}
      <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
        {t('title')}
      </Typography>

      {/* MDX content */}
      <Box sx={{ mt: 4 }}>
        <MDXRemote source={content} components={mdxComponents} />
      </Box>
    </Container>
  );
}
