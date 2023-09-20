import { ReactNode } from "react";
import styles from "./MainLayout.module.css";
import Link from "next/link";
import { SocialMenu } from "@/components/molecules";
import Logo from "@/assets/svg/logo.svg";
import Search from "@/assets/svg/search.svg";

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

        <div className={`${styles.container} ${styles.mainMenu}`}>
          <nav>
            <ul className={styles.list}>
              <li className={styles.item}>Livescore</li>
              <li className={styles.item}>Competities</li>
              <li className={styles.item}>News</li>
              <li className={styles.item}>Bookmakers</li>
              <li className={styles.item}>Teams</li>
            </ul>
          </nav>
          <div className={`flexCenter ${styles.searchContainer}`}>
            <Search />
            <input
              type="text"
              placeholder="Zoerken ..."
              className={styles.searchInput}
            />
          </div>
        </div>
      </header>
      {props.children}
      <footer />
    </>
  );
};
