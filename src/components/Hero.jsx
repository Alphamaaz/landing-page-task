import React from 'react'

import "../styles/Hero.css"

function Hero({text,img,desciption}) {
  return (
    <div className="hero-wrapper">
      <div className="left">
        <h1>{text}</h1>
        <div className="hero_img_mob">
          <img src={img} alt="hero_img" />
        </div>
        <p>
          {desciption}
        </p>
        <button>Book a consultation</button>
      </div>
      <div className="right">
        <img src={img} alt="hero_img" />
      </div>
    </div>
  );
}

export default Hero