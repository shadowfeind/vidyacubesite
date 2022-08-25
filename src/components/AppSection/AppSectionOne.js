import React from "react";
import appDataOne from "../../data/app/app-one.json";
import Button from "../Button/Button";
import { Container, Row, Col } from "reactstrap";

const [{ title, subTitle, span, paragraphText }] = appDataOne;

const AppSectionOne = (propps) => {
  return (
    <section id="app-section" className="app-section sec-ptb-160 clearfix">
      <Container>
        <Row className="justify-content-lg-start justify-content-md-center">
          <Col lg="6" md="8">
            <div className="app-content">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">{subTitle}</span>
                <h2 className="title-text mb-30">
                  {title} <span>{span}</span>
                </h2>
                <p className="paragraph-text mb-0">{paragraphText}</p>
              </div>

              <div className="btns-group ul-li clearfix">
                <ul className="clearfix">
                  <li>
                    <Button btnType="store-btn" btnColor="bg-default-blue">
                      <span className="icon">
                        <i className="flaticon-apple"></i>
                      </span>
                      <strong className="title-text">
                        <small>available on</small>
                        apple store
                      </strong>
                    </Button>
                  </li>
                  <li>
                    <Button btnType="store-btn" btnColor="bg-default-pink">
                      <span className="icon">
                        <i className="flaticon-google-play"></i>
                      </span>
                      <strong className="title-text">
                        <small>available on</small>
                        google play
                      </strong>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg="6" md="5">
            <div className="app-image float-right">
              <span className="circle-image">
                <img
                  src="../assets/images/features/animation/1-img-1.png"
                  alt="image_not_found"
                />
              </span>
              <span
                className="phone-image float-right"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <img
                  src="../assets/images/features/animation/3-img-1.png"
                  alt="image_not_found"
                />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppSectionOne;
