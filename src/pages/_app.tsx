import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ApplicationProvider } from "../context/application-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProvider>
      <Component {...pageProps} />
    </ApplicationProvider>
  );
}

export default MyApp;
