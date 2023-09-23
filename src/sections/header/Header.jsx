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
        I'm not a typical Software Developer. As a professional Computer Scientist with a passion for art, I am constantly striving to excel at melding those two worlds. Coding and design are my forte, always with an eye for detail.  
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
        <h4 data-aos="fade-up">@Bee4Brendan</h4>
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header