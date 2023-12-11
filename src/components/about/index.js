import React from 'react'
import './about.css'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'
import uiDesign from '../../assets/ui-design.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import next from '../../assets/next.png'
import git from '../../assets/git.png'
import html from '../../assets/html.png'
import django from '../../assets/django.png'
import postgres from '../../assets/postgres.png'
import ScrollCarousel from 'scroll-carousel-react';

function About() {
  const technologies = [python, react, node, next, git, html, django, postgres]
  return (
    <section id='aboutSection'>
      <span className='aboutTitle'>About Me</span>
      <span className='aboutDesc'>Professional and experienced and Full Stack Developer. Being a Full Stack Developer my aim is to provide every possible full stack solution.
        I am passionate about providing all solutions to clients related to web development.</span>
      <br />
      <span className='aboutDesc'>I have worked with web-based applications as well as front-end development using the latest web technologies. I am specialist in developing customer
      oriented applications. 
      Adept at collaborating with cross-functional teams to deliver
        robust and scalable applications that exceed client and user expectations. Proficient in both front-end and back-end development, with a strong focus on 
      Javascript and Python. Known for a passion for problem solving and staying current with emerging technologies. Seeking opportunities to leverage my expertise
        in creating innovative and user-friendly web applications.</span>
      <div className='skillBars'>
        <div className='skillBar'>
            <img src={webDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Web Design</h2>
              <p>This is demp part, Please entry text of your choice</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={appDesign} alt='AppDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>This is demp part, Please entry text of your choice</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={uiDesign} alt='UiDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>This is demp part, Please entry text of your choice</p>
            </div>
        </div>
      </div>
      <span className='technologies'>My Expertise</span>
      <div>
      <ScrollCarousel
        autoplay
        autoplaySpeed={5}
        speed={1}
        onReady={() => console.log('I am ready')}
        className='carousel'
      >
        {technologies.map((item) => (
          <div key={item} style={{maxHeight: '20rem', margin: '1rem'}}>
            <img src={item} alt='item' className='carouselImg'/>
          </div>
        ))}
      </ScrollCarousel>
      </div>
    </section>
  )
}

export default About