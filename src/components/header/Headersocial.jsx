import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Headersocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/mirza-riyaz-19270a227" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Riyaz-mirza" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.instagram.com/riyaz__mirza____08/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default Headersocial