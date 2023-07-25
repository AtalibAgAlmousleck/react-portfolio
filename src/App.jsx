import React from 'react'
import './index.css'
import Headers from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
     <Headers />
     <Navbar />
     <About />
     <Experience />
     <Services />
     <Projects />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  )
}
export default App