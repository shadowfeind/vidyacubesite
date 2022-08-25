import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const BannerTen = () => {
  return (
    <Fragment>
      <section id="banner-section" className="banner-section clearfix">
        <div className="sass-banner-4 clearfix">
          <Container>
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="7" md="8" xs="12">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-10.png"
                    alt="image_not_found"
                  />
                </div>
                {/* <!-- show on mobile device - end --> */}
                <div className="banner-content">
                  <h1 className="title-text mb-30">
                    Any time, anywhere, make{" "}
                    <span>your remote team more faster</span>
                  </h1>
                  <p>
                    The most powerful software & app landing page for any kind
                    of app marketing Business. It does’t matter how big or small
                    your business.
                  </p>
                  <div className="btns-group ul-li clearfix">
                    <ul className="clearfix">
                      <li>
                        <Link to="/pricing-page" className="custom-btn">
                          try it free
                        </Link>
                      </li>
                      <li>
                        <p className="info-text mb-0">
                          No credit card required*
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg="5" xs="12">
                <div className="banner-item-image">
                  <span
                    className="laptop-image"
                    data-aos="fade-left"
                    data-aos-delay="100"
                  >
                    <img
                      src="../assets/images/banner/img-3.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span className="bg-image">
                    <img
                      src="../assets/images/banner/shape-3.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="shape-image"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <img
                      src="../assets/images/banner/shape-4.png"
                      alt="image_not_found"
                    />
                  </span>
                  <a
                    className="popup-video"
                    href="https://youtu.be/pmm-1T9Av-g"
                    data-aos="zoom-in"
                    data-aos-delay="900"
                  >
                    <i className="uil uil-play"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>

          <span className="shape-1">
            <img
              src="../assets/images/shapes/cross-2.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-2">
            <img
              src="../assets/images/shapes/flow-1-2.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-3">
            <img
              src="../assets/images/shapes/circle-half-2.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-4">
            <img
              src="../assets/images/shapes/circle-half-2.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-5">
            <img
              src="../assets/images/shapes/box-2.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-6">
            <img
              src="../assets/images/shapes/flow-2-2.png"
              alt="image_not_found"
            />
          </span>
        </div>
      </section>
    </Fragment>
  );
};

export default BannerTen;
