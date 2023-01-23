import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      
    <h5>What i offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="services">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

       
      </article>
      {/* End of UI and UX  */}

      <article className="services">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

       
      </article>
      {/* web development  */}


      <article className="services">
        <div className="service__head">
          <h3>Photoshoot</h3>
        </div>

        
      </article>
      {/* End of Photoshoot */}

    </div>
    </section>
  )
}

export default services