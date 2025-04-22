import { useEffect } from 'react'
import HeaderImage from '../../assets/selfie5.jpeg'
import HeaderTitle from '../../assets/8bit-1.png'
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
          <img src={HeaderImage} alt="Header Portait"/>
        </div>
        <h1-pixel data-aos="flip-right">Brendan Bryan</h1-pixel>
        {/* <img className="btn sm header__title" src={HeaderTitle} data-aos="flip-right" alt="Header Title"/> */}
          <p data-aos="fade-up">
          I'm not a typical Software Developer. As a Professional Computer Scientist 
          with a passion for art, I am constantly striving to excel at melding those 
          two worlds. Coding and design are my forte, always with an Eye for detail. <br/>
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