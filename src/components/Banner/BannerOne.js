import React, { useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import Parallax from "parallax-js";
const BannerOne = (props) => {
  const scenElement = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(scenElement.current, {
      relativeInput: true,
    });
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, []);

  return (
    <React.Fragment>
      <section id="banner-section" className="banner-section clearfix">
        <div className="mobile-app-banner-1">
          <Container>
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="6" md="8">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-1.png"
                    alt="image_not_found"
                  />
                </div>
                {/* <!-- show on mobile device - end --> */}
                <div className="banner-content">
                  <h2>
                    We are better then
                    <strong>others. Turn your school to</strong>
                    next level
                  </h2>
                  <p>
                    We are proud to introduce one of the most technically
                    advanced and user friendly software for the school
                    management and administration paperless as well as
                    automation.
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

              <Col lg="5" md="8">
                <div
                  className="banner-image scene"
                  id="scene"
                  ref={scenElement}
                >
                  <span className="bg-image" data-depth="0.2">
                    <small
                      data-aos="zoom-in"
                      data-aos-duration="450"
                      data-aos-delay="100"
                    >
                      <img
                        src="../assets/images/banner/mab-1-img-1.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="phone-image" data-depth="0.2">
                    <small
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="500"
                    >
                      <img
                        src="../assets/images/banner/mab-1-img-2.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-1" data-depth="0.5">
                    <small
                      data-aos="fade-right"
                      data-aos-duration="550"
                      data-aos-delay="800"
                    >
                      <img
                        src="../assets/images/banner/mab-1-img-3.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-2" data-depth="0.5">
                    <small
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-delay="1000"
                    >
                      <img
                        src="../assets/images/banner/mab-1-img-4.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-3" data-depth="0.3">
                    <small
                      data-aos="fade-down"
                      data-aos-duration="650"
                      data-aos-delay="1200"
                    >
                      <img
                        src="../assets/images/banner/mab-1-img-5.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="cog-image" data-depth="0.4">
                    <small
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-delay="1500"
                    >
                      <img
                        src="../assets/images/banner/mab-1-img-6.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="leaf-image-1" data-depth="0.4">
                    <small
                      data-aos="fade-left"
                      data-aos-duration="450"
                      data-aos-delay="1500"
                    >
                      <img
                        src="../assets/images/banner/mab-1-img-7.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="leaf-image-2" data-depth="0.4">
                    <small
                      data-aos="fade-right"
                      data-aos-duration="450"
                      data-aos-delay="1500"
                    >
                      <img
                        src="../assets/images/banner/mab-1-img-8.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>

          <small className="shape-1">
            <img
              src="../assets/images/shapes/cross-2.png"
              alt="cross_shape_image"
            />
          </small>
          <small className="shape-2">
            <img
              src="../assets/images/shapes/flow-1-2.png"
              alt="flow_shape_image"
            />
          </small>
          <small className="shape-3">
            <img
              src="../assets/images/shapes/circle-half-2.png"
              alt="circle_half_shape_image"
            />
          </small>
          <small className="shape-4">
            <img
              src="../assets/images/shapes/circle-half-2.png"
              alt="circle_half_shape_image"
            />
          </small>
          <small className="shape-5">
            <img
              src="../assets/images/shapes/flow-2-2.png"
              alt="flow_shape_image"
            />
          </small>
          <small className="shape-6">
            <img
              src="../assets/images/shapes/box-2.png"
              alt="box_shape_image"
            />
          </small>
          <small className="shape-7">
            <img
              src="../assets/images/shapes/circle-2.png"
              alt="circle_shape_image"
            />
          </small>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BannerOne;
