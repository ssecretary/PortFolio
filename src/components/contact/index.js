import React, { useRef } from 'react'
import './contact.css'
import facebook from '../../assets/facebook-icon.png'
import instagram from '../../assets/instagram.png'
import youTube from '../../assets/youtube.png'
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
        <span className='contactDesc'>Please fill out the form below to to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='to_name' hidden value='Shreyash Secretary'/>
          <input type='text' className='name' placeholder='Your Name' name='from_name'/>
          <input type='email' className='email' placeholder='Your Email' name='from_email'/>
          <textarea name='message' className='msg' placeholder='Enter Message' rows='5'/>
          <button className='submitBtn' value='send' type='submit'>Submit</button>
          <div className='links'>
            <img src={facebook} alt='facebook' className='link'/>
            <img src={instagram} alt='instagram' className='link'/>
            <img src={youTube} alt='youtube' className='link'/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact