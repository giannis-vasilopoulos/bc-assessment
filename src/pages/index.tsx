import styles from "@/styles/Home.module.css";
import News from "@/assets/svg/news.svg";
import { Card, CardMobile } from "@/components/molecules";
import { useScreenDetector } from "@/hooks/useScreenDetector";

type HomeProps = {
  articles: { id: number; title: string }[];
};

export const getStaticProps = async () => {
  try {
    const [mainLayout, articles] = await Promise.all([
      fetch("http://localhost:3000/api/main-layout"),
      fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
    ]);
    return {
      props: {
        serverData: await mainLayout.json(),
        articles: (await articles.json()).blogs
      },
      revalidate: 60
    };
  } catch (error) {
    throw new Error("error on initial data");
  }
};

export default function Home({ articles }: HomeProps) {
  const [first, second, third, ...rest] = articles;
  const { isMobile } = useScreenDetector();

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
          {[first, second, third].map((a, i) => {
            if (i !== 0 && isMobile) return <CardMobile />;

            return (
              <Card
                key={a.id}
                appearance={i === 0 ? "featured" : "secondary"}
                className={styles.card}
                title={a.title}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
