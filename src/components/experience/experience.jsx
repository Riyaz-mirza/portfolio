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
          <div className="experience__content">
            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
                <div>
                <h4>.NET</h4>
                <small className='text-light'>Experinced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
                <div>
                <h4>Angular</h4>
                <small className='text-light'>Experinced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
                <div>
                <h4>Mssql</h4>
                <small className='text-light'>Experinced</small>
                </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>.Net core MVC</h4>
                <small className='text-light'>Experinced</small>
               </div>
            </article>

            <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>Javascript, jQuery</h4>
                <small className='text-light'>Experinced</small>
               </div>
            </article>
              <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon' />
               <div>
               <h4>Azure</h4>
                <small className='text-light'>Experinced</small>
               </div>
            </article>
          </div>
        </div>


      </div>
    </section>
  )
}

export default experience