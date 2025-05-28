import React, { useEffect, useState } from "react";
import CommonHead from "./CommonHead";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/CaseStudies.css";

const data = [
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",

  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
];

export default function CaseStudies() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <CommonHead
        title="Case Studies"
        description={
          <>
            Explore Real-Life Examples of Our Proven Digital Marketing{" "}
            <br className="desktop-break" />
            Success through Our Case Studies
          </>
        }
      />

      {/* --------- Conditionally Render Based on Screen Size --------- */}
      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          className="caseStudies_wrapper mobile-view"
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          centeredSlides={true}
          loop={false}
          watchOverflow={true}
        >
          {data.map((text, idx) => (
            <SwiperSlide key={idx} className="case_element">
              <div className="case_content">
                <p>{text}</p>
                <div className="actions">
                  <span>Learn more</span>
                  <ArrowUpRight />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="caseStudies_wrapper desktop-view">
          {data.map((text, index) => (
            <div className="case_element" key={index}>
              <div className="case_content">
                <p>{text}</p>
                <div className="actions">
                  <span>Learn more</span>
                  <ArrowUpRight />
                </div>
              </div>
              {index < data.length - 1 && <div className="vertical_line" />}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
