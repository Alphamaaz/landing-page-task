import React, { useState } from 'react'
import "../styles/Accordian.css"
import minus from '../images/minus.svg'
import plus from '../images/plus.svg'
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
      <div className="services">
        <div className="services_tag">
          <div className="working">
            <span className="span">Our Working </span>
            <span>
              <br className="mobile-break" />
            </span>
            <span className="span"> Process </span>
          </div>
          <div className="services_desc">
            <p>
              Step-by-Step Guide to Achieving <br className="desktop-break" />{" "}
              Your Business Goals
            </p>
          </div>
        </div>
      </div>

      {/* Accordian Items  */}

      <div className="accordion-container">
        {steps.map((step, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`accordion-item ${isOpen ? "open" : ""}`}
            >
              <button
                className="accordion-header"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="accordian_number">
                  <strong>{step.number}</strong> {step.title}
                </span>

                <span className="accordion-toggle">
                  <img src={`${isOpen ? minus : plus}`} alt="" />{" "}
                </span>
              </button>

              {/* line */}
              <div
                className={`accordion-content-wrapper ${isOpen ? "open" : ""}`}
              >
                <div className="accordian_line"></div>
                <div className="accordion-content">{step.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Accordians