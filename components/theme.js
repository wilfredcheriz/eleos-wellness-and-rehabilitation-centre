import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#256EFF',
    },
    background: {
      default: '#FCFCFC',
    },
    text: {
      primary: '#0A0908',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
  },
});

export default theme;
