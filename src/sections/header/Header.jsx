import { useEffect, useRef } from "react";
import HeaderImage from "../../assets/portraits/about3.jpeg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import Typed from "typed.js";

const Header = () => {
    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 2000 });

        const options = {
            strings: [
                "Design Engineer",
                "UI Developer",
                "Front-End Web Developer",
                "Software Developer",
                "Back-End Web Developer",
                "Photographer",
            ],
            loop: true,
            showCursor: true,
            typeSpeed: 70,
            backSpeed: 30,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        };
    }, []);

    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__profile" data-aos="fade-in">
                    <img src={HeaderImage} alt="Header Portait" />
                </div>
                <div>
                    <h2-typed ref={el}></h2-typed>
                </div>
                {/* <img style={{width: '150px'}} className="btn sm header__title" src={HeaderTitle} data-aos="flip-right" alt="Header Title"/> */}
                {/* <div className="streak" data-aos="slide-down" data-aos-duration="3000" data-aos-easing="ease-in-out"></div> */}
                <p className="header-bio" data-aos="fade-up" data-aos-duration="1200">
                    As a Professional Computer Scientist with a passion for art, I am constantly striving to excel at melding those two
                    worlds. Coding and design are my forte, always with an Eye for detail. <br />
                </p>
                <div className="header__cta">
                    <a href="#contact" className="btn-header">
                        Let's Talk
                    </a>
                    <a href="#projects" className="btn-header">
                        My Work
                    </a>
                </div>
                <div className="up-ticker-wrap">
                    <div className="up-ticker">
                        <span>@Bee4Brendan @Bee4Brendan @Bee4Brendan @Bee4Brendan @Bee4Brendan @Bee4Brendan @Bee4Brendan</span>
                    </div>
                </div>
                {/* <div className="down-ticker-wrap">
                    <div className="down-ticker">
                        <span>@Bee4Brendan @Bee4Brendan @Bee4Brendan @Bee4Brendan @Bee4Brendan @Bee4Brendan @Bee4Brendan</span>
                    </div>
                </div> */}
                <div className="header__socials">
                    {data.map((item) => (
                        <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
