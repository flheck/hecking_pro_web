import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useTranslations } from 'next-intl';
import SectionWrapper from '@/components/ui/SectionWrapper';

// Custom MDX components that use MUI typography
const mdxComponents = {
  h1: (props: object) => <Typography variant="h4" component="h1" gutterBottom fontWeight={700} {...props} />,
  h2: (props: object) => <Typography variant="h5" component="h2" gutterBottom fontWeight={600} sx={{ mt: 4 }} {...props} />,
  h3: (props: object) => <Typography variant="h6" component="h3" gutterBottom fontWeight={600} sx={{ mt: 3 }} {...props} />,
  p: (props: object) => <Typography variant="body1" paragraph color="text.secondary" {...props} />,
  ul: (props: object) => (
    <Box component="ul" sx={{ pl: 3, mb: 2, '& li': { mb: 0.5 } }} {...props} />
  ),
  li: (props: object) => (
    <Typography component="li" variant="body1" color="text.secondary" {...props} />
  ),
  strong: (props: object) => <Box component="strong" sx={{ color: 'text.primary', fontWeight: 600 }} {...props} />,
};

interface AboutSectionProps {
  content: string;
  title: string;
  subtitle: string;
}

export default function AboutSection({ content, title, subtitle }: AboutSectionProps) {
  return (
    <SectionWrapper id="about" title={title} subtitle={subtitle}>
      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto',
          typography: 'body1',
        }}
      >
        <MDXRemote source={content} components={mdxComponents} />
      </Box>
    </SectionWrapper>
  );
}
