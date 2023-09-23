import { SocialMenu } from "@/components/molecules";
import styles from "./Footer.module.css";
import Image from "next/image";
import cruks from "@/assets/images/cruks.png";
import hands from "@/assets/images/24x7-hands.png";
import Logo from "@/assets/svg/logo.svg";
import agog from "@/assets/images/agog.png";
import loket from "@/assets/images/loket-kansspel.png";
import Link from "next/link";
import { MenuItem } from "../MainMenu/MainMenu.types";

type FooterTypes = {
  data: { id: string; items: MenuItem[] }[];
};

export function Footer({ data }: FooterTypes) {
  return (
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
          {data.map(column => {
            return (
              <ul key={column.id}>
                {column.items.map(item => (
                  <li key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            );
          })}
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
  );
}
