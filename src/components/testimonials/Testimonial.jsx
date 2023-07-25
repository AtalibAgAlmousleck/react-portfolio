import React from 'react'
import './testimonial.css'
import AG from '../../assets/ag.jpg'
import BEN from '../../assets/ben.png'
import OUS from '../../assets/ous.png'
import MOH from '../../assets/moh.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: BEN,
    name: 'Benjamin',
    review: "Atalib did not create an app or web for me but we are partenar of coding we have been creating apps and websites for clients."
  },
  {
    avatar: MOH,
    name: 'Mohhamed',
    review: "The website was amazing thank you atalib i will get back to you soon."
  },
  {
    avatar: OUS,
    name: 'Ousmane',
    review: "Atalib did not create an app or web for me but we are partenar of coding we have been creating apps and websites for clients."
  },
];

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>What clients said</h5>
      <h2>Testimonial</h2>

      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonial;