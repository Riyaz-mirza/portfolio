import React from 'react'
import './about.css'
import ME from '../../assets/Riyaz.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiShakingHands} from 'react-icons/gi'

const about = () => {
  return (
     <>
     <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME}alt="" />
      </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className= 'about__icon'/>
            <h5>Experience</h5>
            <small>3 Month of Experience</small>
          </article>

          <article className='about__card'>
            <FiUsers className= 'about__icon'/>
            <h5>Clients</h5>
            <small>5 Clients</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className= 'about__icon'/>
            <h5>Projects</h5>
            <small> 10+ projects</small>
          </article>
        </div>

        <p>
          Hello All , I am Riyaz Mirza. From Vadodara,Gujarat. I am a web developer. with a good skills and 
          somehow experienced in this field. So here I am sharing My everything with you Guy's . So I mentioned 
          My everything here. Bye
          <GiShakingHands className='hello'/>
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    
    </section>
    </>
  )
}

export default about