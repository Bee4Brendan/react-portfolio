import AboutImage from "../../assets/portraits/Bee4Brendan.png";
import Resume from "../../assets/docs/brendansresume.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
    return (
        <section id="about">
            <h2>Brendan Bryan </h2>
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About" />
                    </div>
                </div>
                <div className="about__right">
                    <div className="about__cards" data-aos="fade-up" data-aos-duration="1200">
                        {data.map((item) => (
                            <Card key={item.id} className="about__card">
                                <span className="about__card-icon">{item.icon}</span>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                    <p>
                        I chose Computer Science to appease my love of video games and my desire to create them. Spoiler Alert:
                        Oklahoma doesn't have many Game Studios. Because of this, I discovered a passion for Front-End Development and
                        Design.
                    </p>
                    <p>
                        Before I even conceived the idea of pursuing Computer Science, my talent as an artist was evident. Photography
                        was my initial creative outlet and I have always been fascinated by the intersection of art and technology.
                        Front-End Development is where I continue to express my creativity while also engaging in the technical
                        problem-solving that I love.
                    </p>
                    <a href={Resume} download className="btn primary">
                        Download Resumé <HiDownload />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
