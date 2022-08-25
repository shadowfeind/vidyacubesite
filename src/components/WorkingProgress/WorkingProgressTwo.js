import React from "react";
import { Link } from "react-router-dom";
import TitleSection from "../Titlesection/TitleSection";
import { Container, Row, Col } from "reactstrap";

import titleOne from "../../data/WorkingProgress/working-progress-two.json";
const [{ title, subTitle, text }] = titleOne;
const workingProgressTwo = ({ sectionSpace }) => {
  return (
    <section
      id="working-process-section"
      className={`working-process-section ${sectionSpace} clearfix`}
    >
      <Container>
        <Row className="justify-content-center">
          <Col sm="12" lg="6" md="8">
            <TitleSection spacer="mb-100" textAlign="text-center">
              <span className="sub-title mb-15">{subTitle}</span>
              <h2 className="title-text mb-30">{title}</h2>
              <p className="paragraph-text mb-0">{text}</p>
            </TitleSection>
          </Col>
        </Row>

        <Row className="justify-content-lg-start justify-content-md-center">
          <Col lg="4" md="8" xs="12">
            <div className="process-item">
              <div className="item-icon">
                <img
                  src="../assets/images/icons/icon-1.png"
                  alt="image_not_found"
                />
              </div>
              <div className="item-content">
                <h3 className="item-title">Login First</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectet adop adipisicing elit,
                  eased do eiusmod temporara incididunt ugt labore.
                </p>
              </div>
            </div>

            <div className="process-item">
              <div className="item-icon">
                <img
                  src="../assets/images/icons/icon-2.png"
                  alt="image_not_found"
                />
              </div>
              <div className="item-content">
                <h3 className="item-title">Data Analysis</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectet adop adipisicing elit,
                  eased do eiusmod temporara incididunt ugt labore.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="4" md="8" xs="12">
            <div className="process-phone-image">
              <span
                className="bg-image"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img
                  src="../assets/images/features/animation/6-img-1.png"
                  alt="image_not_found"
                />
              </span>
              <span
                className="phone-image"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img
                  src="../assets/images/features/animation/3-img-1.png"
                  alt="image_not_found"
                />
              </span>
              <span
                className="shape-image-1"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <img
                  src="../assets/images/features/animation/6-img-2.png"
                  alt="image_not_found"
                />
              </span>
              <span
                className="shape-image-2"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <img
                  src="../assets/images/features/animation/6-img-4.png"
                  alt="image_not_found"
                />
              </span>
            </div>
          </Col>

          <Col lg="4" md="8" xs="12">
            <div className="process-item">
              <div className="item-icon">
                <img
                  src="../assets/images/icons/icon-3.png"
                  alt="image_not_found"
                />
              </div>
              <div className="item-content">
                <h3 className="item-title">Face Testing</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectet adop adipisicing elit,
                  eased do eiusmod temporara incididunt ugt labore.
                </p>
              </div>
            </div>

            <div className="process-item">
              <div className="item-icon">
                <img
                  src="../assets/images/icons/icon-4.png"
                  alt="image_not_found"
                />
              </div>
              <div className="item-content">
                <h3 className="item-title">Show Result</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectet adop adipisicing elit,
                  eased do eiusmod temporara incididunt ugt labore.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="seemore-btn text-center">
          <Link to="#" className="custom-btn-underline">
            see all features
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default workingProgressTwo;
