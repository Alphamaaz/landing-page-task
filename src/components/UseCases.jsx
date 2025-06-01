import React, { useEffect, useState } from "react";
import CommonHead from "./CommonHead";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CommonHeadAbout from "./CommonHeadAbout";

const data = [
  {
    title: "E-commerce Fashion Brand",
    text: "We implemented a tailored SEO strategy that boost organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
  },
  {
    title: "Local Restaurant Chain",
    text: "By optimizing local SEO and enhancing Google My Business profit, we increased visibility, driving a 30% boost in online reservations and foot traffic.",
  },
  {
    title: "Healthcare Provider",
    text: "Through content optimization and targeted keyword strategy, we heaped a healthcare provider rank on the first page for critical services in inquiries and patient bookings.",
  },
];

export default function UseCases() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <CommonHeadAbout
        max_width={"80%"}
        title="Use Cases"
        text={
          <>
            Explore Real-Life Examples of our proven digital marketing
            <br className="hidden md:block" /> success through our case studies
          </>
        }
      />

      {/* Mobile View */}
      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          className="mt-8 px-4 md:hidden"
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          centeredSlides={true}
          loop={false}
          watchOverflow={true}
        >
          {data.map((text, idx) => (
            <SwiperSlide
              key={idx}
              className="bg-[var(--dark)] rounded-3xl p-8 w-full"
            >
              <div className="flex flex-col">
                <h3 className="text-white mb-4 text-2xl font-medium">
                  {text.title}
                </h3>
                <p className="text-white text-base">{text.text}</p>
                <div className="flex gap-4 items-center mt-5 text-[var(--primary-color)] text-xl cursor-pointer transition-transform hover:translate-x-1">
                  <span className="text-base">Learn more</span>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-5 flex justify-center gap-2"></div>
        </Swiper>
      ) : (
        /* Desktop View */
        <div className="mt-14 px-14 py-16 bg-[var(--dark)] text-white rounded-[45px] hidden md:flex items-center gap-16">
          {data.map((text, index) => (
            <div key={index} className="flex min-w-0">
              <div className="flex flex-col">
                <h3 className="text-white mb-4 text-2xl font-medium">
                  {text.title}
                </h3>
                <p className="text-lg">{text.text}</p>
                <div className="flex gap-4 items-center mt-5 text-[var(--primary-color)] text-xl cursor-pointer transition-transform hover:translate-x-1">
                  <span>Learn more</span>
                  <ArrowUpRight size={20} />
                </div>
              </div>
              {index < data.length - 1 && (
                <div
                  className="w-px h-[230px] rounded ml-5" // <-- use `mx-4` for horizontal margin
                  style={{
                    border: "1px solid",
                    borderImageSource:
                      "linear-gradient(180deg, #000000 0%, #FFFFFF 50.48%, #000000 100%)",
                    borderImageSlice: 1,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Custom Pagination Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: var(--primary-color);
        }
      `}</style>
    </div>
  );
}
