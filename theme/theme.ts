import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
      dark: '#1b5e20'
    },
    secondary: {
      main: '#ffd54f'
    },
    background: {
      default: '#f8fff8',
      paper: '#ffffff'
    },
    text: {
      primary: '#1b5e20',
      secondary: '#455a64'
    }
  },
  shape: {
    borderRadius: 12
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      letterSpacing: '0.02em'
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600
    },
    body1: {
      lineHeight: 1.8
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          transition: 'all .3s ease'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600
        }
      }
    }
  }
});

export default theme;
