import { useEffect } from 'react'
import HeaderImage from '../../assets/selfie.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" title="I'm not shady, the sun was in my eyes" />
        </div>
        <h3 data-aos="fade-up">Brendan Bryan</h3>
        <p data-aos="fade-up">
        I'm not a typical Software Developer. As a Professional Computer Scientist <br/> 
        with a passion for art, I am constantly striving to excel at melding those <br/>
        two worlds. Coding and design are my forte, always with an Eye for detail. <br/><br/>
        .NET Developers <a href="https://www.freecodecamp.org/certification/Bee4Brendan/foundational-c-sharp-with-microsoft?fbclid=IwAR0Zb5i7qaop8ClE_n6NIGNLPfQURjMphLxWBQ0LqKS-EbqZ-isyTl2vf_Q" target="_blank"><h3 className="link">C#</h3></a> "See Sharp"
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
        <h3 className="username">@Bee4Brendan </h3>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header