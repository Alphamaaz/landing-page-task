import React from 'react'
import "../styles/Accordian.css"
const BreakHead = ({span1,span2,text,gap}) => {
  return (
    <div className="mt-[50px] md:mt-[100px] ">
      <div
        className={`flex flex-col md:flex-row  items-center md:items-start gap-8 md:gap-[${gap}]`}
      >
        <div className="working">
          <span className="span">{span1} </span>
          <span>
            <br className="mobile-break" />
          </span>
          <span className="span"> {span2}</span>
        </div>
        <div className="text-[16px] text-center md:text-start md:text-[18px] font-[400]">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default BreakHead