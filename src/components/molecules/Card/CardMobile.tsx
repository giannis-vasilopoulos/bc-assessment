import { AuthorLabel, Pill } from "@/components/atoms";
import styles from "./Card.module.css";

export function CardMobile(params: type) {
  return (
    <article className={styles.cardMobile}>
      <div className={styles.topbar}>
        <Pill text="Podcast" appearance="alt" />

        <AuthorLabel link="#author" label="By James Doe" dark />
      </div>
      <div className={styles.titleSection}>
        <h3>
          <a href="#">This is a little bit longer article headline text</a>
        </h3>
      </div>
    </article>
  );
}
