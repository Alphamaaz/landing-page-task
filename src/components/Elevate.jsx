import React from 'react'
import elevate from "../images/elevate.png"
const Elevate = () => {
  return (
    <div className="flex flex-col gap-6 p-6 border border-black shadow-[0px_5px_0px_0px_#191A23] md:flex-row md:justify-around md:items-center rounded-[30px] md:rounded-[45px]  mt-[30px] md:mt-[100px]">
      {/* Text Content */}
      <div className="flex-1 md:max-w-[510px] ">
        <h3 className="text-2xl font-medium md:text-[30px] md:font-[500]">
          Ready To Elevate Your Search Rankings?
        </h3>

        <div className="h-[2px] w-full bg-black my-4 md:my-[30px]"></div>

        <div className="space-y-4">
          <p className="text-base font-normal md:text-[18px] md:font-[400]">
            Our proven SEO strategies are designed to help your business achieve
            long-lasting success in search engines. Whether you want to boost
            organic traffic, improve keyword rankings, or increase conversions,
            we're here to make it happen.
          </p>
          <h6 className="text-lg font-medium md:text-[20px] md:font-[500] mt-2 md:mt-[20px]">
            Let's work together to grow your online presence.
          </h6>
        </div>
        <div className="md:hidden w-full  h-auto mt-4">
          <img
            src={elevate}
            alt="SEO illustration"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="mt-6 md:mt-[50px]">
          <button className="w-full py-3 text-lg font-medium text-[var(--dark)] bg-[var(--primary-color)] rounded-[14px] transition-colors hover:bg-[var(--dark)] hover:text-white md:py-5 md:text-[20px]">
            Start My SEO Journey
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="hidden md:flex w-full md:max-w-[490px] h-auto">
        <img
          src={elevate}
          alt="SEO illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Elevate