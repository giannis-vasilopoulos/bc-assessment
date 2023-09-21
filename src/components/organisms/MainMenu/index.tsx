import { SearchInput } from "@/components/molecules/SearchInput";
import styles from "./MainMenu.module.css";
import Arrow from "@/assets/svg/arrow-down.svg";
import Link from "next/link";
import { useState } from "react";

export function MainMenu() {
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
    <div className={`${styles.container} ${styles.mainMenu}`}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">Livescore</Link>
          </li>
          <li
            className={styles.item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Competities <Arrow />
            {isOpen && (
              <ul className={styles.submenu}>
                <li>
                  <Link href="/">sub menu 1</Link>
                </li>
                <li>
                  <Link href="/">sub menu 2</Link>
                </li>
                <li>
                  <Link href="/">sub menu 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.item}>
            <Link href="/">News</Link>
          </li>
          <li className={styles.item}>
            <Link href="/">Bookmakers</Link>
          </li>
          <li className={styles.item}>
            Teams <Arrow />
          </li>
        </ul>
      </nav>
      <SearchInput />
    </div>
  );
}
