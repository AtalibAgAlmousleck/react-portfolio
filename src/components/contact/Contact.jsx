import React from 'react'
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons//bs'
import { FaWeixin } from 'react-icons//fa'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vw61f1o', 'template_jmex548', form.current, 'ipd_43wJhHageenor')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contant__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>almouslecka@gmail.com</h5>
            <a href="mailto:almouslecka@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatShapp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone=+8618681623780" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWeixin className='contact__option-icon' />
            <h4>WeChat</h4>
            <h5></h5>
            <a href="weixin://hello1302720508/chat" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACTS OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your full name' required />
          <input type="email" name='email' placeholder='Enter your email' required />
          <textarea name="message" rows="7" placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;