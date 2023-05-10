import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/photography/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';

const App = () => {
  const {themeState} = useThemeContext();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <FAQs/>
        <Contact/>
        <Footer/>
        <Theme/>
        {/* <FloatingNav/> */}
    </main>
  )
}

export default App