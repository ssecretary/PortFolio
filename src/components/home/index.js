import React from 'react'
import './home.css'
import profile from '../../assets/image.png'
import hireme from '../../assets/hireme.png'
import download from '../../assets/download.png'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'

function Home() {

  const downloadResume = () => {
      const link = document.createElement('a');
      link.href = profile;
      link.download = 'profile.png';

      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
  }

  return (
    <section id='home'>
      <div className='leftHome'>
        <span className='hello'>Hello,</span>
        <span className='introduction'>I'm <span className='nameSpan'>Shreyash Secretary</span> <br /></span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Python Developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'React Developer',
            1000,
            'Full Stack Developer',
            1000,
          ]}
          wrapper="span"
          speed={50}          
          className='introduction'
          repeat={Infinity}
        />
        <span className='about'>I am an experience Full Stack Developer with expertise in technologies <br/> like Django, React, Node, Database etc.</span>
        <div className='buttonDiv'>
          <Link activeClass='active' to='contactSection' smooth={true} offset={-100} duration={500} ><button className='hireMe'><img src={hireme} alt='HireMe' className='hireMeImg' />Hire Me</button></Link>
          <Link><button className='resume' onClick={() => downloadResume()}> <img src={download} alt='Resume' className='resumeImg'/>Resume</button></Link>
        </div>
      </div>
      <img src={profile} alt='Profile' className='profileImg'/>
    </section>
  )
}

export default Home