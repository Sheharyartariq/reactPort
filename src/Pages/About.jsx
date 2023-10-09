import React from 'react'
import { Link } from 'react-scroll'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BiLogoUpwork } from 'react-icons/bi'
import { TbBrandFiverr } from 'react-icons/tb'
const About = () => {
  return (
    <>
    <div className="about" id='#about'>
      <p className='p-header'>Hello, There</p>
      <p className='p-title'>I'm Sheharyar Tariq</p>
      <p className='p-subtitle'>I'm a Front-end Web Developer</p>
      <p className='p-disc'>I'm Currently learning React and React & Redux</p>
      <div className="brands">
      <a href="https://www.linkedin.com/in/sheharyar-tariq/" target='_blank'><AiFillLinkedin className='ai' title='LinkedIn'/></a>
      <a href="https://github.com/Sheharyartariq" target='_blank'><AiFillGithub className='ai'title='GitHub'/></a>
      {/* <a href=""><BiLogoUpwork className='ai'title='Upwork'/></a> */}
      {/* <a href=""><TbBrandFiverr className='ai'title='fiver'/></a> */}
      </div>
     <Link
     activeClass="active"
     to="project"
     spy={true}
     smooth={true}
     offset={-80}
     duration={500}
     >
        <button className='btn'>Projects</button>
     </Link>
    </div>
    </>
  )
}

export default About
