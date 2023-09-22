import { ReactNode } from "react";
import styles from "./MainLayout.module.css";
import Link from "next/link";
import { SocialMenu } from "@/components/molecules";
import Logo from "@/assets/svg/logo.svg";
import {
  MainMenu,
  MenuItem,
  MenuItemList
} from "@/components/organisms/MainMenu";

import Footer from "@/components/organisms/Footer";

type MainLayoutProps = {
  children: ReactNode;
  mainMenu: MenuItemList[];
  footer: { id: string; items: MenuItem[] }[];
};

export const MainLayout = ({ mainMenu, footer, children }: MainLayoutProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.topbar}>
          <div className={styles.container}>
            <Link href="/">
              <Logo className={styles.logo} />
            </Link>
            <SocialMenu />
          </div>
        </div>

        <MainMenu data={mainMenu} />
      </header>
      {children}
      <Footer data={footer} />
    </>
  );
};
