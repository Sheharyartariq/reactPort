import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
const Navbar = () => {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true)
    }else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <h3 className='nav-title'>S A M A E L</h3>
        <ul className='nav-items'>
            
            <li><Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            duration={500} 
            >About</Link></li>
            {/* <li><Link
            activeClass='active'
            to='project'
            spy={true}
            smooth={true}
            duration={500} 
            offset={-50}
            >Projects</Link></li> */}
            <li><Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            >Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
