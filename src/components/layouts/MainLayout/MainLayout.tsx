import { ReactNode, useState } from "react";
import styles from "./MainLayout.module.css";
import Link from "next/link";
import { SocialMenu, SearchInput } from "@/components/molecules";
import Logo from "@/assets/svg/logo.svg";
import { Footer, MainMenu } from "@/components/organisms";
import {
  MenuItem,
  MenuItemList
} from "@/components/organisms/MainMenu/MainMenu.types";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import Burger from "@/assets/svg/burger.svg";

type MainLayoutProps = {
  children: ReactNode;
  mainMenu: MenuItemList[];
  footer: { id: string; items: MenuItem[] }[];
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Burger onClick={handleBurgerClick} />
      {isOpen && (
        <div className={styles.mobileMenu}>
          <SearchInput />
          <SocialMenu />
        </div>
      )}
    </>
  );
};

export const MainLayout = ({ mainMenu, footer, children }: MainLayoutProps) => {
  const { isDesktop } = useScreenDetector();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topbar}>
          <div className={styles.container}>
            <Link href="/">
              <Logo className={styles.logo} />
            </Link>
            {isDesktop ? <SocialMenu /> : <MobileMenu />}
          </div>
        </div>

        <MainMenu data={mainMenu} />
      </header>
      {children}
      <Footer data={footer} />
    </>
  );
};
