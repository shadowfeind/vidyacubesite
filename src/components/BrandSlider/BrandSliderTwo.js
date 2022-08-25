import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import brandData from "../../data/brand/brand.json";

const BrandSliderTwo = (props) => {
  const params = {
    spaceBetween: 30,
    slidesPerView: 5,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
      1500: {
        slidesPerView: 6,
      },
    },
  };

  return (
    <div id="client-section" className="client-section  pb-0 clearfix">
      <div id="client-carousel" className="client-carousel">
        <p className="title-paragraph-text">
          Join these companies{" "}
          <span>Who already use Appal to keep their teams in-the-know</span>
        </p>
        <div className="container">
          <Swiper {...params}>
            {/* <!-- client-section - start
		================================================== --> */}

            {brandData.map(function (slide, index) {
              return (
                <SwiperSlide key={index} className="item">
                  <a className="client-logo" href="#!">
                    <span className="before-image">
                      <img src={slide.img} alt={slide.alt} />
                    </span>
                    <span className="after-image">
                      <img src={slide.img} alt={slide.alt} />
                    </span>
                  </a>
                </SwiperSlide>
              );
            })}

            {/* <!-- client-section - end
		================================================== --> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSliderTwo;
