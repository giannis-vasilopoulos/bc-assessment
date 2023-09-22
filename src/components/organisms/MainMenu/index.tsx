import { SearchInput } from "@/components/molecules/SearchInput";
import styles from "./MainMenu.module.css";
import Link from "next/link";
import { Fragment } from "react";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { MainMenuTypes } from "./MainMenu.types";
import SubMenu from "./SubMenu";

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
