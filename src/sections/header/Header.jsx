import { useEffect, useRef } from 'react'
import HeaderImage from '../../assets/selfie5.jpeg'
// import HeaderTitle from '../../assets/8bit-1.png'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'
import Typed from 'typed.js'

const Header = () => {

  const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    AOS.init({duration: 2000});

    const options = {
    	strings: ['Software Developer', 'Photographer', 'Front-End Web Developer', 'Application Developer', 'Back-End Web Developer'],
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
    }
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait"/>
        </div>
        {/* <h2 data-aos="flip-right">Brendan Bryan</h2> */}
        <div><h2-typed ref={el}></h2-typed></div>
        {/* <img style={{width: '150px'}} className="btn sm header__title" src={HeaderTitle} data-aos="flip-right" alt="Header Title"/> */}
          <p data-aos="fade-up">
          As a Professional Computer Scientist 
          with a passion for art, I am constantly striving to excel at melding those 
          two worlds. Coding and design are my forte, always with an Eye for detail. <br/>
          </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn-header'>My Work</a>
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