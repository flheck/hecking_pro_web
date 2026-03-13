import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Alternate the background colour for visual separation */
  alternate?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  alternate = false,
}: SectionWrapperProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: alternate ? 'background.paper' : 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, color: 'text.primary' }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
              {subtitle}
            </Typography>
          )}
          {/* Decorative accent line */}
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: 'primary.main',
              borderRadius: 2,
              mx: 'auto',
              mt: 2,
            }}
          />
        </Box>

        {children}
      </Container>
    </Box>
  );
}
