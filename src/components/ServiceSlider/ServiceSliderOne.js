import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import ServiceSlideOne from "../../data/serviceslider/service-slide-one.json";
import titleThree from "../../data/title/title-three.json";
import "swiper/swiper-bundle.css";
SwiperCore.use(Pagination, Navigation);

const [{ Paragraph }] = titleThree;
const ServiceSliderOne = ({ sectionSpace }) => {
  return (
    <div className={`service-section ${sectionSpace} clearfix`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-60 mt-60 ">
              <h1 className="title-text mb-30">Our Features</h1>
              <p className="paragraph-text mb-0">{Paragraph}</p>
            </div>
          </div>
        </div>

        <div className="service-carousel">
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 5,
              },
            }}
          >
            {ServiceSlideOne.map((item, index) => {
              return (
                <SwiperSlide className="item" key={index}>
                  <div className="service-item">
                    <span
                      className="item-icon"
                      style={{ backgroundImage: `url(${item.img})` }}
                    >
                      <i className={item.icon}></i>
                    </span>
                    <small className="item-title">{item.title}</small>
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

export default ServiceSliderOne;
