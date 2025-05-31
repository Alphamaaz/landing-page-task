import React from 'react'
import group from '../images/group.png'

const Group = () => {
  return (
    <div className="mt-8 md:mt-[70px] flex flex-col-reverse md:flex-row bg-[var(--dark)] items-center rounded-xl md:rounded-[45px] p-4 md:p-0">
      {/* Image - comes after text on mobile */}
      <div className="flex-1 w-full h-auto order-first md:order-none">
        <img
          src={group}
          alt="Laynova team"
          className="w-full h-auto object-cover rounded-t-xl md:rounded-l-[45px] md:rounded-tr-none"
        />
      </div>
      {/* Text Content - comes first on mobile */}
      <div className="flex-1 w-full flex flex-col justify-center items-center md:items-start p-4 md:p-8">
        <h2 className="text-2xl md:text-[40px] font-medium md:font-[500] text-white text-center md:text-left leading-tight">
          “At Laynova, we believe that success is built on innovation,
          collaboration, and a relentless focus on delivering results.
        </h2>
        <p className="hidden md:block text-[20px] font-[500] text-white mt-[45px] text-left">
          — John Smith, Founder of Laynova
        </p>
      </div>
    </div>
  );
}

export default Group