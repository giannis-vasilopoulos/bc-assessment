import { SearchInput } from "@/components/molecules/SearchInput";
import styles from "./MainMenu.module.css";
import Arrow from "@/assets/svg/arrow-down.svg";
import { useState } from "react";

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
          <li className={styles.item}>Livescore</li>
          <li
            className={styles.item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Competities <Arrow />
            {isDropdownVisible && (
              <ul>
                <li>sub menu 1</li>
                <li>sub menu 2</li>
                <li>sub menu 3</li>
              </ul>
            )}
          </li>
          <li className={styles.item}>News</li>
          <li className={styles.item}>Bookmakers</li>
          <li className={styles.item}>
            Teams <Arrow />
          </li>
        </ul>
      </nav>
      <SearchInput />
    </div>
  );
}
