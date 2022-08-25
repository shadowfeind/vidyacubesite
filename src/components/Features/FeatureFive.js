import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import featureDataOne from "../../data/feature/feature-one.json";
import featureDataTwo from "../../data/feature/feature-two.json";

const [{ paragraph1, paragraph2, subTitle, title, span }] = featureDataOne;
const FeatureFive = () => {
  return (
    <Fragment>
      <section
        id="features-section"
        className="features-section sec-ptb-160 clearfix"
      >
        <Container>
          <div className="feature-item">
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="5" md="6">
                <div className="feature-image-4 float-left clearfix">
                  <span
                    className="phone-image aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-1.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span className="floor-image">
                    <img
                      src="../assets/images/features/animation/7-img-2.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="man-image-1 aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-delay="500"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-3.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="flower-image-2 aos-init aos-animate"
                    data-aos="fade-down"
                    data-aos-delay="800"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-6.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="comment-1-image aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-5.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="comment-2-image aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay="650"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-4.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="shape-image-1 aos-init aos-animate"
                    data-aos="zoom-in-up"
                    data-aos-delay="1000"
                  >
                    <img
                      src="../assets/images/features/animation/6-img-4.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="shape-image-2 aos-init aos-animate"
                    data-aos="zoom-in-right"
                    data-aos-delay="1100"
                  >
                    <img
                      src="../assets/images/features/animation/6-img-3.png"
                      alt="image_not_found"
                    />
                  </span>
                </div>
              </Col>
              <Col lg="6" md="8">
                <div className="feature-content">
                  <div className="section-title mb-60">
                    <span className="sub-title mb-15">{subTitle}</span>
                    <h2 className="title-text mb-0">
                      {title}
                      <span>{span}</span>
                    </h2>
                  </div>

                  <p className="mb-30">{paragraph1}</p>
                  <p className="mb-60">{paragraph2}</p>

                  <div className="btns-group ul-li clearfix">
                    <ul className="clearfix">
                      <li>
                        <Link to="/pricing-page" className="custom-btn">
                          try it free
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/features-saas-landing-creative"
                          className="custom-btn-underline"
                        >
                          See All Features
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="feature-item">
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="6" md="8">
                <div className="feature-content">
                  {featureDataTwo.map((featureDataTwo, key) => {
                    return (
                      <div key={key} className="section-title mb-30">
                        <span className="sub-title mb-15">
                          {featureDataTwo.subTitle}
                        </span>
                        <h2 className="title-text mb-0">
                          {featureDataTwo.title}
                          <span>{featureDataTwo.span}</span>
                        </h2>
                      </div>
                    );
                  })}

                  {featureDataTwo.map((featureDataTwo, key) => {
                    return (
                      <p key={key} className="mb-30">
                        {featureDataTwo.paragraph1}
                      </p>
                    );
                  })}

                  <div className="info-list ul-li-block mb-45 clearfix">
                    <ul className="clearfix">
                      <li>
                        <small className="icon">
                          <i className="flaticon-checked"></i>
                        </small>
                        <span className="info-text">
                          the and expound the actual teachings of the great
                          explorer of the truth, of human happiness. NoM one
                          rejects.
                        </span>
                      </li>
                      <li>
                        <small className="icon">
                          <i className="flaticon-checked"></i>
                        </small>
                        <span className="info-text">
                          the and expound the actual teachings of the great
                          explorer.
                        </span>
                      </li>
                      <li>
                        <small className="icon">
                          <i className="flaticon-checked"></i>
                        </small>
                        <span className="info-text">
                          the and expound the actual teachings of the great
                          explorer of the truth, of human happiness. NoM one
                          rejects.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Link to="/pricing-page" className="custom-btn-underline m-0">
                    Start 30 Days Free Trail
                  </Link>
                </div>
              </Col>

              <Col lg="5" md="6">
                <div className="feature-image-4 float-right clearfix">
                  <span
                    className="phone-image float-right aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-7.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="box-image-1 aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-8.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="box-image-2 aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-9.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="box-image-3 aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-10.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span className="man-image-1">
                    <img
                      src="../assets/images/features/animation/7-img-11.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="man-image-2 aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-delay="550"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-12.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="flower-image aos-init aos-animate"
                    data-aos="zoom-in-down"
                    data-aos-delay="700"
                  >
                    <img
                      src="../assets/images/features/animation/7-img-13.png"
                      alt="image_not_found"
                    />
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default FeatureFive;
