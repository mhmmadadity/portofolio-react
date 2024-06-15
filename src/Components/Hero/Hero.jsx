import React from 'react'
import profile_img from '../../assets/profile-modified (1).png'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Hi, I'am Aditya Pratama,</span> Frontend Developer Based In Indonesia</h1>
        <p>I am Newbie Frontend Developer from Padang, Indonesia</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero