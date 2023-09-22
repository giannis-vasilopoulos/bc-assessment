import { ReactNode } from "react";
import styles from "./MainLayout.module.css";
import Link from "next/link";
import { SocialMenu } from "@/components/molecules";
import Logo from "@/assets/svg/logo.svg";
import { MainMenu, MenuItemList } from "@/components/organisms/MainMenu";
import Image from "next/image";
import cruks from "@/assets/images/cruks.png";
import hands from "@/assets/images/24x7-hands.png";

import agog from "@/assets/images/agog.png";
import loket from "@/assets/images/loket-kansspel.png";

type MainLayoutProps = {
  children: ReactNode;
  mainMenu: MenuItemList[];
};

export const MainLayout = ({ mainMenu, footer, children }: MainLayoutProps) => {
  console.log(mainMenu);
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

          <div className={styles.footerMenus}>
            <ul>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Archive</Link>
              </li>
              <li>
                <Link href="#">Authors</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Competitions</Link>
              </li>
              <li>
                <Link href="#">Livescore</Link>
              </li>
              <li>
                <Link href="#">Transfernews</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Disclaimer</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            Gokproblemen? Bel de infolijn van het Trimbos instituut om u te
            helpen: 0900-1995 18+ Gokken kan verslavend zijn | Speel bewust
            Gambler Anonymous
          </p>
          <div className={styles.bottomBarLogos}>
            <Image src={cruks} alt="cruks logo" />
            <Image src={agog} alt="agog logo" />
            <Image src={loket} alt="loket logo" />
            <Image src={hands} alt="hands logo" />
          </div>
        </div>
      </footer>
    </>
  );
};
