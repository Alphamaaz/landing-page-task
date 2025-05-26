import React, { useState } from 'react'
import CommonHead from './CommonHead'
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
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    { number: "02", title: "Research and Strategy Development" },
    { number: "03", title: "Implementation" },
    { number: "04", title: "Monitoring and Optimization" },
    { number: "05", title: "Reporting and Communication" },
    { number: "06", title: "Continual Improvement" },
  ];
  return (
    <>
      <CommonHead
        title={"Our Working Process "}
        description={<>Step-by-Step Guide to Achieving <br />Your Business Goals</>}
      />

      {/* Accordian Items  */}
      
    <div className="accordion-container">
      {steps.map((step, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`accordion-item ${isOpen ? "open" : ""}`}>
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
            {isOpen && step.content && (
              <>
                <div className="accordian_line"></div>
                <div className="accordion-content">{step.content}</div>
              </>
            )}
          </div>
        );
      })}
    </div>



    </>
  );
}

export default Accordians