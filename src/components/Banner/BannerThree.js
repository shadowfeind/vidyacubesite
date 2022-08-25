import React, { Fragment, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Parallax from "parallax-js";
import { Container, Row, Col } from "reactstrap";
SwiperCore.use(Pagination);
const BannerThree = () => {
  const scenElement = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(scenElement.current, {
      relativeInput: true,
    });
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, []);

  return (
    <Fragment>
      <section id="slider-section" className="slider-section mb-100 clearfix">
        <div id="mobileapp-main-carousel" className="mobileapp-main-carousel">
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 1,
              },

              1200: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide
              className="item first-item"
              style={{
                backgroundImage: `url('../assets/images/slider/bg-img-1.jpg')`,
              }}
            >
              <Container>
                <Row className="justify-content-center">
                  <Col md="10" xs="12">
                    <div className="slider-content text-center">
                      <h3>More Then an App</h3>
                      <h2>
                        Explore the next generation App for free and become a
                        part of community of like-minded members.
                      </h2>
                      <div className="subscribe-form">
                        <form action="#">
                          <div className="form-item">
                            <input
                              type="email"
                              placeholder="Enter Email Address"
                            />
                            <button type="submit" className="submit-btn">
                              Get Started
                            </button>
                          </div>
                        </form>
                        <p>We won’t spam you, Pinky Promise !</p>
                      </div>
                      <span className="phone-image">
                        <img
                          src="../assets/images/slider/img-8.png"
                          alt="image_not_found"
                        />
                      </span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
            <SwiperSlide
              className="item second-item"
              style={{
                backgroundImage: `url('../assets/images/slider/bg-img-2.jpg')`,
              }}
            >
              <Container>
                <Row className="justify-content-lg-between justify-content-md-center">
                  <Col lg="6" md="8" xs="12">
                    <div className="slider-content">
                      <h1 className="title-text mb-30">
                        We are better then{" "}
                        <span>others Turn your business</span> to next level
                      </h1>
                      <p className="paragraph-text mb-60">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor anagi icdunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div className="newsletter-form">
                        <form action="#">
                          <div className="form-item">
                            <input
                              className="email-input"
                              type="email"
                              placeholder="Enter Email Address"
                            />
                            <button
                              type="submit"
                              className="form-item-btn bg-default-blue"
                            >
                              subscribe
                            </button>
                          </div>
                        </form>
                        <p className="paragraph-text mb-0">
                          We won’t spam you, Pinky Promise !
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4">
                    <div
                      className="slider-image scene clearfix"
                      id="scene"
                      ref={scenElement}
                    >
                      <span className="phone-image" data-depth="0.2">
                        <small
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          data-aos-delay="200"
                        >
                          <img
                            src="../assets/images/slider/img-9.png"
                            alt="image_not_found"
                          />
                        </small>
                      </span>
                      <span className="commentbar-image-1" data-depth="0.5">
                        <small
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="700"
                        >
                          <img
                            src="../assets/images/slider/img-10.png"
                            alt="image_not_found"
                          />
                        </small>
                      </span>
                      <span className="commentbar-image-2" data-depth="0.5">
                        <small
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="1000"
                        >
                          <img
                            src="../assets/images/slider/img-11.png"
                            alt="image_not_found"
                          />
                        </small>
                      </span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
            <SwiperSlide
              className="item first-item"
              style={{
                backgroundImage: `url('../assets/images/slider/bg-img-1.jpg')`,
              }}
            >
              <Container>
                <Row className="justify-content-center">
                  <Col md="10" xs="12">
                    <div className="slider-content text-center">
                      <h3>More Then an App</h3>
                      <h2>
                        Explore the next generation App for free and become a
                        part of community of like-minded members.
                      </h2>
                      <div className="subscribe-form">
                        <form action="#">
                          <div className="form-item">
                            <input
                              type="email"
                              placeholder="Enter Email Address"
                            />
                            <button type="submit" className="submit-btn">
                              Get Started
                            </button>
                          </div>
                        </form>
                        <p>We won’t spam you, Pinky Promise !</p>
                      </div>
                      <span className="phone-image">
                        <img
                          src="../assets/images/slider/img-8.png"
                          alt="image_not_found"
                        />
                      </span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>

            <SwiperSlide
              className="item second-item"
              style={{
                backgroundImage: `url('../assets/images/slider/bg-img-2.jpg')`,
              }}
            >
              <Container>
                <Row className="justify-content-lg-between justify-content-md-center">
                  <Col lg="6" md="8" xs="12">
                    <div className="slider-content">
                      <h1 className="title-text mb-30">
                        We are better then{" "}
                        <span>others Turn your business</span> to next level
                      </h1>
                      <p className="paragraph-text mb-60">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor anagi icdunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div className="newsletter-form">
                        <form action="#">
                          <div className="form-item">
                            <input
                              className="email-input"
                              type="email"
                              placeholder="Enter Email Address"
                            />
                            <button
                              type="submit"
                              className="form-item-btn bg-default-blue"
                            >
                              subscribe
                            </button>
                          </div>
                        </form>
                        <p className="paragraph-text mb-0">
                          We won’t spam you, Pinky Promise !
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col lg="4">
                    <div className="slider-image scene clearfix">
                      <span className="phone-image" data-depth="0.2">
                        <small
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          data-aos-delay="200"
                        >
                          <img
                            src="../assets/images/slider/img-9.png"
                            alt="image_not_found"
                          />
                        </small>
                      </span>
                      <span className="commentbar-image-1" data-depth="0.5">
                        <small
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="700"
                        >
                          <img
                            src="../assets/images/slider/img-10.png"
                            alt="image_not_found"
                          />
                        </small>
                      </span>
                      <span className="commentbar-image-2" data-depth="0.5">
                        <small
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="1000"
                        >
                          <img
                            src="../assets/images/slider/img-11.png"
                            alt="image_not_found"
                          />
                        </small>
                      </span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default BannerThree;
