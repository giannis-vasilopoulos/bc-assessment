import { AuthorLabel, Pill } from "@/components/atoms";
import styles from "./Card.module.css";
import classNames from "classnames";

type CardTypes = {
  className: string;
  title: string;
  appearance: "featured" | "secondary";
  image: string;
};

export function Card({ className, appearance, title, image }: CardTypes) {
  return (
    <article
      className={classNames(styles.card, className)}
      style={{ backgroundImage: `url(${image})` }}
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
      <AuthorLabel link="#author" label="By James Doe" />
    </article>
  );
}
