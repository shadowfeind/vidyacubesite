import React from "react";
import { Container, Row, Col } from "reactstrap";
import titleSeven from "../../data/title/title-seven.json";

const [{ title, paragraph, subTitle }] = titleSeven;
const FaqSection = (props) => {
  return (
    <section
      id="faq-section"
      className="faq-section sec-ptb-160 bg-light-gray clearfix"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" md="8">
            <div
              className="section-title mb-100 text-center"
              data-aos="fade-up"
              data-aos-duration="450"
              data-aos-delay="100"
            >
              <span className="sub-title mb-15">{subTitle}</span>
              <h2 className="title-text mb-30">{title}</h2>
              <p className="paragraph-text mb-0">{paragraph}</p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-lg-start justify-content-md-center">
          <Col lg="6" md="8">
            <div className="queistions-container mb-60">
              <div
                className="queistions-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="450"
                data-aos-delay="200"
              >
                <h3 className="item-title mb-15">
                  1. How to Purchase your product ?
                </h3>
                <p className="mb-0">
                  We are promisess to their customer to make sure bes services
                  transaction is a transfer of value between Bitcoin wallets
                  that gets included in block chain. Bitcoin wallets keep a
                  secret piece of data called a private key or seed.
                </p>
              </div>

              <div
                className="queistions-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="450"
                data-aos-delay="300"
              >
                <h3 className="item-title mb-15">
                  2. Do you accept Paypal or any others payment system?
                </h3>
                <p className="mb-0">
                  Appal promisess to their customer to make sure bes services
                  transaction is a transfer of value between Bitcoin wallets
                  that gets included in block chain. Bitcoin wallets keep a
                  secret piece of data called a private key or seed.
                </p>
              </div>

              <div
                className="queistions-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="450"
                data-aos-delay="400"
              >
                <h3 className="item-title mb-15">
                  3. Can I migrate Hosting Service from one to another ?
                </h3>
                <p className="mb-0">
                  A transaction is a transfer of value between Bitcoin wallets
                  that gets included in block chain. Bitcoin wallets a secret
                  piece of data called a private key.
                </p>
              </div>

              <div
                className="queistions-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="450"
                data-aos-delay="500"
              >
                <h3 className="item-title mb-15">
                  4. Why Dedicated Hosting is important for Websites ?
                </h3>
                <p className="mb-0">
                  Appal will transfer of value between Bitcoin wallets that gets
                  included in block chains. Bitcoin wallets keep a secret piece
                  of data called a private.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="8">
            <div className="queistions-container mb-100">
              <div
                className="queistions-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="450"
                data-aos-delay="100"
              >
                <h3 className="item-title mb-15">
                  1. How to Purchase your product ?
                </h3>
                <p className="mb-0">
                  We are promisess to their customer to make sure bes services
                  transaction is a transfer of value between Bitcoin wallets
                  that gets included in block chain. Bitcoin wallets keep a
                  secret piece of data called a private key or seed.
                </p>
              </div>

              <div
                className="queistions-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="450"
                data-aos-delay="200"
              >
                <h3 className="item-title mb-15">
                  2. Do you accept Paypal or any others payment system?
                </h3>
                <p className="mb-0">
                  Appal promisess to their customer to make sure bes services
                  transaction is a transfer of value between Bitcoin wallets
                  that gets included in block chain. Bitcoin wallets keep a
                  secret piece of data called a private key or seed.
                </p>
              </div>

              <div
                className="queistions-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="450"
                data-aos-delay="300"
              >
                <h3 className="item-title mb-15">
                  3. Can I migrate Hosting Service from one to another ?
                </h3>
                <p className="mb-0">
                  A transaction is a transfer of value between Bitcoin wallets
                  that gets included in block chain. Bitcoin wallets a secret
                  piece of data called a private key.
                </p>
              </div>

              <div
                className="queistions-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="450"
                data-aos-delay="400"
              >
                <h3 className="item-title mb-15">
                  4. Why Dedicated Hosting is important for Websites ?
                </h3>
                <p className="mb-0">
                  Appal will transfer of value between Bitcoin wallets that gets
                  included in block chains. Bitcoin wallets keep a secret piece
                  of data called a private.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="4" md="6">
            <div
              className="contact-info text-center"
              data-aos="fade-up"
              data-aos-duration="450"
              data-aos-delay="500"
            >
              <p className="mb-0">
                Can’t find answer? Mail us at
                <a href="mailto:blueberryexperts@gmail.com">
                  blueberryexperts@gmail.com
                </a>
                &nbsp;or call <a href="tel:+9779802315999">+977 980 231 5999</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqSection;
