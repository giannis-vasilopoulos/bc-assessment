import Person from "@/assets/svg/person.svg";
import styles from "./Author.module.css";
import classNames from "classnames";

type AuthorLabelProps = {
  link: string;
  label: string;
  dark?: boolean;
};

export function AuthorLabel({ link, label, dark = false }: AuthorLabelProps) {
  return (
    <div className={classNames(styles.author, dark && styles.dark)}>
      <Person />
      <a href={link}>
        <span>{label}</span>
      </a>
    </div>
  );
}
