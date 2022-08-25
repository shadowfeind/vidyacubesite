import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { VideoModal } from "../Modal";
import AboutData from "../../data/about/about-title.json";
const [{ title, titleSpan, paragraph1, paragraph2, img, name, nametitle }] =
  AboutData;
const About = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="about-section"
        className={`about-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-lg-between justify-content-md-center">
            <Col lg="5" md="8" xs="12">
              <div className="about-image">
                <span className="item-image">
                  <img
                    src="../assets/images/about/img-1.png"
                    alt="image_not_found"
                  />
                </span>
                <VideoModal />
              </div>
            </Col>

            <Col lg="6" md="8" xs="12">
              <div className="about-content">
                <h2 className="title-text mb-45">
                  {title} <span>{titleSpan}</span>
                </h2>
                <p className="mb-30">{paragraph1}</p>
                <p className="mb-60">{paragraph2}</p>
                <div className="hero-content">
                  <small className="hero-signature mb-30">
                    <img src={img} alt="signature_not_found" />
                  </small>
                  <span className="hero-name">
                    {name} <small className="hero-title">{nametitle}</small>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default About;
