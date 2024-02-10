import AboutImage from '../../assets/selfie1.jpg'
import Resume from '../../assets/brendansresume.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About" title="This is pretty old, but HQ" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                In my decade long career as a Computer Scientist, I have accumulated experience with .NET, Android, Azure, Bash, C, CSS, C#, C++, Eclipse, Git, Github, HTML, Java, JavaScript, Jira, Packer, PHP, SQL, TFS, Visual Studio, WPF, XML, XAML & More... 
                </p>
                <p>
                I have designed, developed, and tested code for the Boeing E-3 Sentry <strong>AWACS</strong> as well as flight simulations for the Boeing E-6B Mercury <strong>TACAMO</strong> in just a few, short years. There is no part of the Software Development Life Cycle that I have not participated in. 
                </p>
                <h3 className="vision">
                "VISION IS THE <a href="#testimonials"><h3 className="art__vision" >ART</h3></a> OF SEEING WHAT IS INVISIBLE TO OTHERS"
                </h3>
                <a href={Resume} download className='btn primary'>Download Resumé <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About