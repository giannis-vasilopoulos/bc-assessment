import { AuthorLabel, Pill } from "@/components/atoms";
import styles from "./Card.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CardMobileTypes = {
  title: string;
  image: string | StaticImport;
};

export function CardMobile({ title, image }: CardMobileTypes) {
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
        <figure>
          <Image
            src={image}
            alt="article image"
            width={75}
            height={50}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
              display: "block"
            }}
          />
        </figure>
      </div>
    </article>
  );
}
