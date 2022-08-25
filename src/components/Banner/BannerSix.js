import React, { Fragment, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import Parallax from "parallax-js";
const BannerSix = ({ sectionSpace }) => {
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
      <section
        id="banner-section"
        className={`banner-section ${sectionSpace} clearfix`}
      >
        <div className="mobile-app-banner-6">
          <Container>
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="7" md="8" xs="12">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-6.png"
                    alt="image_not_found"
                  />
                </div>
                {/* <!-- show on mobile device - end --> */}
                <div className="banner-content">
                  <h2>
                    We are better then others
                    <strong>Turn your business to next level</strong>
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

              <Col lg="3">
                <div
                  className="banner-image scene clearfix"
                  id="scene"
                  ref={scenElement}
                >
                  <span className="phone-image float-right" data-depth="0.2">
                    <small
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="200"
                    >
                      <img
                        src="../assets/images/banner/img-1.png"
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
                        src="../assets/images/features/animation/1-img-3.png"
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
                        src="../assets/images/features/animation/1-img-4.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
          <span className="shape-bg-image">
            <img
              src="../assets/images/banner/mab-6-img-1.png"
              alt="image_not_found"
            />
          </span>
        </div>
      </section>
    </Fragment>
  );
};

export default BannerSix;
