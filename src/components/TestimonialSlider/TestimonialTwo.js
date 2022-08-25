import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import TestimonialTwo from "../../data/testimonial/testimonial-two.json";
import titleFoure from "../../data/title/title-foure.json";
import "swiper/swiper-bundle.css";

SwiperCore.use(Navigation);

const [{ subTitle, title }] = titleFoure;
const TestimonialSliderTwo = ({ bgColor, sectionSpace }) => {
  return (
    <div className={`testimonial-section ${bgColor} ${sectionSpace} clearfix`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title mb-100 text-center">
              <span className="sub-title mb-15">{subTitle}</span>
              <h2 className="title-text mb-0">{title}</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-carousel">
          <Swiper
            navigation
            spaceBetween={80}
            slidesPerView={1}
            loop={true}
            autoplay={true}
          >
            {TestimonialTwo.map((item, index) => {
              return (
                <SwiperSlide className="item item-style-2 clearfix" key={index}>
                  <div className="hero-image">
                    <img src={item.img} alt="image_not_found" />
                    <span
                      className="icon aos-init aos-animate"
                      data-aos="zoom-in"
                      data-aos-duration="450"
                    >
                      <i className="flaticon-quotation"></i>
                    </span>
                    <small className="design-image">
                      <img
                        src="../assets/images/testimonial/design-image-1.png"
                        alt="image_not_found"
                      />
                    </small>
                    <small className="shape-image">
                      <img src={item.shape} alt="image_not_found" />
                    </small>
                  </div>

                  <div className="testimonial-content">
                    <div className="hero-info mb-60">
                      <h4 className="hero-name">{item.title}</h4>
                      <span className="hero-title">{item.heroTitle}</span>
                      <div className="rating-star ul-li clearfix">
                        <ul className="clearfix">
                          <li className="rated">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="rated">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="rated">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="rated">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="rated">
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="paragraph-text mb-0">{item.paragraphText}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderTwo;
