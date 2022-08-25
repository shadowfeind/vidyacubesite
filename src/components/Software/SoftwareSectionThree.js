import React from "react";
import TitleSection from "../Titlesection/TitleSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import titleOne from "../../data/software/software-section-one.json";
const [{ title, subTitle, text }] = titleOne;
const softwareThree = ({ sectionSpace }) => {
  return (
    <section
      id="software-section"
      className={`software-section ${sectionSpace} clearfix`}
      style={{
        backgroundImage: `url("../assets/images/software/sec-bg-3.jpg")`,
      }}
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
          <Col lg="8" xs="12">
            <div className="software-container">
              <div
                className="software-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Link to="#" className="software-logo">
                  <img
                    src="../assets/images/software/logo-1.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
              <div
                className="software-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Link to="#" className="software-logo">
                  <img
                    src="../assets/images/software/logo-2.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
              <div
                className="software-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <Link to="#" className="software-logo">
                  <img
                    src="../assets/images/software/logo-3.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
              <div
                className="software-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                <Link to="#" className="software-logo">
                  <img
                    src="../assets/images/software/logo-4.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
              <div
                className="software-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="900"
              >
                <Link to="#" className="software-logo">
                  <img
                    src="../assets/images/software/logo-5.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
              <div
                className="software-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="1100"
              >
                <Link to="#" className="software-logo">
                  <img
                    src="../assets/images/software/logo-6.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
              <div
                className="software-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="1300"
              >
                <Link to="#" className="software-logo">
                  <img
                    src="../assets/images/software/logo-7.png"
                    alt="logo_not_found"
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default softwareThree;
