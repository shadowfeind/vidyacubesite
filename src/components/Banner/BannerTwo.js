import React, { Fragment, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import Parallax from "parallax-js";
const BannerTwo = () => {
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
      <section id="banner-section" className="banner-section clearfix">
        <div
          className="mobile-app-banner-2"
          style={{
            backgroundImage: `url(../assets/images/banner/bg-img-4.jpg)`,
          }}
        >
          <span
            className="shape-image-1"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-delay="100"
          >
            <img
              src="../assets/images/banner/shape-5.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-image-2">
            <small data-aos="zoom-in" data-aos-duration="1000" data-delay="800">
              <img
                src="../assets/images/banner/shape-6.png"
                alt="image_not_found"
              />
            </small>
          </span>
          <span className="shape-image-3">
            <small
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-delay="1000"
            >
              <img
                src="../assets/images/banner/shape-7.png"
                alt="image_not_found"
              />
            </small>
          </span>
          <span className="shape-image-4">
            <small
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-delay="1200"
            >
              <img
                src="../assets/images/banner/shape-8.png"
                alt="image_not_found"
              />
            </small>
          </span>
          <Container>
            <Row className="row justify-content-lg-start justify-content-md-center">
              <Col lg="6" md="8" xs="12">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-2.png"
                    alt="image_not_found"
                  />
                </div>
                {/* <!-- show on mobile device - end --> */}
                <div className="banner-content">
                  <h2>
                    We are better then
                    <strong>others Turn your business</strong>
                    to next level
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor anagi icdunt ut labore et dolore magna
                    aliqua.
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
                          className="store-btn bg-default-blue"
                        >
                          <span className="icon">
                            <i className="flaticon-google-play"></i>
                          </span>
                          <strong className="title-text">
                            <small>available on</small>
                            google play
                          </strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg="6" md="8" xs="12">
                <div
                  className="banner-image scene"
                  id="scene"
                  ref={scenElement}
                >
                  <span
                    className="phone-image"
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <img
                      src="../assets/images/banner/mab-2-img-1.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span className="man-image-1" data-depth="0.1">
                    <small
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-delay="500"
                    >
                      <img
                        src="../assets/images/banner/mab-2-img-2.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-2" data-depth="0.1">
                    <small
                      data-aos="fade-left"
                      data-aos-duration="500"
                      data-aos-delay="600"
                    >
                      <img
                        src="../assets/images/banner/mab-2-img-3.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="message-image" data-depth="0.2">
                    <small
                      data-aos="fade-down"
                      data-aos-duration="1200"
                      data-aos-delay="900"
                    >
                      <img
                        src="../assets/images/banner/mab-2-img-4.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="leaf-image-1" data-depth="0.2">
                    <small
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="1200"
                    >
                      <img
                        src="../assets/images/banner/mab-2-img-5.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="leaf-image-2" data-depth="0.2">
                    <small
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      data-aos-delay="1300"
                    >
                      <img
                        src="../assets/images/banner/mab-2-img-6.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Fragment>
  );
};

export default BannerTwo;
