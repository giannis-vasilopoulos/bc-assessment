import styles from "@/styles/Home.module.css";
import News from "@/assets/svg/news.svg";
import { Card, CardMobile } from "@/components/molecules";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { SwiperClass } from "swiper/react";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import ArrowLeft from "@/assets/svg/arrow-left.svg";
import { useCallback, useState } from "react";
import { Slider } from "@/components/organisms";

type HomeProps = {
  articles: { id: number; title: string; photo_url: string }[];
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

//TODO move localhost api to client side ?
// Enhanche api setup with handler
// graphql task

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

        {/* <mobileAdslot1
          className={classNames(styles.slotAdd, styles.mobileSlot1)}
          suppressHydrationWarning
        ></mobileAdslot1> */}
      </main>
    </>
  );
}
