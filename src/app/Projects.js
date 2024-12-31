"use client";

import projectsStyles from "./styles/sectionStyles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  const slideData = [
    {
      id: 1,
      text: "테스트 테스트1",
    },
    {
      id: 2,
      text: "테스트 테스트2",
    },
    {
      id: 3,
      text: "테스트 테스트3",
    },
    {
      id: 4,
      text: "테스트 테스트4",
    },
    {
      id: 5,
      text: "테스트 테스트5",
    },
  ];
  return (
    <section className={projectsStyles.projects}>
      <p className={projectsStyles.projectsTop}>Projects</p>
      <div className={projectsStyles.projectsContainer}>
        <div className={projectsStyles.projectsWrapper}>
          <p>TodayTrip</p>
          <div>
            <div>IMG</div>
            <div>about</div>
            <div>skills</div>
          </div>
        </div>
        <div className={projectsStyles.projectsWrapper}>
          <p>Jawstify</p>
          <div>
            <div>IMG</div>
            <div>about</div>
            <div>skills</div>
          </div>
        </div>
        <div className={projectsStyles.projectsWrapper}>
          <p>OpenMind</p>
          <div>
            <div>IMG</div>
            <div>about</div>
            <div>skills</div>
          </div>
        </div>
      </div>
      <div className="swiper-container">
        <Swiper
          loop={true} // 슬라이드 루프
          spaceBetween={50} // 슬라이스 사이 간격
          slidesPerView={3} // 보여질 슬라이스 수
          navigation={true} // prev, next button
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
          }}
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div>
                <div>{slide.text}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
