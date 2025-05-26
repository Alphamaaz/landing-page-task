import React from "react";
import CommonHead from "./CommonHead";
import { ArrowUpRight } from "lucide-react";
import "../styles/CaseStudies.css";

const CaseStudies = () => {
  const data = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  ];

  return (
    <>
      <CommonHead
        title={"Case Studies"}
        description={
          <>
            Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
            Success through Our Case Studies
          </>
        }
      />

      <div className="caseStudies_wrapper">
        {data.map((element, index) => (
          <div className="case_element" key={index}>
            <div className="case_content">
              <p>{element}</p>
              <div className="actions">
                <span>Learn more</span> <ArrowUpRight />
              </div>
            </div>
            {index < data.length - 1 && <div className="vertical_line"></div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default CaseStudies;
