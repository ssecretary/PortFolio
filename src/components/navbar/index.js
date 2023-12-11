import React, { useState } from 'react'
import logo from '../../assets/shreyash_logo.png'
import menu from '../../assets/menu.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'
import './navbar.css'

function Navbar() {
  const [navMenu, setNavMenu] = useState(false)

  const onContactMeClick = () => {
    document.getElementById('contactSection').scrollIntoView({behavior: 'smooth'})
  }

  const onLogoClick = () => {
    document.getElementById('home').scrollIntoView({behavior: 'smooth'})
  }

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' onClick={() => onLogoClick()}/>

      <div className='desktopMenu'>
        <Link activeClass='active' to='home' spy={true}  smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Home</Link>
        <Link activeClass='active' to='aboutSection' spy={true}  smooth={true} offset={-100} duration={500} className='desktopMenuItem'>About</Link>
        {/* <Link activeClass='active' to='home' smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Skills</Link> */}
        <Link activeClass='active' to='workSection' spy={true}  smooth={true} offset={-50} duration={500} className='desktopMenuItem'>Works</Link>
      </div>

      <button className='contactButton' onClick={() => onContactMeClick()}>
        <img src={contactImg} alt='Contact' className='contactButtonImg' />
        Contact Me
      </button>

      <img src={menu} alt='Menu' className='mobMenu' onClick={() => setNavMenu(!navMenu)}/>

      <div className='navMenu' style={{display: navMenu ? 'flex' : 'none'}}>
        <Link activeClass='active' to='home' spy={true}  smooth={true} offset={-100} duration={500} className='navMenuItem' onClick={() => setNavMenu(false)}>Home</Link>
        <Link activeClass='active' to='aboutSection' spy={true}  smooth={true} offset={-100} duration={500} className='navMenuItem' onClick={() => setNavMenu(false)}>About</Link>
        {/* <Link activeClass='active' to='home' smooth={true} offset={-100} duration={500} className='desktopMenuItem'>Skills</Link> */}
        <Link activeClass='active' to='workSection' spy={true}  smooth={true} offset={-50} duration={500} className='navMenuItem' onClick={() => setNavMenu(false)}>Works</Link>
        <Link activeClass='active' to='contactSection' spy={true}  smooth={true} offset={-50} duration={500} className='navMenuItem' onClick={() => setNavMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar