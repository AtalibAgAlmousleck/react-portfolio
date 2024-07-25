import React from 'react'
//import CV from '../../assets/cv.pdf'
import CV from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* {CV} download */}
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA