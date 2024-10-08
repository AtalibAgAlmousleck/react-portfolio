import React from 'react'
import './experience.css'
import { BiCodeAlt } from 'react-icons/bi'
import { IoLanguage } from "react-icons/io5";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
               <div>
               <h4>HTML/CSS/JS</h4>
              <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>Flutter</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>Dart</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>Golang</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>Nodejs</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* Database start */}
        <div className="experience__backend">
          <h3>Databases</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiCodeAlt className='experience__details-icon' />
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          </div>
          {/* Databases ended */}

        <div className="experience__backend">
          <h3>Spoking Languages</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <IoLanguage className='experience__details-icon' />
              <div>
              <h4>English</h4>
              <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
            <IoLanguage className='experience__details-icon' />
              <div>
              <h4>French</h4>
              <small className='text-light'>Fluent</small>
              </div>
            </article>
            <article className='experience__details'>
            <IoLanguage className='experience__details-icon' />
              <div>
              <h4>Chinese</h4>
              <small className='text-light'>Good</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;