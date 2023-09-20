import { ReactNode } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Logo from "@/assets/svg/logo.svg";
import { SocialMenu } from "@/components/molecules/SocialMenu";

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
              <Logo />
            </Link>
            <SocialMenu />
          </div>
        </div>
      </header>
      {props.children}
      <footer />
    </>
  );
};
