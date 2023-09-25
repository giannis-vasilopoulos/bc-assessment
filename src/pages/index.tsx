import styles from "@/styles/Home.module.css";
import News from "@/assets/svg/news.svg";
import { Card, ListCard, CardMobile } from "@/components/molecules";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { SwiperClass } from "swiper/react";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import ArrowLeft from "@/assets/svg/arrow-left.svg";
import { useCallback, useState } from "react";
import { Slider } from "@/components/organisms";
import graphqlClient from "@/utils/graphqlClient";

type ListArticle = { id: number; title: string; user: { name: string } };
type HomeProps = {
  articles: { id: number; title: string; photo_url: string }[];
  listArticles: {
    featuredArticles: { data: ListArticle[] };
    sliderArticles: { data: ListArticle[] };
    restArticles: { data: ListArticle[] };
  };
};

export const getStaticProps = async () => {
  const query = `
      query {
        featuredArticles: posts(options: { paginate: { limit: 5, page: 1 } }) {
          data {
            id
            title
            user {
              name
            }
          }
        }
        sliderArticles: posts(options: { paginate: { limit: 5, page: 2 } }) {
          data {
            id
            title
            user {
              name
            }
          }
        }
        restArticles: posts(options: { paginate: { limit: 10, page: 3 } }) {
          data {
            id
            title
            user {
              name
            }
          }
        }
      }
    `;

  try {
    const [mainLayout, articles] = await Promise.all([
      graphqlClient(query),
      fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
    ]);
    return {
      props: {
        articles: (await articles.json()).blogs,
        listArticles: (await mainLayout.json()).data
      },
      revalidate: 60
    };
  } catch (error) {
    throw new Error("error on initial data");
  }
};

// graphql task

export default function Home({ articles, listArticles }: HomeProps) {
  const [first, second, third, ...restArticles] = articles;
  const { featuredArticles } = listArticles;
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const { isMobile } = useScreenDetector();

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <main className={styles.main}>
        {/* <adslot1
          className={classNames(styles.slotAdd, styles.slot1)}
          suppressHydrationWarning
        ></adslot1> */}
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
            if (i !== 0 && isMobile)
              return (
                <CardMobile key={a.id} title={a.title} image={a.photo_url} />
              );

            return (
              <Card
                key={a.id}
                appearance={i === 0 ? "featured" : "secondary"}
                className={styles.card}
                title={a.title}
                image={a.photo_url}
              />
            );
          })}
        </div>

        <section>
          <div className={styles.sliderTitle}>
            <h2>Populair</h2>
            <div className={styles.arrowSection} onClick={handlePrev}>
              <ArrowLeft />
            </div>
            <div className={styles.arrowSection} onClick={handleNext}>
              <ArrowRight />
            </div>
          </div>
          <Slider
            handleSwiperInstance={setSwiperRef}
            slides={restArticles}
            sliderStyles={isMobile ? { marginRight: "-0.5rem" } : undefined}
          />
        </section>

        <section className={styles.articlesWithSidebar}>
          <div className={styles.listArticles}>
            <h2>Vandaag 11 April 2022</h2>
            <div className={styles.listArticlesContainer}>
              {featuredArticles.data.map(a => {
                return (
                  <ListCard
                    key={a.id}
                    title={a.title}
                    image="/assets/article-image.jpeg"
                  />
                );
              })}
            </div>
          </div>
          <aside>
            <h3>Top 3 Bookmakers</h3>
          </aside>
        </section>

        {/* <mobileAdslot1
          className={classNames(styles.slotAdd, styles.mobileSlot1)}
          suppressHydrationWarning
        ></mobileAdslot1> */}
      </main>
    </>
  );
}
