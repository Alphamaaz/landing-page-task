import React from 'react'
import hero from "../images/hero.png"
import "../styles/Hero.css"

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="left">
        <h1>Navigating the digital landscape for success</h1>
        <div className="hero_img_mob">
          <img src={hero} alt="hero_img" />
        </div>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button>Book a consultation</button>
      </div>
      <div className="right">
        <img src={hero} alt="hero_img" />
      </div>
    </div>
  );
}

export default Hero