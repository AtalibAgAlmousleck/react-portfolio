import React from 'react';
import './about.css';
import AG from '../../assets/ag.jpg'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FiUsers } from 'react-icons/fi'
import { AiFillProject } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={AG} alt="About Me" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <HiOutlineDesktopComputer className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            {/* Second article */}
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>
            {/* Third article */}
            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>63+ Projects</small>
            </article>
          </div>

          <p>I will provide you with the technical skills you need for your project to succeed. 
            I will create and deliver the project according to your specifications and provide 
            you with high-level, comprehensible updates along the way. I pride myself on my 
            communication skills and personability so I look forward to talking to you to establish 
            a long-standing relationship. I am a full-time freelancer so 
            I will respond within 24hrs. Reach out so I can help your business succeed.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;