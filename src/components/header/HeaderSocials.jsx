import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/AtatlibAgAlmousleck" target='_blank'><BsGithub /></a>
        <a href="https://www.instagram.com/ag.atalib/" target='_blank'><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/almousleck-atalib-ag-893455312/" target='_blank'><AiFillLinkedin /></a>
    </div>
  )
}

export default HeaderSocials