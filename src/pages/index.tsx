import styles from "@/styles/Home.module.css";
import News from "@/assets/svg/news.svg";
import Person from "@/assets/svg/person.svg";
import { Pill } from "@/components/atoms";

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/main-layout");
    const serverData = await res.json();
    return { props: { serverData } };
  } catch (error) {
    throw new Error("error on initial data");
  }
}

export default function Home() {
  return (
    <>
      <main className={styles.main} style={{ height: "150vh" }}>
        <div className={styles.breakingNews}>
          <div className={styles.container}>
            <News />
            <div className={styles.newsList}>
              <p>Breaking News</p>
              <p>OMG! Donnaruma to potentially miss the WC</p>
            </div>
          </div>
        </div>

        <div className={styles.featuredArticles}>
          <article
            className={styles.card}
            style={{ backgroundImage: `url(/assets/article-image.jpeg)` }}
          >
            <Pill text="Generic" className={styles.pillStyles} />
            <h1>The article headline goes here</h1>
            <div className={styles.author}>
              <Person />
              <span>By James Doe</span>
            </div>
          </article>
          <article
            className={styles.card}
            style={{ backgroundImage: `url(/assets/article-image.jpeg)` }}
          >
            <Pill text="Generic" className={styles.pillStyles} />
            <h1>The article headline goes here</h1>
            <div className={styles.author}>
              <Person />
              <span>By James Doe</span>
            </div>
          </article>
          <article
            className={styles.card}
            style={{ backgroundImage: `url(/assets/article-image.jpeg)` }}
          >
            <Pill text="Generic" className={styles.pillStyles} />
            <h1>The article headline goes here</h1>
            <div className={styles.author}>
              <Person />
              <span>By James Doe</span>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
