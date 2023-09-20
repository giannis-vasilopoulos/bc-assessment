import { ReactNode } from "react";
import styles from "./MainLayout.module.css";
import Link from "next/link";
import { SocialMenu } from "@/components/molecules";
import Logo from "@/assets/svg/logo.svg";
import { MainMenu } from "@/components/organisms/MainMenu";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <header>
        <div className={styles.topbar}>
          <div className={styles.container}>
            <Link href="/">
              <Logo className={styles.logo} />
            </Link>
            <SocialMenu />
          </div>
        </div>

        <MainMenu />
      </header>
      {props.children}
      <footer />
    </>
  );
};
