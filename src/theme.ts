import { createTheme, ThemeOptions } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1A237E' : '#3F51B5',
        light: mode === 'light' ? '#534BAE' : '#7986CB',
        dark: mode === 'light' ? '#000051' : '#303F9F',
      },
      secondary: {
        main: mode === 'light' ? '#7B1FA2' : '#E91E63',
        light: mode === 'light' ? '#AE52D4' : '#F48FB1',
        dark: mode === 'light' ? '#4A0072' : '#C2185B',
      },
      background: {
        default: mode === 'light' ? '#F8F1E5' : '#0A0A0A',
        paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
      },
      text: {
        primary: mode === 'light' ? '#333333' : '#FFFFFF',
        secondary: mode === 'light' ? '#666666' : '#B3B3B3',
      },
      divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: {
        fontFamily: '"Poppins", "Inter", sans-serif',
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: '"Poppins", "Inter", sans-serif',
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: '"Poppins", "Inter", sans-serif',
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontFamily: '"Poppins", "Inter", sans-serif',
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h5: {
        fontFamily: '"Poppins", "Inter", sans-serif',
        fontSize: '1.1rem',
        fontWeight: 500,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: mode === 'light' 
              ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
              : '0 4px 20px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};

export default getTheme('light');
