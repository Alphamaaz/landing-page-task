import React from 'react'
import usecase from '../images/useCases.png'
import useGroup from '../images/useGroup.png'
import Hero from './../components/Hero';
import FeatureSucces from '../components/FeatureSucces';
import ResponsiveCardGrid from '../components/UseServices';
import CommonHeadAbout from '../components/CommonHeadAbout';
import TestimonialSwiper from './../components/TestimonialSwiper';
import JoinTeam from '../components/JoinTeam';
const UseCases = () => {
  return (
    <div className="App">
      <Hero
        text={"Proven Success Stories"}
        desciption={
          "See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media or web design. These use cases highlight the tangible impact of our work. Explore the success and envision what we can achieve together."
        }
        img={usecase}
      />

      {/* featured succes stories section  */}
      <FeatureSucces />

      {/* related servies section  */}
      <ResponsiveCardGrid />

      {/* testimonils section  */}
      <div className="md:mt-[130px]">
        <CommonHeadAbout
          text={
            <>
              Hear from our satisfied clients: Read our testimonials{" "}
              <br className="desktop-break" />
              to learn more about our digital marketing services.
            </>
          }
          title={"Testimonials"}
          max_width={"90%"}
        />
        <div className="testimonials-wrapper">
          <TestimonialSwiper />
        </div>
      </div>

      {/* last section  */}
      <JoinTeam
        title={"Let’s Create Your Next Success Story"}
        button_txt={"Get your free proposal"}
        text={
          "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
        }
        img={useGroup}
      />
    </div>
  );
}

export default UseCases