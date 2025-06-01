import React from 'react'
import BreakHead from './BreakHead';
import star from "../images/star.png"
import star2 from "../images/star (2).png"
import star3 from "../images/star (3).png"
import star4 from "../images/star (4).png";
import star5 from "../images/star (5).png"
import star6 from "../images/star (6).png"
const HowWeWork = () => {

  const data = [
    {
      image: star,
      title: "Website Audit & Analysis",
      description:
        "We begin by conducting a comprehensive audit to identity areas for improvement, including technical issues, content quality, and keyword opportunities. ",
    },
    {
      image: star2,
      title: "Keyword Research & Strategy",
      description:
        "Our team researches the most relevant and high-impact keywords for your business, ensuring thta we target terms that drive qualified traffic. ",
    },
    {
      image: star3,
      title: "On-Page Optimization",
      description:
        "We optimize your website’s structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance. ",
    },
    {
      image: star4,
      title: "Content Creation & Optimization",
      description:
        "High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms. ",
    },
    {
      image: star5,
      title: "Link Building",
      description:
        "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings. ",
    },
    {
      image: star6,
      title: "Monitoring & Reporting",
      description:
        "We continuously monitor performance, track rankings ans provide detailed making data-driven adjustments to maintain and improve your results. ",
    },
  ];
  return (
    <>
      <BreakHead
        span1={"How We Work: "}
        span2={"SEO Process"}
        gap={"100px"}
        text={
          <>
            Our step-by-step SEO process ensures your website ranks higher,
            <br className="desktop-break" />
            attracts more traffic, and drives lasting results.
          </>
        }
      />
      <div className="mt-7 md:mt-[50px] space-y-4 md:space-y-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[var(--gray)] flex md:items-center md:flex-row gap-4 md:gap-[100px] p-4 md:px-[60px] md:py-[15px] rounded-2xl md:rounded-[45px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)"
          >
            <div className="w-full md:w-[150px] h-[50px] md:h-auto flex justify-center md:justify-start">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[50px] md:max-w-[150px] h-auto"
              />
            </div>
            <div className="max-w-[850px] flex flex-col md:gap-5">
              <h2 className="text-2xl md:text-[40px] font-medium md:font-[500]">
                {item.title}
              </h2>
              <p className="text-base md:text-[18px] font-normal md:font-[400] mt-2 ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HowWeWork