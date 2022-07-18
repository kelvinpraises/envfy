import type { AppProps } from "next/app";
import Scaffold from "../components/Scaffold";
import Context from "../context/Context";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <GlobalStyle />
      <Scaffold>
        <Component {...pageProps} />
      </Scaffold>
    </Context>
  );
}

export default MyApp;
