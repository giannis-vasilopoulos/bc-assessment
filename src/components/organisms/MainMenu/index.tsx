import { SearchInput } from "@/components/molecules/SearchInput";
import styles from "./MainMenu.module.css";
import Arrow from "@/assets/svg/arrow-down.svg";
import { useState } from "react";
import Link from "next/link";

export function MainMenu() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
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
            {isDropdownVisible && (
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
