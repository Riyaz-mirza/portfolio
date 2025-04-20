import React from 'react'
import './footer.css'
import {FaFacebook} from  'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    
      <footer>
      <a role="button" className='footer__logo'>RIYAZ MIRZA</a>

      <ul className="permalinks">
        <li><a role="button">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mirza-riyaz-19270a227"><FaFacebook/></a>
        <a href="https://www.instagram.com/riyaz__mirza____08/"><BsInstagram/></a>
        <a href="https://www.instagram.com/riyaz__mirza____08/"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>Made By <span class="sc-gsGlKL hLgeyj">♥</span> Riyaz Mirza. All rights reserved.</small>
        
      </div>
      </footer>
    
  )
}

export default footer