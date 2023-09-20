import React, { useState, useEffect } from 'react';
import aboutme from '../assets/img/1.jpg';
import htmlImage from '../assets/skills/HTML.svg'
import bootstrapImage from '../assets/skills/Bootstrap.svg'
import scssImage from '../assets/skills/Sass.svg'
import JavaScriptImage from '../assets/skills/JavaScript.svg'
import JQueryImage from '../assets/skills/JQuery.svg'
import reactImage from '../assets/skills/React-Dark.svg'
import vueImage from '../assets/skills/Vue.svg'
import TypeScriptImage from '../assets/skills/TypeScript.svg'
import NodeJSImage from '../assets/skills/NodeJS-Dark.svg'
import FigmaImage from '../assets/skills/Figma-Light.svg'
// import gitImage from '../assets/skills/Git.svg'
import NextJS from '../assets/skills/NextJS.svg'

function Skill() {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const moveText = () => {
      setLeft((prevLeft) => {
        const maxWidth = window.innerWidth; // 화면 너비를 최대 범위로 사용
        return prevLeft + 1 > maxWidth ? -200 : prevLeft + 1;
      });
    };

    const intervalId = setInterval(moveText, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <section id="skill">
      <div className="aboutme__box">
        <div className="img__box">
          <img src={aboutme} alt="aboutme" />
        </div>
        <div className="name__box">
          <h1 className='name'>박지영
          <span className='name2'>입니다 💁🏻‍♀️</span>
          </h1>
          <p>1996.12.21</p>
          <p>010-3552-4191</p>
          <div className="skill__box">
             <div className='svg__box'>
               <img src={bootstrapImage} alt="Bootstrap" />
               <img src={scssImage} alt="scssImage" />
               <img src={htmlImage} alt="htmlImage" />
               <img src={JavaScriptImage} alt="JavaScriptImage" />
               <img src={JQueryImage} alt="JQueryImage" />
               <img src={reactImage} alt="reactImage" />
               <img src={vueImage} alt="vueImage" />
               <img src={TypeScriptImage} alt="TypeScriptImage" />
               <img src={NodeJSImage} alt="NodeJSImage" />
               <img src={NodeJSImage} alt="NodeJSImage" />
               <img src={FigmaImage} alt="FigmaImage" />
               <img src={NextJS} alt="NextJS" />
             </div>
          </div>


        </div>
      </div>
      <div className="moving-text">
        <p className="full-width-text" style={{ transform: `translateX(${left}rem)` }}>JIYOUNG PORTFLOIO </p>
        <p className="full-width-text" style={{ transform: `translateX(${left}rem)` }}>JIYOUNG PORTFLOIO </p>
        <p className="full-width-text" style={{ transform: `translateX(${left}rem)` }}>JIYOUNG PORTFLOIO </p>
        <p className="full-width-text" style={{ transform: `translateX(${left}rem)` }}>JIYOUNG PORTFLOIO </p>
      </div>
      <div className="moving-text2">
        <p className="full-width-text2" style={{ transform: `translateX(${left}rem)` }}>Frontend Developer </p>
        <p className="full-width-text2" style={{ transform: `translateX(${left}rem)` }}>Frontend Developer </p>
        <p className="full-width-text2" style={{ transform: `translateX(${left}rem)` }}>Frontend Developer </p>
        <p className="full-width-text2" style={{ transform: `translateX(${left}rem)` }}>Frontend Developer </p>
      </div>
    </section>
  );
}

export default Skill;