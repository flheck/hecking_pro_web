'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', mt: 'auto' }}>
      <Divider />
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {year} Florian Hecking. {t('footer.rights')}.
          </Typography>
          <Link href="/impressum" style={{ textDecoration: 'none' }}>
            <MuiLink
              component="span"
              variant="body2"
              color="text.secondary"
              underline="hover"
              sx={{ cursor: 'pointer' }}
            >
              {t('footer.legalNotice')}
            </MuiLink>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
