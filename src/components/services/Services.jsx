import React from 'react'
import './services.css'
import { MdDesignServices } from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Do</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        
        {/* Second article */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web & Mobile Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Develop and maintained scalable backend solutions for Web and Mobile Apps.</p>
            </li>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Collaborated with cross-functional teams to define project requirements and specifications.</p>
            </li>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Troubleshot and resolved backend issues and bugs in a timely manner.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Do professional industrial design and product development</p>
            </li>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Develop concepts for client products.</p>
            </li>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Design and development any product prototype for client.</p>
            </li>
          </ul>
        </article>
        {/* Second article */}
        <article className='service'>
          <div className='service__head'>
            <h3>Rest APIs & Database</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Designed and implemented RESTfull APIs and web services.</p>
            </li>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Optimized database queries and performance for improved system efficiency.</p>
            </li>
            <li>
              <MdDesignServices className='service__list-icon' />
              <p>Conducted code reviews and provide constructive feedback to team members.</p>
            </li>
          </ul>
        </article>
        {/* Second article */}
      </div>
    </section>
  )
}

export default Services