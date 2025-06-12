import React, { useState } from 'react'
import "../styles/Accordian.css"
import minus from '../images/minus.svg'
import plus from '../images/plus.svg'
import BreakHead from './BreakHead'
const Accordians = ({steps,mt}) => {
  const [openIndex, setOpenIndex] = useState(0);
  
  return (
    <>
      

      {/* Accordian Items  */}

      <div className={`w-full mt-${mt} md:mt-[80px] px-4 md:px-0`}>
        {steps.map((step, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
          overflow-hidden
          border border-[#191A23]
          rounded-[20px] md:rounded-[45px]
          shadow-[0px_3px_0px_0px_#191A23] md:shadow-[0px_5px_0px_0px_#191A23]
          mb-[18px] md:mb-[30px] px-[10px] py-[10px]
           md:px-[40px] md:py-[30px]
          transition-colors
          ${isOpen ? "bg-[var(--primary-color)]" : "bg-white"}
        `}
            >
              {/* ─────────── Header ─────────── */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="
            w-full
            flex justify-between items-center
            text-left
            text-black
              md:px-[24px] md:py-[18px]
          "
              >
                {/* number + title */}
                <span
                  className="
              flex items-center
              gap-[15px] md:gap-[30px]
              text-[16px] md:text-[30px] font-normal
            "
                >
                  <strong className="text-[26px] md:text-[60px] font-[500]">
                    {step.number}
                  </strong>
                  {step.title}
                </span>

                {/* plus / minus icon */}
                <span>
                  <img
                    src={isOpen ? minus : plus}
                    alt=""
                    className="w-[24px] h-[24px] md:w-[50px] md:h-[50px]"
                  />
                </span>
              </button>

              {/* ─────────── Collapsible area ─────────── */}
              <div
                className={`
                  max-h-0 overflow-hidden
                  transition-[max-height] duration-[1500ms] ease-in-out
                  ${isOpen ? "max-h-[1000px]" : ""}
                `}
              >
                {/* divider line */}
                <div
                  className={`
                    w-full h-px bg-[#191A23]
                    my-[20px] md:my-[30px]
                    transition-opacity duration-[1500ms] ease-in-out
                    ${isOpen ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* body text */}
                <div
                  className={`
                    px-[12px] pb-[16px] md:px-[24px] md:pb-[18px]
                    text-[16px] md:text-[18px] font-normal text-[#333]
                    transition-all duration-[1500ms] ease-in-out
                    ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }
                  `}
                >
                  {step.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Accordians