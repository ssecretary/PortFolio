import React from 'react'
import './works.css'
import img1 from '../../assets/portfolio-1.png'
import img2 from '../../assets/portfolio-2.png'
import img3 from '../../assets/portfolio-3.png'
import img4 from '../../assets/portfolio-4.png'
import img5 from '../../assets/portfolio-5.png'
import img6 from '../../assets/portfolio-6.png'

function Works() {
  return (
    <section id='workSection'>
    <h2 className='worksTitle'>My Works</h2>
    <span className='workDescription'>I am very happy to share my work, that I have done as an Full Stack Developer. While creating this projects I am paying attention to the smallest details and making sure that my work is perfect. I am exicted to bring my skills and experience to help businesses to achieve their goals and create a strong online presence.</span>
    <div className='workImgs'>
      <img src={img1} alt='img1' className='worksImg'/>
      <img src={img2} alt='img2' className='worksImg'/>
      <img src={img3} alt='img3' className='worksImg'/>
      <img src={img4} alt='img4' className='worksImg'/>
      <img src={img5} alt='img5' className='worksImg'/>
      <img src={img6} alt='img6' className='worksImg'/>
    </div>
    </section>
  )
}

export default Works