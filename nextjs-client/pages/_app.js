import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <ThemeProvider theme={{}}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
