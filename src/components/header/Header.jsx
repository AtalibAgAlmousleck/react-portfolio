import React from 'react'
import './header.css'
import CTA from './CTA'
import TR from '../../assets/tr.jpg'
import DEMO from '../../assets/demo.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hello, I'm</h5>
      <h1>Atalib Ag Almousleck</h1>
      <h4>Software Developer From Mali</h4>
      <h5 className='text-light'>I'm a software developer based in China, and I'm very passionate and dedicated to my work.</h5>
      <CTA />
      <HeaderSocials />
       {/* 2:16:17 */}
      {/* <div className="me">
        <img src={DEMO} alt="" />
      </div> */}

      <a href="#contact" className='scroll_down'>Your project is my challange</a>
    </div>
   </header>
  )
}

export default Header