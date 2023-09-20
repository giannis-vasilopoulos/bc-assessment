import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

const defaultSeoValues = {
  title: "All about Bet",
  description: "All about Bet and news",
  titleTemplate: "%s | BettingWorld",
  canonical: "BettingWorld",
  openGraph: {
    title: "All about Bet",
    description: "All about Bet and news",
    type: "website",
    locale: "en_US",
    site_name: "BettingWorld"
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoValues} />
      <Component {...pageProps} />
    </>
  );
}
