import styles from "@/styles/Home.module.css";
import News from "@/assets/svg/news.svg";
import { Card, CardMobile } from "@/components/molecules";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { AuthorLabel, Pill } from "@/components/atoms";
import classNames from "classnames";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import ArrowLeft from "@/assets/svg/arrow-left.svg";
import { useCallback, useState } from "react";

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
    console.log(error);
    // throw new Error("error on initial data");
  }
};

export default function Home({ articles }: HomeProps) {
  const [first, second, third, ...restArticles] = articles;
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
      <main className={styles.main} style={{ height: "150vh" }}>
        <adslot1
          className={classNames(styles.slotAdd, styles.slot1)}
          suppressHydrationWarning
        ></adslot1>
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
              return <CardMobile key={a.id} title={a.title} />;

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
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            onSwiper={setSwiperRef}
            style={isMobile ? { marginRight: "-0.5rem" } : undefined}
            breakpoints={{
              320: {
                slidesPerView: 1.3
              },
              768: {
                slidesPerView: 3.3
              },
              1024: {
                slidesPerView: 4.3
              }
            }}
          >
            {restArticles.map((a, i) => {
              return (
                <SwiperSlide key={a.id}>
                  <article className={styles.slideArticle}>
                    <div
                      className={styles.slideImage}
                      style={{
                        backgroundImage: `url(/assets/article-image.jpeg)`
                      }}
                    >
                      <Pill
                        text={i === 0 ? "Breaking" : "Generic"}
                        appearance={i === 0 ? "secondary" : "primary"}
                      />
                    </div>
                    <h4>{a.title}</h4>
                    <AuthorLabel link="#author" label="By James Doe" dark />
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <mobileAdslot1
          className={classNames(styles.slotAdd, styles.mobileSlot1)}
          suppressHydrationWarning
        ></mobileAdslot1>
      </main>
    </>
  );
}
