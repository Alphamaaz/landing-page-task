import React from 'react'
import Hero from '../components/Hero'
import service from '../images/services.png'
import SEO from '../components/SEO';
import HowWeWork from '../components/HowWeWork';
import UseCases from '../components/UseCases';
import OtherServices from '../components/OtherServices';
import Elevate from '../components/Elevate';

const Services = () => {
  return (
    <div className="App">
      <Hero
        text={<>Expert Digital Marketing Services</>}
        desciption={
          <>
            Unlock your business’s full potential with tailored strategies
            designed to drive growth and deliver results.
          </>
        }
        img={service}
      />

      {/* SEO Section  */}
        <SEO/>

        {/* how we work section  */}
        <HowWeWork/>
    

        {/* use cases section  */}
        <div className="md:mt-[100px]">

        <UseCases/>
        </div>

        {/* our other services section  */}
        <OtherServices/>


        {/* evaluaate section last...  */}
        <Elevate/>
    </div>
  );
}

export default Services