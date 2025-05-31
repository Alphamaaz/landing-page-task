import React from "react";
import vector from "../images/daimond.svg";

const TimelineSection = ({ date, title, text }) => {
  return (
    <div className="bg-white mt-8 md:mt-[60px] flex flex-col md:flex-row gap-4 md:gap-6">
      <div className="text-4xl md:text-[60px] font-medium md:font-[500] md:min-w-[120px]">
        {date}
      </div>

      <div className="bg-[#1A1A1A] text-white rounded-2xl md:rounded-[45px] p-5 md:py-10 md:px-8 w-full md:w-[550px] flex  gap-4 md:gap-10">
        <div className="w-6 h-6 md:w-[26px] md:h-[26px] mt-1 md:mt-2">
          <img src={vector} alt="vector_daimond" className="w-full h-full" />
        </div>

        <div>
          <h2 className="text-xl md:text-[38px] font-medium md:font-[500]">
            {title}
          </h2>
          <p className="text-sm md:text-[18px] font-normal md:font-[400] mt-2 md:mt-4 max-w-[310px] leading-snug">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
