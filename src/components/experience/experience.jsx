import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>what Skills i Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>HTML</h4>
                <small className='text-light'>Experinced</small>
               </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
                <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experinced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>Bootstrap</h4>
                <small className='text-light'>Experinced</small>
               </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>React</h4>
                <small className='text-light'>Intermediate</small>
               </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>Figma</h4>
                <small className='text-light'>Intermediate</small>
               </div>
            </article>
          </div>
        </div>

        {/* leave of frontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
                <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experinced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
                <div>
                <h4>MYsql</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
               </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
               </div>
            </article>

            
          </div>
        </div>

      </div>
    </section>
  )
}

export default experience