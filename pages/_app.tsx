import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const Container = ({ children }: any) => {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            height: 100vh;
            width: 100%;
            background-color: whitesmoke;
          }
        `}
      </style>
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>어섬주형</title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>
        {`
          p {
            color: black;
          }
        `}
      </style>
    </Container>
  );
}

export default MyApp;
