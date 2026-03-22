import React from 'react'
import './about.css'
import ME from '../../assets/Riyaz.jpg'
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
            <small> 3.8 Years of Experience</small>
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
         Hello, I’m Riyaz Mirza from Vadodara, Gujarat. I am a passionate Full Stack Web Developer with experience in building scalable and user-friendly applications.

I specialize in technologies like <strong className="tech-highlight">
  .NET Core, ASP.NET MVC, Angular, SQL Server, and Azure
</strong>, and have worked on enterprise-level as well as e-commerce projects. I enjoy solving real-world problems through code and continuously improving my skills to stay updated with modern technologies.

Feel free to explore my work and projects!
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