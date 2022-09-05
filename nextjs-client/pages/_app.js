import "@styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import { LanguageProvider } from "@contexts/languageContext";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

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
