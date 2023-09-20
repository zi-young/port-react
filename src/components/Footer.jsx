import React from "react";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>park-jiyoung</span>
                    <span>© portfolio</span>
                </div>

                <div className="footer__right">
                    © 2023 jiyoung-portfolio<br />
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div> 
        </footer>
    );
};

export default Footer;