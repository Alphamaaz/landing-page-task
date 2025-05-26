import React from 'react'
import CommonHead from './CommonHead'
import "../styles/Testimonials.css"
import TestimonialSwiper from './TestimonialSwiper';

const Testimonials = () => {
  
  return (
    <>
      <CommonHead
        title={"Testimonials"}
        description={
          <>
            Hear from Our Satisfied Clients: Read Our Testimonials <br />
            to Learn More about Our Digital Marketing Services
          </>
        }
      />
      <div className="testimonials-wrapper">
        <TestimonialSwiper />
      </div>
    </>
  );
}

export default Testimonials