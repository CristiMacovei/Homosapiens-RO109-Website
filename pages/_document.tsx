import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          
        </Head>
        <body className='bg-gradient-to-r from-yellow-500 via-urmom to-blue-700'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;