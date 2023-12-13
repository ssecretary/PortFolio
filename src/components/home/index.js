import React from 'react'
import './home.css'
import myProfile from '../../assets/shreyash1-nobg.png'
import myProfileMobile from '../../assets/shreyash1.jpg'
import resume from '../../assets/resume.pdf'
import hireme from '../../assets/hireme.png'
import download from '../../assets/download.png'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'

function Home() {

  const detectDeviceType = () =>
  /Android|webOS|BlackBerry|IEMobile|Opera Mini|iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

  const downloadResume = () => {
      const link = document.createElement('a');
      link.href = resume;
      link.download = 'Shreyash Secretary.pdf';

      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
  }
  console.log('Dete fefe: ', detectDeviceType());

  const homeTextComponent = () => {
    return (
      <div className='leftHome' style={{height: detectDeviceType() === 'Desktop' && '100vh'}}>
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
        style={{height: detectDeviceType() === 'Mobile' && '10rem'}}
      />
      <span className='about'>I am an experience Full Stack Developer with expertise in technologies <br/> like Django, React, Node, Database etc.</span>
      <div className='buttonDiv'>
        <Link activeClass='active' to='contactSection' smooth={true} offset={-100} duration={500} ><button className='hireMe'><img src={hireme} alt='HireMe' className='hireMeImg' />Hire Me</button></Link>
        <Link><button className='resume' onClick={() => downloadResume()}> <img src={download} alt='Resume' className='resumeImg'/>Resume</button></Link>
      </div>
    </div>
    )
  }

  return (
    <section id='home'>
      {detectDeviceType() === 'Mobile' && 
      <div style={{display:"flex", flexDirection: "column"}}>
        <img src={myProfileMobile} alt='Profile' className='profileImgMobile'/>
        {homeTextComponent()}
      </div>
      }
      {detectDeviceType() !== 'Mobile' && 
      <>
        {homeTextComponent()}
        <img src={myProfile} alt='Profile' className='profileImg'/>
      </>}
    </section>
  )
}

export default Home