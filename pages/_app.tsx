import React, {} from 'react';
import '../styles/globals.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import defaultTheme from '../theme/appTheme';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import {AppProps} from 'next/app';

// const theme = createTheme({
//   ...themeOptions,
// });

// const MyApp =({Component, pageProps}: AppProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// };

// export default MyApp;

const theme = createTheme({
  ...defaultTheme,
});

const MyApp = (props: AppProps) => {
  const {Component, pageProps} = props;

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;


// import withRedux from 'next-redux-wrapper'
// import { Provider } from 'react-redux'
// import { withRouter } from 'next/router'
// import App from 'next/app'

// import createStore from 'store/createStore'

// class MyApp extends App {
//   render () {
//     const { Component, pageProps, router, store } = this.props
//     return (
//           <Provider store={store}>
//               <Component router={router} {...pageProps} />
//           </Provider>
//     )
//   }
// }

// export default withRedux(createStore)(
//   withRouter(MyApp)
// )
