import { EthereumAuthProvider } from "@3id/connect";
import { ThreeIdConnect } from "@3id/connect/dist/threeIdConnect";
import { getResolver } from "@ceramicnetwork/3id-did-resolver";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { DID } from "dids/lib/did";
import type { AppProps } from "next/app";
import { useCallback, useEffect, useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import Scaffold from "../components/Scaffold";
import { CeramicContext } from "../context/ceramic";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");
  const [ethereum, setEthereum] = useState();
  const [ethAddress, setEthAddress] = useState();
  const [ceramic, setCeramic] = useState<CeramicClient>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      if (ethereum && ethAddress) {
        setLoading(true);
        (async () => {
          const threeID = new ThreeIdConnect();

          // Create an EthereumAuthProvider and connect to ceramic node.
          const authProvider = new EthereumAuthProvider(ethereum, ethAddress);
          await threeID.connect(authProvider);
          const ceramic = new CeramicClient(
            process.env.NEXT_PUBLIC_CERAMIC_API_URL
          );

          const did = new DID({
            provider: threeID.getDidProvider(),
            resolver: {
              ...getResolver(ceramic),
            },
          });

          // Authenticate the DID using the 3ID provider from 3ID Connect.
          did
            .authenticate()
            .then(() => {
              ceramic.did = did;
              setCeramic(ceramic);
              setLoading(false);
            })
            .catch((e) => {
              setLoading(false);
              alert("something went wrong please connect again");
              console.log(e);
            });
        })();
      }
    } catch (e) {
      setLoading(false);
      alert("something went wrong please connect again");
      console.log(e);
    }
  }, [ethereum, ethAddress]);

  // Initializes app with Etheruem.
  const init = useCallback(() => {
    if ((window as any).ethereum) {
      setEthereum((window as any).ethereum);
      (async () => {
        try {
          const addresses = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          setEthAddress(addresses[0]);
        } catch (e) {
          alert(e);
        }
      })();
    } else {
      alert("Browser doesn't have Metamask");
    }
  }, []);

  // Disconnects from Ethereum.
  const disconnect = () => {
    alert("Disconnected");
  };

  return (
    <CeramicContext.Provider value={{ init, disconnect, ceramic }}>
      <ThemeContext.Provider value={setTheme}>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Scaffold>
            <Component {...pageProps} />
          </Scaffold>
        </ThemeProvider>
      </ThemeContext.Provider>
    </CeramicContext.Provider>
  );
}

export default MyApp;
