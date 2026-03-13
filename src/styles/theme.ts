'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// ─── Design tokens ────────────────────────────────────────────────────────────
const colors = {
  seafoamGreen:  '#6FC7B5', // Primary
  deepSeafoam:   '#4FAE9A', // Primary hover / dark
  sageOrchid:    '#8A8F7A', // Secondary
  softMint:      '#A7DCCF', // Accent / primary light
  fogGreen:      '#F3F7F5', // Background default
  porcelain:     '#FFFFFF', // Surface / paper
  paleSage:      '#D7E4DD', // Border / divider
  pineInk:       '#1E2A23', // Text primary
  oliveGray:     '#4E5F54', // Text secondary
  mutedRose:     '#C07C7A', // Error
} as const;

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:          colors.seafoamGreen,
      light:         colors.softMint,
      dark:          colors.deepSeafoam,
      contrastText:  colors.pineInk,
    },
    secondary: {
      main:          colors.sageOrchid,
      light:         '#A3A894',
      dark:          '#6B7060',
      contrastText:  colors.porcelain,
    },
    error: {
      main:          colors.mutedRose,
      contrastText:  colors.porcelain,
    },
    divider: colors.paleSage,
    background: {
      default: colors.fogGreen,
      paper:   colors.porcelain,
    },
    text: {
      primary:   colors.pineInk,
      secondary: colors.oliveGray,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          padding: '8px 20px',
        },
        containedPrimary: {
          boxShadow: '0 4px 14px rgba(111, 199, 181, 0.35)',
          '&:hover': {
            backgroundColor: colors.deepSeafoam,
            boxShadow: '0 6px 20px rgba(79, 174, 154, 0.45)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.paleSage}`,
          boxShadow: '0 2px 12px rgba(30, 42, 35, 0.06)',
          '&:hover': {
            boxShadow: '0 6px 24px rgba(30, 42, 35, 0.1)',
          },
          transition: 'box-shadow 0.3s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.porcelain,
          borderBottomColor: colors.paleSage,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.paleSage,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 8,
          backgroundColor: colors.paleSage,
        },
        bar: {
          background: `linear-gradient(90deg, ${colors.softMint}, ${colors.seafoamGreen})`,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: colors.seafoamGreen,
            color: colors.pineInk,
            '&:hover': {
              backgroundColor: colors.deepSeafoam,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: colors.paleSage,
        },
      },
    },
  },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
