import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// rating
import { rating } from "../Rating";

// import required modules
import { Autoplay } from "swiper/modules";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          870: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonials &&
          testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.id}>
                <div className="slider-header">
                  <img
                    src={`/assets/images/${testimonial.userImage}`}
                    alt=""
                    width={65}
                  />
                  <h5>{testimonial.userName}</h5>
                </div>
                <p>{testimonial.userComment}</p>
                <span>
                  {rating.map((star) => {
                    return star.id === testimonial.ratingValue && star.stars;
                  })}
                </span>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
