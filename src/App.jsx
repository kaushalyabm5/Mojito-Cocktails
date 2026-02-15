import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll';





gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

  return (

    <SmoothScroll>
      <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
      
    </main>
    </SmoothScroll>
    
    
  )
}

export default App