'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations } from 'next-intl';
import { usePathname, Link } from '@/navigation';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const SECTIONS = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'contact', labelKey: 'nav.contact' },
] as const;

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleSectionClick = (id: string) => {
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const drawer = (
    <Box sx={{ width: 260 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={() => setMobileOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {SECTIONS.map(({ id, labelKey }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              component="a"
              href={getSectionHref(id)}
              onClick={() => handleSectionClick(id)}
            >
              <ListItemText primary={t(labelKey)} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Link href="/impressum" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <ListItemButton onClick={() => setMobileOpen(false)}>
              <ListItemText
                primary={t('nav.impressum')}
                primaryTypographyProps={{ color: 'text.secondary', variant: 'body2' }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 2 }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              Florian Hecking
            </Typography>

            {/* Desktop navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {SECTIONS.map(({ id, labelKey }) => (
                <Button
                  key={id}
                  color="inherit"
                  component="a"
                  href={getSectionHref(id)}
                  onClick={() => handleSectionClick(id)}
                  sx={{ fontWeight: 500 }}
                >
                  {t(labelKey)}
                </Button>
              ))}
              <LanguageSwitcher />
            </Box>

            {/* Mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <LanguageSwitcher />
              <IconButton
                aria-label="open navigation"
                edge="end"
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
