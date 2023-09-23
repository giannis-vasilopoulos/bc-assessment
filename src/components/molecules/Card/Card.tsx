import Person from "@/assets/svg/person.svg";
import { Pill } from "@/components/atoms";
import styles from "./Card.module.css";
import classNames from "classnames";

type CardTypes = {
  className: string;
  title: string;
  appearance: "featured" | "secondary";
};

export function Card({ className, appearance, title }: CardTypes) {
  return (
    <article
      className={classNames(styles.card, className)}
      style={{ backgroundImage: `url(/assets/article-image.jpeg)` }}
    >
      <Pill text="Generic" className={styles.pillStyles} />
      {appearance === "featured" && (
        <h1>
          <a href="#">{title}</a>
        </h1>
      )}
      {appearance === "secondary" && (
        <h3>
          <a href="#">{title}</a>
        </h3>
      )}
      <div className={styles.author}>
        <Person />
        <a href="#author">
          <span>By James Doe</span>
        </a>
      </div>
    </article>
  );
}
