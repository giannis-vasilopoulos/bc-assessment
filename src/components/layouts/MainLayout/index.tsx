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
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div>
            <Logo className={styles.logo} />
            <ul className={styles.companyDetails}>
              <li>Better Collective A/S</li>
              <li>Toldbodgade 12</li>
              <li>Kopenhagen 1253</li>
              <li>Denemarken</li>
            </ul>
          </div>
          <div>
            <p>Follow us on social media:</p>
            <SocialMenu className={styles.footerSocial} />
            <p>© 2022 bettingworld.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};
