"use client";

import projectsStyles from "./styles/sectionStyles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Projects() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  const slideData = [
    {
      id: 1,
      title: "TodayTrip",
      img: "/images/spongeandddung.jpg",
      about: "어떤 프로젝트다",
      skills: "어떤스킬,어떤스킬,어떤스킬",
    },
    {
      id: 2,
      title: "Jawstify",
      img: "/images/spongeandddung.jpg",
      about: "어떤 프로젝트다",
      skills: "어떤스킬,어떤스킬,어떤스킬",
    },
    {
      id: 3,
      title: "OpenMind",
      img: "/images/spongeandddung.jpg",
      about: "어떤 프로젝트다",
      skills: "어떤스킬,어떤스킬,어떤스킬",
    },
  ];
  return (
    <section className={projectsStyles.projects}>
      <p className={projectsStyles.projectsTop}>Projects</p>
      {/* <div className={projectsStyles.projectsContainer}>
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
      </div> */}
      <div className={projectsStyles.projectSwiperContainer}>
        <Swiper
          loop={true} // 슬라이드 루프
          spaceBetween={50} // 슬라이스 사이 간격
          slidesPerView={1} // 보여질 슬라이스 수
          navigation={true} // prev, next button
          autoplay={{
            delay: 500000000000000,
            disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
          }}
          className={projectsStyles.projectSwiper}
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={projectsStyles.projectWrapper}>
                <div>
                  <Image
                    src={slide.img}
                    alt="프로젝트사진"
                    width={450}
                    height={450}
                    className={projectsStyles.projectImg}
                  />
                </div>
                <div className={projectsStyles.projectContent}>
                  <div>{slide.title}</div>
                  <div>{slide.skills}</div>
                  <div>{slide.about}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
