import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const BannerNine = () => {
  return (
    <Fragment>
      <section id="banner-section" className="banner-section clearfix">
        <div
          className="sass-banner-3 clearfix"
          style={{
            backgroundImage: `url('../assets/images/banner/bg-img-3.png')`,
          }}
        >
          <Container>
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="7" md="8" xs="12">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-9.png"
                    alt="image_not_found"
                  />
                </div>
                {/* <!-- show on mobile device - end --> */}
                <div className="banner-content">
                  <h2 className="title-text mb-30">
                    Any time, anywhere, make{" "}
                    <span>your remote team more faster</span>
                  </h2>
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
                          30 Days free trial,{" "}
                          <span>No credit card required*</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg="5" md="8" xs="12">
                <div className="banner-item-image">
                  <span
                    className="laptop-image"
                    data-aos="zoom-out"
                    data-aos-delay="100"
                  >
                    <img
                      src="../assets/images/banner/img-3.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="child-image-1"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <img
                      src="../assets/images/banner/img-4.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="child-image-2"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <img
                      src="../assets/images/banner/img-5.png"
                      alt="image_not_found"
                    />
                  </span>
                </div>
              </Col>
            </Row>
          </Container>

          <span className="shape-1">
            <img
              src="../assets/images/shapes/cross.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-2">
            <img
              src="../assets/images/shapes/flow-1.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-3">
            <img
              src="../assets/images/shapes/circle-half.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-4">
            <img
              src="../assets/images/shapes/circle-half.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-5">
            <img src="../assets/images/shapes/box.png" alt="image_not_found" />
          </span>
          <span className="shape-6">
            <img
              src="../assets/images/shapes/flow-2.png"
              alt="image_not_found"
            />
          </span>
          <span className="shape-7">
            <img
              src="../assets/images/shapes/circle.png"
              alt="image_not_found"
            />
          </span>
        </div>
      </section>
    </Fragment>
  );
};

export default BannerNine;
