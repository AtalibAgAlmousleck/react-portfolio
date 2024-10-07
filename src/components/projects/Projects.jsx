import React from 'react'
import { BsGithub } from 'react-icons/bs'
import './project.css'
import WEB2 from '../../assets/web2.jpg'
import WEB3 from '../../assets/web3.jpg'
import FLUTTER from '../../assets/flutter.jpg'
import FLUTTER2 from '../../assets/ecom.png'
import EXPRESS2 from '../../assets/ecom1.png'
import SPRING from '../../assets/spring.png'
import EXPRESS from '../../assets/express.png'
import UI1 from '../../assets/ui1.png'

const data = [
  {
    id: 1,
    image: WEB3,
    title: 'Complete eCommerce application with Nodejs and Express',
    github: 'https://github.com/AtalibAgAlmousleck/Nodejs-Express-eCommerce'
  },
  {
    id: 2,
    image: FLUTTER,
    title: 'Flutter and Firebase Androi and iOS online shop',
   github: 'https://github.com/AtalibAgAlmousleck/fluttermyshopseason1'
  },
  {
    id: 3,
    image: WEB2,
    title: 'Reactjs eCommerce application',
   github: 'https://github.com/AtalibAgAlmousleck'
  },
  {
    id: 4,
    image: FLUTTER2,
    title: 'Flutter and Firebase Androi and iOS online shop',
    github: 'https://github.com/AtalibAgAlmousleck/flutter-gradal-shop-app'
  },
  {
    id: 5,
    image: SPRING,
    title: 'Complete Spring Boot Web application',
    github: 'https://github.com/AtalibAgAlmousleck'
  },
  {
    id: 6,
    image: EXPRESS,
    title: 'Nodejs Express Authentication and Authorization application',
    github: 'https://github.com/AtalibAgAlmousleck/express-authentication-authorization'
  },
  {
    id: 7,
    image: EXPRESS2,
    title: 'Full Stack eCommerce application with payment integration',
    github: 'https://github.com/AtalibAgAlmousleck/next-ecommerce'
  },
  {
    id: 8,
    image: UI1,
    title: 'Train ticket booking management UI with Flutter',
    github: 'https://github.com/ataousCode/train_ui'
  }
]

const Projects = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container project__container'>
        {
          data.map(({id, image, title, github}) => {
            return (
            <article key={id} className='project__item'>
              <div className='project__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='project__item-cta'>
                <a href={github} target='_blank'>
                  <BsGithub />
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects;