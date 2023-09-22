import { SearchInput } from "@/components/molecules/SearchInput";
import styles from "./MainMenu.module.css";
import Arrow from "@/assets/svg/arrow-down.svg";
import Link from "next/link";
import { useState } from "react";

export type MenuItem = { id: string; link: string; title: string };
export type MenuItemList = MenuItem & { submenu?: MenuItem[] };

export type MainMenuTypes = { data: MenuItemList[] };

const SubMenu = (item: MenuItemList) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
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
  return (
    <div className={`${styles.container} ${styles.mainMenu}`}>
      <nav>
        <ul className={styles.list}>
          {data.map(i => {
            if (i.submenu) return SubMenu(i);
            return (
              <li key={i.id} className={styles.item}>
                <Link href={i.link}>{i.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <SearchInput />
    </div>
  );
}
