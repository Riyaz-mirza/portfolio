import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
// import {useRef} from 'react'
import { useRef } from "react"
import emailjs from 'emailjs-com'

const Contact = () => {
 const form = useRef();
 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_dlv65d1', 'service_dlv65d1', form.current, 'RDTQZribyzjdy2Ziv')
   
  e.target.reset()
};
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>riyazmirza228@gmail.com</h5>
            <a href="mailto:riyazmirza228@gmail.com" target="_blank" rel="noreferrer"> Send a message</a>
          </article>

          <article className='contact__option'>
          <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Riyaz Mirza</h5>
            <a href="https://m.me/riyaz.mirza39982"  target="_blank" rel="noreferrer"> Send a message</a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>8866544328</h5>
            <a href="https://api.whatsapp.com/send?phone=8866544328"  target="_blank" rel="noreferrer"> Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact