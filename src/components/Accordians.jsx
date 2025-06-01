import React, { useState } from 'react'
import "../styles/Accordian.css"
import minus from '../images/minus.svg'
import plus from '../images/plus.svg'
import BreakHead from './BreakHead'
const Accordians = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const steps = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we'll discuss your business goals, target audience, and current marketing efforts. This discovery phase helps us understand your unique needs and craft a customized strategy that delivers measurable results.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "We conduct comprehensive market research, competitor analysis, and audience profiling to develop a data-driven strategy. Our team then creates a customized roadmap with clear KPIs, ensuring every tactic aligns with your business objectives and market opportunities.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "Our experts execute the strategy with precision, deploying campaigns across selected channels while maintaining brand consistency. We handle everything from content creation and platform setup to technical implementation, ensuring seamless launch and operation.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "Through real-time performance tracking and A/B testing, we continuously refine campaigns for maximum impact. Our team makes data-backed adjustments to targeting, messaging, and budgets to improve ROI and capitalize on emerging opportunities.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "You'll receive transparent, monthly reports with clear metrics and actionable insights. Our regular strategy sessions ensure you understand performance drivers and maintain full visibility into your marketing investment's effectiveness.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "We don't stop at good results. By analyzing long-term trends and testing innovative approaches, we evolve your strategy to maintain competitive advantage. Our proactive optimizations ensure sustained growth in changing market conditions.",
    },
  ];
  return (
    <>
      <BreakHead
        span1={"Our Working"}
        span2={"Process "}
        text={
          <>
            Step-by-Step Guide to Achieving <br className="desktop-break" />
            Your Business Goals
          </>
        }
      />

      {/* Accordian Items  */}

      <div className="w-full mt-[45px] md:mt-[80px] px-4 md:px-0">
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