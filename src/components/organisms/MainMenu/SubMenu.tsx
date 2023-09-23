import { useRouter } from "next/router";
import Arrow from "@/assets/svg/arrow-down.svg";
import { useEffect, useState } from "react";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import Link from "next/link";
import styles from "./MainMenu.module.css";
import { MenuItemList } from "./MainMenu.types";

const SubMenu = ({ item }: { item: MenuItemList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isDesktop } = useScreenDetector();

  const handleMouseEnter = () => {
    isDesktop && setIsOpen(true);
  };

  const toggleMobileSubMenu = () => {
    !isDesktop && setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    isDesktop &&
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
  };

  useEffect(() => {
    if (!isDesktop) {
      router.events.on("routeChangeStart", () => setIsOpen(false));

      return () => {
        router.events.off("routeChangeStart", () => setIsOpen(false));
      };
    }
  }, [router, isDesktop]);

  return (
    <>
      <li
        className={styles.item}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleMobileSubMenu}
      >
        {item.title}&nbsp;
        <Arrow />
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

export default SubMenu;
