import { SearchInput } from "@/components/molecules/SearchInput";
import styles from "./MainMenu.module.css";
import Arrow from "@/assets/svg/arrow-down.svg";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useScreenDetector } from "@/hooks/useScreenDetector";

export type MenuItem = { id: string; link: string; title: string };
export type MenuItemList = MenuItem & { submenu?: MenuItem[] };

export type MainMenuTypes = { data: MenuItemList[] };

const SubMenu = ({ item }: { item: MenuItemList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop, isMobile } = useScreenDetector();

  const handleMouseEnter = () => {
    isDesktop && setIsOpen(true);
  };

  const toggleMobileSubMenu = () => {
    isMobile && setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    isDesktop &&
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
  };

  return (
    <>
      <li
        className={styles.item}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleMobileSubMenu}
      >
        {item.title} <Arrow />
        {isOpen && (
          <ul className={styles.submenu}>
            {item.submenu?.map(i => {
              return (
                <li key={i.id}>
                  <Link href={i.link}>{i.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </>
  );
};

export function MainMenu({ data }: MainMenuTypes) {
  const { isDesktop } = useScreenDetector();

  return (
    <div className={`${styles.container} ${styles.mainMenu}`}>
      <nav>
        <ul className={styles.list}>
          {data.map(i => {
            if (i.submenu)
              return <Fragment key={i.id}>{<SubMenu item={i} />}</Fragment>;

            return (
              <li key={i.id} className={styles.item}>
                <Link href={i.link}>{i.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {isDesktop && <SearchInput />}
    </div>
  );
}
