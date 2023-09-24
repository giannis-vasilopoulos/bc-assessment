import { AuthorLabel, Pill } from "@/components/atoms";
import { CSSProperties } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.css";

type SliderProps = {
  sliderStyles?: CSSProperties;
  handleSwiperInstance: (swiper: SwiperClass) => void;
  slides: { id: number; title: string }[];
};

export function Slider({
  handleSwiperInstance,
  sliderStyles,
  slides
}: SliderProps) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      onSwiper={(swiper: SwiperClass) => handleSwiperInstance(swiper)}
      style={sliderStyles}
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
      {slides.map((a, i) => {
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
  );
}
