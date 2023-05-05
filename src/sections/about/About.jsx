import AboutImage from '../../assets/about.jpg'
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
                    <img src={AboutImage} alt="About" title="This photo is pretty old" />
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
                Hi, my name is <mark>Brendan Bryan</mark> from Bethany, Oklahoma. I'm a Software Developer/Designer with a Bachelors degree in Computer Science from the ABET-accredited program at the <i>University of Central Oklahoma</i>. 
                </p>
                <p>
                In my decade long career as a Computer Scientist, I have accumulated experience with C#, .NET, WPF, C++, C, CSS, Java, JavaScript, .NET, SQL, XML, XAML, PHP, HTML, Vagrant, Packer, Azure Devops Server, TFS, Jira, Visual Studio, GitHub, Eclipse, Git, & More... 
                </p>
                <p>
                I have designed, developed, and tested code that is currently running on the Boeing E-3 Sentry <strong>AWACS</strong> as well as flight simulations for the Boeing E-6B Mercury <strong>TACAMO</strong> in just a few, short years. There is no part of the Software Development Life Cycle that I have not participated in. 
                </p>
                <p>
                If you like what you see, check out my resumé for more details!
                </p>
                <a href={Resume} download className='btn primary'>Download Resumé <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About