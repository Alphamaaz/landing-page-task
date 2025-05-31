import React from 'react'
import Hero from './../components/Hero';
import Partners from './../components/Partners';
import Services from './../components/Services';
import GetProposal from './../components/GetProposal';
import CaseStudies from './../components/CaseStudies';
import Accordians from './../components/Accordians';
import Team from './../components/Team';
import Testimonials from './../components/Testimonials';
import Contact from './../components/Contact';
import hero from "../images/hero.png";

const Home = () => {
  return (
    <>
      
      <div className="App">
        <Hero img={hero} text={"Navigating the digital landscape for success"} 
        desciption={"Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social mediamarketing, and content creation."}/>
        <Partners />
        <Services />
        <GetProposal />
        <CaseStudies />
        <Accordians />
        <Team />
        <Testimonials />
        <Contact />
        
      </div>
    </>
  );
}

export default Home