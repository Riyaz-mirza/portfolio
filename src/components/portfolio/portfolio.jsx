import React from 'react'
import './portfolio.css'
import IMG1 from'../../assets/donations.png'
import IMG2 from'../../assets/portfolio2.png'
import IMG3 from'../../assets/portfolio3.jpg'




const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1}alt="" />
          </div>

            <h3>Donationally Managment System</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'rel="noreferrer">GitHUb</a>
            <a href="https://dribbble.com/shots/20251645-Sleep-Tracker-Apps" className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
            </div>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2}alt="" />
          </div>

            <h3>Church pharmacy</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'rel="noreferrer">GitHUb</a>
            <a href="https://churchpharmacy.co.uk/" className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
            </div>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3}alt="" />
          </div>

            <h3>Hex color changer</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank' rel="noreferrer">GitHUb</a>
            <a href="https://dribbble.com/shots/20251645-Sleep-Tracker-Apps" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
         </article>

         {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4}alt="" />
          </div>

            <h3>Calculator</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank' rel="noreferrer">GitHUb</a>
            <a href="https://dribbble.com/shots/20251645-Sleep-Tracker-Apps" className='btn btn-primary' target='_blank'rel="noreferrer">Live Demo</a>
            </div>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5}alt="" />
          </div>

            <h3>Movie Ticket Booking System</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank' rel="noreferrer">GitHUb</a>
            <a href="https://dribbble.com/shots/20251645-Sleep-Tracker-Apps" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6}alt="" />
          </div>

            <h3>Face detaction System</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank' rel="noreferrer">GitHUb</a>
            <a href="https://dribbble.com/shots/20251645-Sleep-Tracker-Apps" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
         </article> */}
         <bold class="ManyText">Many more....</bold>
      </div>
      
    </section>
  )
}

export default portfolio