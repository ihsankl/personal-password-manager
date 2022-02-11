import React from 'react';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import {ThemeProvider} from '@mui/material/styles';
import defaultTheme from '../theme/theme';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
