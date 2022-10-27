import '../styles/globals.css';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';
import { LanguageProvider } from '@contexts/languageContext';

const theme = extendTheme({});

// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <ThemeProvider theme={{}}>
      <ChakraProvider>
        <LanguageProvider>
          {getLayout(<Component {...pageProps} />)}
        </LanguageProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
