import AboutImage from '../../assets/portraits/Bee4Brendan.png'
import Resume from '../../assets/docs/brendansresume.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

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
                      In my decade long career as a Computer Scientist, I have accumulated experience with .NET, Android, Azure, Bash,
                      C, CSS, C#, C++, Eclipse, Git, Github, HTML, Java, JavaScript, Jira, Packer, PHP, ReactJS, SQL, TFS, TypeScript,
                      Visual Studio, WPF, XML, XAML & More...
                  </p>
                  <p>
                      I have designed, developed, and tested code for the Boeing E-3 Sentry <strong>AWACS</strong> as well as flight
                      simulations for the Boeing E-6B Mercury <strong>TACAMO</strong> in just a few, short years. There is no part of
                      the Software Development Life Cycle that I have not participated in.
                  </p>
                  <a href={Resume} download className="btn primary">
                      Download Resumé <HiDownload />
                  </a>
              </div>
          </div>
      </section>
  );
}

export default About