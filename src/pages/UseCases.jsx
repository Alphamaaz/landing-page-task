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
  const data = [
      {
        title: "E-commerce Fashion Brand",
        description:
          "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
      },
      {
        title: "Local Restaurant Chain",
        description:
          "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
      },
      {
        title: "Healthcare Provider",
        description:
          "Through content optimization and targeted keyword strategy, we helped a healthcare provider increase inquiries and bookings by 180%.",
      },
      {
        title: "E-commerce Fashion Brand",
        description:
          "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
      },
      {
        title: "Local Restaurant Chain",
        description:
          "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
      },
      {
        title: "Healthcare Provider",
        description:
          "Through content optimization and targeted keyword strategy, we helped a healthcare provider increase inquiries and bookings by 180%.",
      },
      // Add more items as needed...
    ];
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
      <ResponsiveCardGrid data={[...data]} />

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