import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cantarell&family=Manrope:wght@300;400&family=Nanum+Gothic&family=Nunito:wght@400;600&display=swap"
            rel="stylesheet"
          />
          {/* font-family: 'Cantarell', sans-serif; font-family: 'Manrope',
          sans-serif; font-family: 'Nanum Gothic', sans-serif; font-family:
          'Nunito', sans-serif; */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
