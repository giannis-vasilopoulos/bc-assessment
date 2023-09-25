import { MainLayout } from "@/components/layouts";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "swiper/css";
import useGlobalData from "@/hooks/useGlobalData";

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
  const { serverData } = useGlobalData();
  return (
    <MainLayout {...serverData}>
      <DefaultSeo {...defaultSeoValues} />
      <Component {...pageProps} />
    </MainLayout>
  );
}
