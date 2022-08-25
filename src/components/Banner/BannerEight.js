import React, { Fragment, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Parallax from "parallax-js";
const BannerEight = () => {
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
        className="banner-section bg-light-gray clearfix"
      >
        <div className="sass-banner-2 clearfix">
          <Container>
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="5" md="8" xs="12">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-8.png"
                    alt="image_not_found"
                  />
                </div>
                {/* <!-- show on mobile device - end --> */}
                <div className="banner-content">
                  <h2 className="title-text mb-30">
                    Any time, anywhere,{" "}
                    <span>it doesn’t matter, make your</span> remote team more
                    faster
                  </h2>
                  <p>
                    The most powerful software for any kind of School
                    Management. It does’t matter how big or small your School
                    is.
                  </p>
                  <div className="newsletter-form">
                    <form action="#">
                      <div className="form-item">
                        <input type="email" placeholder="enter email address" />
                        <button
                          type="submit"
                          className="submit-btn bg-default-blue"
                        >
                          try it free
                        </button>
                      </div>
                      <p className="mb-0">No Credit Card Required*</p>
                    </form>
                  </div>
                </div>
              </Col>

              <Col lg="6" md="8" xs="12">
                <div
                  className="banner-item-image scene"
                  id="scene"
                  ref={scenElement}
                >
                  <span className="bg-image" data-aos="zoom-in">
                    <img
                      src="../assets/images/banner/sb-2-shape-bg-1.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span className="big-image" data-depth="0.2">
                    <small data-aos="zoom-out" data-aos-delay="200">
                      <img
                        src="../assets/images/banner/sb-2-img-1.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-1" data-depth="0.5">
                    <small data-aos="fade-right" data-aos-delay="500">
                      <img
                        src="../assets/images/banner/sb-2-img-2.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-2" data-depth="0.5">
                    <small data-aos="fade-left" data-aos-delay="700">
                      <img
                        src="../assets/images/banner/sb-2-img-3.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-3" data-depth="0.5">
                    <small data-aos="fade-left" data-aos-delay="800">
                      <img
                        src="../assets/images/banner/sb-2-img-4.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-4" data-depth="0.5">
                    <small data-aos="fade-right" data-aos-delay="900">
                      <img
                        src="../assets/images/banner/sb-2-img-5.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="man-image-5" data-depth="0.5">
                    <small data-aos="fade-up" data-aos-delay="1000">
                      <img
                        src="../assets/images/banner/sb-2-img-12.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="leaf-image-1" data-depth="0.3">
                    <small data-aos="flip-right" data-aos-delay="800">
                      <img
                        src="../assets/images/banner/sb-2-img-8.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="leaf-image-2" data-depth="0.3">
                    <small data-aos="zoom-in" data-aos-delay="1150">
                      <img
                        src="../assets/images/banner/sb-2-img-8-1.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="comment-image" data-depth="0.6">
                    <small data-aos="fade-down" data-aos-delay="1050">
                      <img
                        src="../assets/images/banner/sb-2-img-6.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="share-image" data-depth="0.6">
                    <small data-aos="fade-down" data-aos-delay="1100">
                      <img
                        src="../assets/images/banner/sb-2-img-7.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="cloud-image-1" data-depth="0.2">
                    <small data-aos="fade-down" data-aos-delay="1200">
                      <img
                        src="../assets/images/banner/sb-2-img-9.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="cloud-image-2" data-depth="0.3">
                    <small data-aos="fade-up" data-aos-delay="1300">
                      <img
                        src="../assets/images/banner/sb-2-img-10.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="cloud-image-3" data-depth="0.3">
                    <small data-aos="fade-up" data-aos-delay="1350">
                      <img
                        src="../assets/images/banner/sb-2-img-10.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="cloud-image-4" data-depth="0.3">
                    <small data-aos="fade-up" data-aos-delay="1400">
                      <img
                        src="../assets/images/banner/sb-2-img-11.png"
                        alt="image_not_found"
                      />
                    </small>
                  </span>
                  <span className="cloud-image-5" data-depth="0.3">
                    <small data-aos="fade-up" data-aos-delay="1450">
                      <img
                        src="../assets/images/banner/sb-2-img-11.png"
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

export default BannerEight;
