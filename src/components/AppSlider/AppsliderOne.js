import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Container, Row, Col } from "reactstrap";
SwiperCore.use(Pagination);
const AppSliderOne = () => {
  const params = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Fragment>
      <section id="slider-section" className="slider-section clearfix">
        <Swiper
          {...params}
          id="appstore-main-carousel"
          className="appstore-main-carousel"
        >
          <SwiperSlide className="item">
            <Container>
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col lg="7" md="8" xs="12">
                  {/* <!-- show on mobile device - start --> */}
                  <div className="mobile-banner-image d-none">
                    <img
                      src="../assets/images/mobile-banner/img-11-1.png"
                      alt="image_not_found"
                    />
                  </div>
                  {/* <!-- show on mobile device - start --> */}
                  <div className="item-content">
                    <h1 className="title-text">
                      Date Anywhere App{" "}
                      <span>Available for free all Platform</span>
                    </h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor anagi icdunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <div className="btns-group ul-li clearfix">
                      <ul className="clearfix">
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://appleid.apple.com/"
                            target="_blank"
                            className="store-btn bg-default-black"
                          >
                            <span className="icon">
                              <i className="flaticon-apple"></i>
                            </span>
                            <strong className="title-text">
                              <small>available on</small>
                              apple store
                            </strong>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://play.google.com/store/apps/details?id=io.ionic.studentmis"
                            target="_blank"
                            className="store-btn bg-default-pink"
                          >
                            <span className="icon">
                              <i className="fab fa-google-play"></i>
                            </span>
                            <strong className="title-text">
                              <small>available on</small>
                              google play
                            </strong>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.microsoft.com/en-us/store/apps/windows"
                            target="_blank"
                            className="store-btn bg-default-blue"
                          >
                            <span className="icon">
                              <i className="fab fa-windows"></i>
                            </span>
                            <strong className="title-text">
                              <small>available on</small>
                              windows store
                            </strong>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col lg="4" xs="12">
                  <div className="item-image text-center">
                    <span
                      className="bg-image"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <img
                        src="../assets/images/slider/shape-1.png"
                        alt="image_not_found"
                      />
                    </span>
                    <span
                      className="phone-image-1"
                      data-aos="zoom-out"
                      data-aos-delay="300"
                    >
                      <img
                        src="../assets/images/slider/img-1.png"
                        alt="image_not_found"
                      />
                    </span>
                    <span
                      className="man-image-1"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      <img
                        src="../assets/images/slider/img-2.png"
                        alt="image_not_found"
                      />
                    </span>
                    <span
                      className="man-image-2"
                      data-aos="fade-right"
                      data-aos-delay="600"
                    >
                      <img
                        src="../assets/images/slider/img-3.png"
                        alt="image_not_found"
                      />
                    </span>
                    <span
                      className="comment-image"
                      data-aos="fade-down"
                      data-aos-delay="800"
                    >
                      <img
                        src="../assets/images/slider/img-4.png"
                        alt="image_not_found"
                      />
                    </span>
                    <span
                      className="leaf-image-1"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <img
                        src="../assets/images/slider/img-5.png"
                        alt="image_not_found"
                      />
                    </span>
                    <span
                      className="leaf-image-2"
                      data-aos="fade-left"
                      data-aos-delay="450"
                    >
                      <img
                        src="../assets/images/slider/img-6.png"
                        alt="image_not_found"
                      />
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide className="item">
            <Container>
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col lg="7" md="8" xs="12">
                  {/* <!-- show on mobile device - start --> */}
                  <div className="mobile-banner-image d-none">
                    <img
                      src="../assets/images/mobile-banner/img-11-2.png"
                      alt="image_not_found"
                    />
                  </div>
                  {/* <!-- show on mobile device - start --> */}
                  <div className="item-content">
                    <h1 className="title-text">
                      Date Anywhere App{" "}
                      <span>Available for free all Platform</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor anagi icdunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <div className="btns-group ul-li clearfix">
                      <ul className="clearfix">
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://appleid.apple.com/"
                            target="_blank"
                            className="store-btn bg-default-black"
                          >
                            <span className="icon">
                              <i className="flaticon-apple"></i>
                            </span>
                            <strong className="title-text">
                              <small>available on</small>
                              apple store
                            </strong>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://play.google.com/store/apps/details?id=io.ionic.studentmis"
                            target="_blank"
                            className="store-btn bg-default-pink"
                          >
                            <span className="icon">
                              <i className="fab fa-google-play"></i>
                            </span>
                            <strong className="title-text">
                              <small>available on</small>
                              google play
                            </strong>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="noopener noreferrer"
                            href="https://www.microsoft.com/en-us/store/apps/windows"
                            target="_blank"
                            className="store-btn bg-default-blue"
                          >
                            <span className="icon">
                              <i className="fab fa-windows"></i>
                            </span>
                            <strong className="title-text">
                              <small>available on</small>
                              windows store
                            </strong>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col lg="4" xs="12" className="col-lg-4">
                  <div className="item-image text-center">
                    <span
                      className="bg-image"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <img
                        src="../assets/images/slider/shape-1.png"
                        alt="image_not_found"
                      />
                    </span>
                    <span
                      className="phone-image-2"
                      data-aos="zoom-out"
                      data-aos-delay="300"
                    >
                      <img
                        src="../assets/images/slider/img-7.png"
                        alt="image_not_found"
                      />
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        </Swiper>
        {/* <!-- If we need navigation buttons --> */}
        <div className="custom-pagination">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default AppSliderOne;
