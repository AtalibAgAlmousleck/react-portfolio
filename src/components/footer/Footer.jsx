import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AtalibDev</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/atalibag.almousleck.7" target='_blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/ag.atalib/" target='_blank'><AiFillInstagram /></a>
        <a href="https://www.linkedin.com/in/almousleck-atalib-ag-82845a244" target='_blank'><AiFillLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AtalibDev. All rights atalibdev.com </small>
      </div>
    </footer>
  )
}

export default Footer;