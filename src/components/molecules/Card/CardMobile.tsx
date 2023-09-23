import { AuthorLabel, Pill } from "@/components/atoms";
import styles from "./Card.module.css";
import Image from "next/image";

type CardMobileTypes = {
  title: string;
};

export function CardMobile({ title }: CardMobileTypes) {
  return (
    <article className={styles.cardMobile}>
      <div className={styles.topbar}>
        <Pill text="Podcast" appearance="alt" />

        <AuthorLabel link="#author" label="By James Doe" dark />
      </div>
      <div className={styles.titleSection}>
        <h3>
          <a href="#">{title}</a>
        </h3>
        <div>
          <Image
            src="/assets/article-image.jpeg"
            alt="article image"
            width={75}
            height={50}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
              display: "block"
            }}
          />
        </div>
      </div>
    </article>
  );
}
