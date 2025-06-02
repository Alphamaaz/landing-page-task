import React from 'react'
import { ArrowUpRight } from "lucide-react";
import daimond from '../images/daimond.svg'
const FeatureSucces = () => {
    const data = [
      { head: "200%", text: "Increase in organic traffic" },
      { head: "150%", text: "Rise in online sales" },
      { head: "75%", text: "Reduction in cost-per-click(CPC)" },
      { head: "300%", text: "Improvement in conversion rate" },
    ];
  return (
    <div className="mt-8 md:mt-[70px] bg-[var(--dark)] flex flex-col md:flex-row items-center justify-around pb-[80px]  rounded-[24px] md:rounded-[45px] px-4 md:px-10 py-8 md:py-12 relative space-y-8 md:space-y-0 ">
      {/* Text Section */}
      <div className="w-full md:max-w-[550px]">
        <div className="flex flex-col md:text-start gap-4 md:gap-6 text-white">
          <h2 className=" hidden md:block text-black text-[32px] md:text-[40px] font-[500] bg-[var(--primary-color)] px-2 inline md:mb-4 md rounded md:w-[480px]">
            Featured Success Story
          </h2>
          <div className='flex gap-4 md:hidden items-center'>
            <img src={daimond} alt="daimond" className='h-[20px] w-[20px]'/>
            <h2 className="text-[32px]  font-[500]">Featured</h2>
          </div>
          <h3 className="text-[22px] md:text-[30px] font-[500] leading-tight">
            Scaling Success For A Leading E-commerce Brand
          </h3>
          <p className="text-[16px] md:text-[18px] font-[400] leading-relaxed">
            Through a comprehensive SEO and PPC strategy, we helped this
            E-commerce brand increase visibility, drive traffic, and boost
            sales.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:max-w-[530px] mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] px-6 py-6 md:px-[50px] md:py-[30px] flex justify-center items-center"
            >
              <div className="text-black text-center max-w-[127px]">
                <h3 className="text-[32px] md:text-[40px] font-[500]">
                  {item.head}
                </h3>
                <p className="text-[16px] md:text-[18px] font-[400]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Read More Action Button */}
      <div className="actions absolute bottom-6 left-6 md:left-[60px] flex gap-2 items-center cursor-pointer">
        <span className="text-[var(--primary-color)] font-medium text-base md:text-lg">
          Read
        </span>
        <div className="h-[30px] w-[30px] flex justify-center items-center rounded-full bg-[var(--primary-color)]">
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default FeatureSucces