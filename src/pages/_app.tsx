import { MainLayout } from "@/components/layouts/MainLayout";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

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
    <MainLayout>
      <DefaultSeo {...defaultSeoValues} />
      <Component {...pageProps} />
    </MainLayout>
  );
}
