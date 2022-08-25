import React, { useRef, useEffect } from "react";

import Parallax from "parallax-js";
import { Container, Row, Col } from "reactstrap";

const BannerFour = (props) => {
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
      <section id="banner-section" className="banner-section mb-100 clearfix">
        <div className="mobile-app-banner-4">
          <Container>
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="6" md="8">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-4.png"
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
                          className="store-btn bg-default-pink"
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

              <Col lg="6" md="8">
                <div
                  className="banner-image scene"
                  id="scene"
                  ref={scenElement}
                >
                  <span className="phone-image" data-depth="0.2">
                    <small
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    >
                      <img
                        src="../assets/images/banner/mab-4-img-2.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-1" data-depth="0.4">
                    <small
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      <img
                        src="../assets/images/banner/mab-4-img-3.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="sms-image-1" data-depth="0.3">
                    <small
                      data-aos="fade-down"
                      data-aos-duration="600"
                      data-aos-delay="1000"
                    >
                      <img
                        src="../assets/images/banner/mab-4-img-4.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-2" data-depth="0.4">
                    <small
                      data-aos="fade-left"
                      data-aos-duration="800"
                      data-aos-delay="700"
                    >
                      <img
                        src="../assets/images/banner/mab-4-img-5.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="sms-image-2" data-depth="0.3">
                    <small
                      data-aos="fade-down"
                      data-aos-duration="600"
                      data-aos-delay="1200"
                    >
                      <img
                        src="../assets/images/banner/mab-4-img-6.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="tree-image" data-depth="0.2">
                    <small
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="1600"
                    >
                      <img
                        src="../assets/images/banner/mab-4-img-7.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
          <span className="bg-shape-image">
            <img
              src="../assets/images/banner/mab-4-img-1.png"
              alt="image_not_found"
            />
          </span>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BannerFour;
