import React, { useRef } from 'react'
import './contact.css'
import linkdin from '../../assets/linkdin.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/git128.png'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log('Current form : ', form.current);
    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactSection'>
      <div id='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='to_name' hidden value='Shreyash Secretary'/>
          <input type='text' className='name' placeholder='Your Name' name='from_name' required/>
          <input type='email' className='email' placeholder='Your Email' name='from_email' required/>
          <textarea name='message' className='msg' placeholder='Enter Message' rows='5' required/>
          <button className='submitBtn' value='send' type='submit'>Submit</button>
          <div className='links'>
            <img src={linkdin} alt='linkdin' className='link' onClick={() => window.open(process.env.REACT_APP_LINKDIN_URL, '_blank')}/>
            <img src={instagram} alt='instagram' className='link' onClick={() => window.open(process.env.REACT_APP_INSTAGRAM_URL, '_blank')}/>
            <img src={github} alt='youtube' className='link' onClick={() => window.open(process.env.REACT_APP_GITHUB_URL, '_blank')}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact