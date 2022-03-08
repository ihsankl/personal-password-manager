import type {ThemeOptions} from '@mui/material';
import {createTheme} from '@mui/material/styles';

const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#29d2df',
      light: '#74e0e8',
      dark: '#00bed4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6ff5b2',
      light: '#b6f1d0',
      dark: '#007626',
    },
    error: {
      main: '#df3529',
      light: '#ed9794',
      dark: '#b2170f',
    },
    info: {
      main: '#b6f1d0',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export default themeOptions;
