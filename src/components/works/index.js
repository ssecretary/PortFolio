import React, { useState } from 'react'
import './works.css'
import img1 from '../../assets/chatinc.png'
import img2 from '../../assets/sweesh.png'
import img3 from '../../assets/broadcast.png'
import img4 from '../../assets/chatwidget.png'
import img5 from '../../assets/docflow.png'

function Works() {
  const [hoverId, setHoverId] = useState(null)
  const workObj = [
    {
      src: img1,
      title: 'ChatInc Proactive',
      description: 'Chat Inc Proactive is a WhatsApp Messaging add-on for Zendesk Agent Workspace that makes it super easy for you and your team to send and track proactive WhatsApp templates directly from the agent workspace! Available for one-to-one WhatsApp conversations and blast WhatsApp push messaging.',
      url: 'https://www.chatinc.com/proactive'
    },
    {
      src: img2,
      title: 'Sweesh',
      description: 'Experience the simplicity of engaging with your audience through WhatsApp on our Chat Inc platform. With user-friendly features, sending Bulk WhatsApp campaigns becomes a breeze. Effortlessly connect with your customers, share Marketing campaigns, Sales Promotions, Newsletters, Statements, Payment reminders, links, and more. Navigate the world of communication with ease, making every engagement simple and effective.',
      url: 'https://preprod.sweesh.io/',
    },
    {
      src: img3,
      title: 'ChatInc Broadcast',
      description: 'Experience the simplicity of engaging with your audience through WhatsApp on our Chat Inc platform. With user-friendly features, sending Bulk WhatsApp campaigns becomes a breeze. Effortlessly connect with your customers, share Marketing campaigns, Sales Promotions, Newsletters, Statements, Payment reminders, links, and more. Navigate the world of communication with ease, making every engagement simple and effective.',
      url: 'https://www.chatinc.com/broadcast'
    },
    {
      src: img4,
      title: 'Chat Widget',
      description: 'Chat widget or Web widget is a bot that you can embed on a website to interact with your website users in real-time. It appears as a small chat box or window that pops up on a website or application.',
      url: 'https://www.crocssa.co.za/',
    },
    {
      src: img5,
      title: 'Docflow',
      description: "An intranet portal which is used to stores all the company's details includes all company's important documents, bills, reciepts etc. This includes feature of generating barcode sticker and directly printing it from site. It contains very huge database. It is an intranet project for ArcelorMittal Nippon Steel India Corporation."
    }
  ]

  const onCardClick = (url) => {
    if(url) window.open(url, '_blank')
  }

  return (
    <section id='workSection'>
      <h2 className='worksTitle'>My Works</h2>
      <span className='workDescription'>I am very happy to share my work, that I have done as an Full Stack Developer. While creating this projects I am paying attention to the smallest details and making sure that my work is perfect. I am exicted to bring my skills and experience to help businesses to achieve their goals and create a strong online presence.
        <br /><br/>
        For more detials of my projects and want to know more about my other projects please  <a href='#home' className='contactMe'>download my resume</a> or <a href='#contactSection' className='contactMe'>contact me.</a>
      </span>
      <div className='workImgs'>
        {workObj.map((obj, idx) => {
          return (
            <div className='worksImg' onMouseEnter={() => setHoverId(idx)} onMouseLeave={() => setHoverId(null)} onClick={() => onCardClick(obj.url)}>
              {hoverId !== idx ? 
                <div>
                  <img src={obj.src} alt={obj.title} className='worksImg'/>
                  <h3 className='projectTitle'>{obj.title}</h3>
                </div> : 
                <div className='worksImg hoverWorkImg'><p className='projectDesc'>{obj.description}</p></div> }
            </div>
            )
        })}
      </div>
      <span className='workDescription'></span>
    </section>
  )
}

export default Works