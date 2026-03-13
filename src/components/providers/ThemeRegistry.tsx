'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import theme from '@/styles/theme';

interface Props {
  children: React.ReactNode;
}

const globalStyles = (
  <GlobalStyles
    styles={{
      html: {
        scrollBehavior: 'smooth',
      },
      '::selection': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
      },
    }}
  />
);

export default function ThemeRegistry({ children }: Props) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {globalStyles}
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
