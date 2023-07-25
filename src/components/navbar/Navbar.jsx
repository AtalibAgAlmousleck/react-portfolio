import React from 'react'
import './navbar.css'
import { FcHome } from 'react-icons/fc'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsFillBookFill } from 'react-icons/bs'
import { FcServices } from 'react-icons/fc'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}><FcHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}><AiOutlineUserAdd /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}><BsFillBookFill /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} 
      className={activeNav === '#services' ? 'active' : ''}><FcServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Navbar;