import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './sections/Contact'
import Gallery from './sections/Gallery'
import { Hero } from './sections/Hero'
import Pricing from './sections/Pricing'
import Services from './sections/Services'
import Testimonial from './sections/Testimonial'
import WhyChoose from './sections/WhyChoose'

function App() {
 

  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <Pricing />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact  />
      <Footer />
    </>
  )
}

export default App
