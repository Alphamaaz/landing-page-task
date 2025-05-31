import React from 'react'

const CommonHeadAbout = ({title,text,max_width}) => {
  return (
    <div className={`mt-[50px] md:mt-[80px] flex w-full justify-center md:justify-between items-start gap-4 flex-wrap max-w-[${max_width}]`}>
      <div className="bg-[var(--primary-color)] p-2 rounded">
        <h2 className="text-[25px] md:text-[40px] font-[500] ">{title}</h2>
      </div>
      <div className=" ">
        <p className="text-gray-700 text-[16px] md:text[18px] font-[400] text-center md:text-start mt-3 md:mt-[0px]">{text}</p>
      </div>
    </div>
  );
}

export default CommonHeadAbout