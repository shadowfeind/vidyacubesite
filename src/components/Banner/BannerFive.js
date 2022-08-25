import React, { Fragment, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import Parallax from "parallax-js";
const BannerFour = ({ sectionSpace }) => {
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
        <div
          className="mobile-app-banner-5"
          style={{
            backgroundImage: `url('../assets/images/banner/bg-img-1.png')`,
          }}
        >
          <Container className="container">
            <Row className="row justify-content-lg-start justify-content-md-center">
              <Col lg="6" md="8" xs="12">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-5.png"
                    alt="image_not_found"
                  />
                </div>
                {/* <!-- show on mobile device - end --> */}
                <div className="banner-content">
                  <h1 className="title-text mb-30">
                    We are better then <span>others Turn your business</span> to
                    next level
                  </h1>
                  <p className="paragraph-text mb-60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor anagi icdunt ut labore et dolore magna
                    aliqua.
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

              <Col lg="6" md="8" xs="12">
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
                        src="../assets/images/features/animation/2-img-2.png"
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
        </div>
      </section>
    </Fragment>
  );
};

export default BannerFour;
