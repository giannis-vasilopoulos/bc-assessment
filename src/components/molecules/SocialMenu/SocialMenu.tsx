import classNames from "classnames";
import Facebook from "@/assets/svg/facebook.svg";
import Twitter from "@/assets/svg/twitter.svg";
import Instagram from "@/assets/svg/instagram.svg";
import styles from "./SocialMenu.module.css";

export function SocialMenu({ className }: { className?: string }) {
  return (
    <div>
      <ul className={classNames(styles.menuList, className)}>
        <li>
          <a
            href="https://facebook.com"
            target="blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
}
