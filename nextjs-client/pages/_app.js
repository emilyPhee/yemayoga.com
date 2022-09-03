import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
