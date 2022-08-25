import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import BlogOne from "../../data/blog/blog-one.json";

import "swiper/swiper-bundle.css";
import titleEight from "../../data/title/title-eight.json";
SwiperCore.use(Pagination);

const [{ title, subTitle }] = titleEight;
const BlogSlider = ({ sectionSpace }) => {
  return (
    <div className={`blog-section ${sectionSpace} clearfix`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title mb-100 text-center">
              <span className="sub-title mb-15">{subTitle}</span>
              <h2 className="title-text mb-0">{title}</h2>
            </div>
          </div>
        </div>

        <div id="blog-carousel" className="blog-carousel">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {BlogOne.map((item, index) => {
              return (
                <SwiperSlide className="item" key={index}>
                  <div className="blog-grid-item clearfix">
                    <div className="blog-image">
                      <img src={item.img} alt="image_not_found " />
                      <div className="post-date">
                        <strong className="date-text">{item.day}</strong>
                        <span className="month-text">{item.month}</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="post-meta ul-li mb-30 clearfix">
                        <ul className="clearfix">
                          <li>
                            <a href="#!" className="post-admin">
                              <span className="admin-image">
                                <img src={item.metaImg} alt="image_not_found" />
                              </span>
                              {item.metaTitle}
                            </a>
                          </li>
                          <li>
                            <i className={item.metaIcon}></i> {item.metaInfo}
                          </li>
                        </ul>
                      </div>
                      <a href="#!" className="tag-link">
                        {item.link}
                      </a>
                      <h3 className="blog-title mb-0">
                        <a href="#!" className="title-link">
                          {item.titleLink}
                        </a>
                      </h3>
                    </div>
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

export default BlogSlider;
