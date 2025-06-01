import React from 'react'
import Union from "../images/Union.png";
import daimond from "../images/daimond.svg";
const SEO = () => {
  return (
    <div className="mt-[40px] md:mt-[80px] bg-[var(--dark)] flex flex-col md:flex-row justify-center gap-[30px] md:gap-[80px] p-[20px] md:p-[50px] rounded-[20px] md:rounded-[45px]">
      {/* Left Column - Title */}
      <div className="flex flex-1 gap-3 md:gap-6 max-w-full md:max-w-[350px]">
        <div>
          <img
            src={Union}
            alt="union"
            className=" hidden md:block w-[40px] h-[40px]"
          />
          <img src={daimond} alt="union" className=" md:hidden w-[20px] h-[20px] mt-3" />
        </div>
        <div>
          <h2 className=" md:bg-[var(--primary-color)] rounded-[7px] text-white md:text-black text-[28px] md:text-[40px] font-[500] px-1">
            Search Engine <br />
            Optimization
          </h2>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="flex-1 md:max-w-[680px]">
        <p className="text-white text-[16px] md:text-[18px] font-[400]">
          SEO is the process of improving your website's visibility on search
          engines like Google. By optimizing your content and site structure, we
          help your business rank higher in search results, driving more organic
          traffic and potential customers.
        </p>

        {/* Button - Full width on mobile, auto width on desktop */}
        <div className="flex justify-center md:justify-end mt-[30px] md:mt-[50px]">
          <button className="bg-[var(--gray)] w-full md:w-[500px] py-[15px] md:py-[20px] text-black text-[16px] md:text-[20px] font-[400] rounded-[10px] md:rounded-[14px] hover:bg-[var(--primary-color)] transition-all duration-300">
            Boost My Rankings
          </button>
        </div>
      </div>
    </div>
  );
}

export default SEO