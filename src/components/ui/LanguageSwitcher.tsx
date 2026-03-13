'use client';

import type { MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { routing } from '@/routing';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('languageSwitcher');

  const handleChange = (_: MouseEvent<HTMLElement>, newLocale: string | null) => {
    if (newLocale && newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <Tooltip title={t('label')}>
      <ToggleButtonGroup
        value={locale}
        exclusive
        onChange={handleChange}
        aria-label={t('label')}
        size="small"
        sx={{
          '& .MuiToggleButton-root': {
            border: 'none',
            px: 1.5,
            py: 0.5,
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            color: 'text.secondary',
            '&.Mui-selected': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            },
          },
        }}
      >
        {routing.locales.map((loc: string) => (
          <ToggleButton key={loc} value={loc} aria-label={loc.toUpperCase()}>
            {loc.toUpperCase()}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Tooltip>
  );
}
