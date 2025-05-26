import React from 'react'
import "../styles/Partners.css"
import logo1 from "../images/Company logo.svg"
import logo2 from "../images/Company logo (1).svg"
import logo3 from "../images/comp.svg"
import logo4 from "../images/Company logo (2).svg"
import logo5 from "../images/Company logo (3).svg"
import logo6 from "../images/Company logo (4).svg"

const Partners = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className='partners-logos'>
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`logo-${index + 1}`} />
      ))}
    </div>
  );
}

export default Partners;
