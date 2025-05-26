import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowRight,ArrowLeft } from "lucide-react";

const TestimonialSwiper = () => {
  const swiperRef = useRef(null);
  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Sarah Johnson",
      role: "CEO at ABC Inc",
    },
    {
      text: "The level of expertise and attention to detail from Positivus is unmatched. They've become an invaluable partner for our business.",
      name: "Michael Brown",
      role: "CTO at TechSolutions",
    },
    {
      text: "Working with Positivus has been a game-changer. Their strategic approach delivered results that exceeded our expectations.",
      name: "Emily Davis",
      role: "Product Manager at Innovate",
    },
  ];

  return (
    <div className="testimonial-swiper-container">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={false}
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".custom-pagination",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
            <div className="tetimonail_name_div">
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls container */}
      <div className="controls-container">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="nav-button"
        >
          <ArrowLeft />
        </button>

        <div className="custom-pagination" />

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="nav-button"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
