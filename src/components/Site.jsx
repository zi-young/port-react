import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/scss/section/_site.scss"; // SCSS 파일을 import합니다.
import { Pagination } from "swiper/modules";

// import computer from "../assets/img/computer.png";
import nextjs from "../assets/img/nextjs.png";
import react_shop from "../assets/img/react_shop.png";
import movie from "../assets/img/movie.png";
import responsive from "../assets/img/responsive-web.png";
import HTML from "../assets/img/HTML.png";
import bootstrap from "../assets/img/bootstrap.png";

import htmlImage from "../assets/skills/HTML.svg";
import bootstrapImage from "../assets/skills/Bootstrap.svg";
import cssImage from "../assets/skills/CSS.svg";
import scssImage from "../assets/skills/Sass.svg";
import JavaScriptImage from "../assets/skills/JavaScript.svg";
import JQueryImage from "../assets/skills/JQuery.svg";
import reactImage from "../assets/skills/React-Dark.svg";
import NextJS from "../assets/skills/NextJS.svg";

import arrow from "../../src/assets/img/arrowprev.png";

export default function App() {
  const slides = [
    {
      image: nextjs,
      description1: "next.js를 사용한 여행 사이트",
      description2: "mongoDB를 활용하여 Cart, Notice기능을 구현하였고, Next-Auth를 이용해서 로그인 기능을 추가했습니다.",
      tools: [NextJS, cssImage],
      code: "https://github.com/zi-young/shopping",
      view: "https://shopping-w9gw.vercel.app/",
    },
    {
      image: react_shop,
      description1: "react를 사용한 굿즈샵 ",
      description2: "데이터베이스를 활용해서 업로드 기능을 구현하였고, vercel을 사용해 배포하였습니다.",
      tools: [reactImage, scssImage],
      code: "https://github.com/zi-young/shop-test",
      view: "https://shop-test-1.vercel.app/",
    },
    {
      image: movie,
      description1:
        "API를 사용한 무비사이트 ",
      description2:
        "영화 API 데이터를 불러와서 적용시킨 사이트입니다.",
      tools: [reactImage, scssImage],
      code: "https://github.com/zi-young/moviesList",
      view: "https://zi-young.github.io/moviesList/",
    },
    {
      image: responsive,
      description1:
        "공간기록 반응형 클론코딩",
      description2:
        "HTML과 CSS를 활용해서 반응형으로 디자인하였으며, JQuery로 슬라이드를 추가했습니다.",
      tools: [htmlImage, JQueryImage, cssImage],
      code: "https://github.com/zi-young/Responsive-site",
      view: "https://zi-young.github.io/Responsive-site/",
    },
    {
      image: bootstrap,
      description1: "부트스트랩을 사용한 반응형 쇼핑몰",
      description2: "bootstrap 라이브러리를 활용해서 반응형으로 디자인하였으며, Kakao와 날씨 API를 이용해서 모달창으로 보여지게 구현하였습니다. ",
      tools: [bootstrapImage, cssImage],
      code: "https://github.com/zi-young/bootstrap-site",
      view: "https://zi-young.github.io/bootstrap-site/",
    },
    {
      image: HTML,
      description1:
        "관공서 프로젝트",
      description2:
        "HTML과 CSS를 사용하여 디자인하였으며, JavaScript를 이용해 슬라이드를 구현하였습니다.",
      tools: [htmlImage, cssImage, JavaScriptImage],
      code: "https://github.com/zi-young/html-site",
      view: "https://zi-young.github.io/html-site/",
    },
  ];

  const [description1, setDescription1] = useState(slides[0].description1);
  const [description2, setDescription2] = useState(slides[0].description2);
  const [tools, setTools] = useState(slides[0].tools);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = slides[swiper.realIndex];
    setDescription1(currentSlide.description1);
    setDescription2(currentSlide.description2);
    setTools(currentSlide.tools);
    setCurrentSlide(currentSlide);
  };
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div id="site">
      <div className="site__inner">
        <div className="swiper__box">
          <div className="arrow__box">
            <div className="arrowleft__img" onClick={goToPrevSlide}>
              <img src={arrow} alt="arrowleft__img" />
            </div>
            <div className="arrowright__img" onClick={goToNextSlide}>
              <img src={arrow} alt="arrowright__img" />
            </div>
          </div>
          <Swiper
            ref={swiperRef} // swiperRef를 연결합니다.
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              type: "fraction",
            }}
            modules={[Pagination]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 5000 }}
            loop={true}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                  <div className="project__box">
                    <img src={slide.image} alt={`Slide ${index + 1}`} />
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination__box">
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="slide-description">
          <div className="toolBox">
            <p>USE TOOL</p>
            <div className="tool-images">
              {tools.map((tool, index) => (
                <img key={index} src={tool} alt={`Tool ${index + 1}`} />
              ))}
            </div>
            <p className="projectTitle">작업 기여도 : 100%</p>
            <div className="description description1">{description1}</div>
            <div className="description">{description2}</div>
            <div className="btn">
              {currentSlide.code && (
                <a
                  href={currentSlide.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  code
                </a>
              )}
            </div>
            <div className="btn">
              {currentSlide.view && (
                <a
                  href={currentSlide.view}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
