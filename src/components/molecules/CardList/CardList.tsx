import { AuthorLabel, Pill } from "@/components/atoms";
import styles from "./CardList.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useScreenDetector } from "@/hooks/useScreenDetector";

type CardListTypes = {
  title: string;
  image: string | StaticImport;
  imageLeft?: boolean;
};

export function CardList({ title, image }: CardListTypes) {
  const { isDesktop } = useScreenDetector();
  return (
    <article className={styles.cardList}>
      <div>
        <Image
          src={image}
          alt="article image"
          width={isDesktop ? 100 : 77}
          height={isDesktop ? 51 : 70}
          style={{
            objectFit: "cover",
            borderRadius: "0.5rem",
            display: "block"
          }}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.topbar}>
          <Pill text="Generic" />
          <AuthorLabel link="#author" label="By James Doe" dark />
        </div>
        <div className={styles.titleSection}>
          <h5>
            <a href="#">{title}</a>
          </h5>
        </div>
      </div>
    </article>
  );
}
