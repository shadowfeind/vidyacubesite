import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const BannerSeven = () => {
  return (
    <Fragment>
      <section id="banner-section" className="banner-section clearfix">
        <div
          className="sass-banner-1 clearfix"
          style={{
            backgroundImage: `url("../assets/images/banner/bg-img-2.png")`,
          }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="8" xs="12">
                {/* <!-- show on mobile device - start --> */}
                <div className="mobile-banner-image d-none">
                  <img
                    src="../assets/images/mobile-banner/img-7.png"
                    alt="image_not_found"
                  />
                </div>
                {/* <!-- show on mobile device - end --> */}
                <div className="banner-content text-center">
                  <h1 className="title-text mb-15">
                    Any time, anywhere, it doesn’t{" "}
                    <span>matter, make your remote team more faster</span>
                  </h1>
                  <p>
                    The most powerful software & app landing page for any kind
                    of app marketing Business. It does’t matter how big or small
                    your business.
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
                      <div className="info-list ul-li-center mb-30 clearfix">
                        <ul className="clearfix">
                          <li>30 Days Free Trail</li>
                          <li>No Credit Card Required*</li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="banner-item-image">
              <img
                src="../assets/images/banner/img-2.png"
                alt="image_not_found"
              />
              <span
                className="child-img-1"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <img
                  src="../assets/images/banner/img-2-1.png"
                  alt="image_not_found"
                />
              </span>
              <span
                className="child-img-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <img
                  src="../assets/images/banner/img-2-2.png"
                  alt="image_not_found"
                />
              </span>
              <span
                className="child-img-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <img
                  src="../assets/images/banner/img-2-3.png"
                  alt="image_not_found"
                />
              </span>
            </div>
          </Container>
        </div>
        <div className="decoration-items">
          <span className="big-circle-shape"></span>
          <small className="cross-image">
            <img
              src="../assets/images/shapes/cross.png"
              alt="image_not_found"
            />
          </small>
          <small className="flow-image-1">
            <img
              src="../assets/images/shapes/flow-1.png"
              alt="image_not_found"
            />
          </small>
          <small className="flow-image-2">
            <img
              src="../assets/images/shapes/flow-2.png"
              alt="image_not_found"
            />
          </small>
          <small className="circle-image-1">
            <img
              src="../assets/images/shapes/circle-half.png"
              alt="image_not_found"
            />
          </small>
          <small className="flow-image-3">
            <img
              src="../assets/images/shapes/flow-2.png"
              alt="image_not_found"
            />
          </small>
          <small className="circle-image-2">
            <img
              src="../assets/images/shapes/circle-half.png"
              alt="image_not_found"
            />
          </small>
          <small className="circle-image-3">
            <img
              src="../assets/images/shapes/circle.png"
              alt="image_not_found"
            />
          </small>
          <small className="box-image">
            <img src="../assets/images/shapes/box.png" alt="image_not_found" />
          </small>

          <small className="dark-box-1">
            <img
              src="../assets/images/banner/shape-1.png"
              alt="image_not_found"
            />
          </small>
          <small className="dark-box-2">
            <img
              src="../assets/images/banner/shape-2.png"
              alt="image_not_found"
            />
          </small>
          <small className="dark-box-3">
            <img
              src="../assets/images/banner/shape-1.png"
              alt="image_not_found"
            />
          </small>
          <small className="dark-box-4">
            <img
              src="../assets/images/banner/shape-2.png"
              alt="image_not_found"
            />
          </small>
        </div>
      </section>
    </Fragment>
  );
};

export default BannerSeven;
