import '../styles/globals.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '@emotion/react';
import { LanguageProvider } from '@contexts/languageContext';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Yemayoga</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="yemayoga, irvine, yoga, yoga studio, yoga class"
        />
        <meta property="og:title" content="Yemayoga" />
        <meta name="twitter:title" content="Yemayoga" />

        <meta name="description" content="Breathe and flow with Yemayoga" />
        <meta
          property="og:description"
          content="Breathe and flow with Yemayoga"
        />
        <meta
          name="twitter:description"
          content="Breathe and flow with Yemayoga"
        />

        <meta property="og:image" content="/images/link-preview.jpg" />
        <meta name="twitter:image" content="/images/link-preview.jpg" />
      </Head>
      <ThemeProvider theme={{}}>
        <ChakraProvider>
          <LanguageProvider>
            {getLayout(<Component {...pageProps} />)}
          </LanguageProvider>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
