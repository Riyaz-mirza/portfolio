import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/sonu.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
  avatar:AVTR1,
  Name: 'Sonu Singh',
  review:'Riyaz is a persistent and dedicated developer. He loves to outperform his colleagues when placed in a competitive environment. His technical and analytical skills have been vital for in building efficient solutions within a set timeline. Riyaz uplifts the entire team by helping them with their tasks and pushing for research into new methods of execution. He would be a great asset to any company.'
},

{
  avatar:AVTR2,
  Name: 'Ruchita',
  review: 'Riyaz is a persistent and dedicated developer. He loves to outperform his colleagues when placed in a competitive environment. His technical and analytical skills have been vital for in building efficient solutions within a set timeline. Riyaz uplifts the entire team by helping them with their tasks and pushing for research into new methods of execution. He would be a great asset to any company.'
},
  
{
  avatar:AVTR3,
  Name: 'Pragyesh ',
  review: 'Riyaz is a persistent and dedicated developer. He loves to outperform his colleagues when placed in a competitive environment. His technical and analytical skills have been vital for in building efficient solutions within a set timeline. Riyaz uplifts the entire team by helping them with their tasks and pushing for research into new methods of execution. He would be a great asset to any company.'
},
]


const testimonial = () => {
  return (
    <section id='testimonial'> 
      <h5>Review from the Buddies</h5>
      <h2>Testinomials</h2>

      <Swiper className="container testinomials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        
          {
            data.map(({avatar,Name,review},index) => {
              return(
                <SwiperSlide key={index} className='testinomial'>
          <div className="client__avatar">
            <img src={avatar}/>
            <h5 className='client__name'>{Name}</h5>
            </div>
            <small className='client___review'>
              {review}
            </small>
          
        </SwiperSlide>

              )
            })
          }
      
      </Swiper>
    </section>
  )
}

export default testimonial