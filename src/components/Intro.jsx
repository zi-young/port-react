import React from "react";
import intro from "../assets/img/intro.gif";
import { Link } from 'react-scroll'; // react-scroll에서 필요한 부분 

const Intro = () => {

    const linkStyle = {
        textDecoration: "underline",
        color: "#F94A36",
        cursor: "pointer"
    };
    const linkStyle2 = {
        marginTop: "0.2rem",
    };

    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="img">
                    <img src={intro} alt="어바웃" />
                </div>
                <div className="intro__text">
                    <h2 className="intro__title animate__animated animate__slow animate__infinite animate__bounce">jiyoung Portfloio</h2>
                    <div className="text">
                        <p>Frontend Developer</p>
                        <p style={linkStyle2}>
                            Click here to know{' '}
                            <Link
                                activeClass="active"
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                style={linkStyle}
                            >
                                About me
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;