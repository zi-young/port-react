import React, { useRef } from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
// import Skill from "../components/Skill";
import Site from "../components/Site";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";
import arrow from "../assets/img/icon_arrow_down.svg"
import "../assets/scss/style.scss"
import Cursor from "../components/Cursor"; 


const HomeView = () => {
  const flowerTextRef = useRef(null);
     const scrollToTop = () => {
        window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "smooth",
      });
    };
    

  return (
    <div className="body__banner">
      <div className="banner">
        <Skip />
        <Header />
        <Main>
          <Intro />
          {/* <Skill /> */}
          <Site />
          <Contact />
        </Main>
        <Cursor />
        <div className="flowerText" onClick={scrollToTop} ref={flowerTextRef}>
          <div className="fill-text">
            <img src={arrow} alt="arrow" />
          </div>
          <div className="rotate">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="194.03" viewBox="0 0 194.03 194.03">
              <defs><clipPath id="a"><rect width="194.03" height="194.03" fill="#ebbed6"></rect></clipPath>
              </defs>
              <g clip-path="url(#a)"><path d="M194,97a25.26,25.26,0,0,0-21.38-25l-11.16-1.74,6.66-9.13a25.27,25.27,0,0,0-35.3-35.31l-9.13,6.67L122,21.38a25.27,25.27,0,0,0-49.93,0L70.31,32.54l-9.13-6.67a25.27,25.27,0,0,0-35.31,35.3l6.67,9.14L21.38,72.05a25.27,25.27,0,0,0,0,49.93l11.16,1.73-6.66,9.14a25.26,25.26,0,0,0,35.3,35.3l9.13-6.67,1.74,11.17a25.27,25.27,0,0,0,49.93,0l1.74-11.17,9.13,6.67a25.26,25.26,0,0,0,35.3-35.3l-6.66-9.14L172.65,122A25.27,25.27,0,0,0,194,97" fill="#ebbed6"></path>
              </g>
            </svg>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeView;