import React, { Fragment } from "react";
import titleSix from "../../data/title/title-six.json";

import { Container, Row, Col } from "reactstrap";

const [{ subTitle, title }] = titleSix;
const PricingTable = ({ pricingBg }) => {
  return (
    <Fragment>
      <div id="pricing-section" className="pricing-section clearfix">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="8">
              <div className="section-title mb-100 text-center">
                <span className="sub-title mb-15">{subTitle}</span>
                <h2 className="title-text mb-0">{title}</h2>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col lg="4" xs="12">
              <div className="pricing-plan text-center">
                <h3 className="plan-title mb-30">Personal</h3>
                <span
                  className="item-icon mb-30"
                  style={{
                    backgroundImage: `url('../assets/images/icons/bg-0.png')`,
                  }}
                >
                  <i className="flaticon-paper-plane"></i>
                </span>
                <h4 className="price-text mb-0">Free</h4>
                <div className="item-list ul-li-block clearfix">
                  <ul className="clearfix">
                    <li>100 MB Disk Space</li>
                    <li>2 Subdomains</li>
                    <li>5 Email Accounts</li>
                    <li>Webmail Support</li>
                  </ul>
                </div>
                <a href="#!" className="start-btn">
                  get started
                </a>
              </div>
            </Col>

            <Col lg="4" xs="12">
              <div className="pricing-plan active-item text-center">
                <small className="offer-text">15% off</small>
                <h3 className="plan-title mb-30">Small Team</h3>
                <span
                  className="item-icon mb-30"
                  style={{
                    backgroundImage: `url('../assets/images/icons/bg-0.png')`,
                  }}
                >
                  <i className="flaticon-startup"></i>
                </span>
                <h4 className="price-text mb-0">
                  <sup>$</sup>49.99
                </h4>
                <div className="item-list ul-li-block clearfix">
                  <ul className="clearfix">
                    <li>100 MB Disk Space</li>
                    <li>2 Subdomains</li>
                    <li>5 Email Accounts</li>
                    <li>Webmail Support</li>
                  </ul>
                </div>
                <a href="#!" className="start-btn">
                  get started
                </a>
              </div>
            </Col>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="pricing-plan text-center">
                <h3 className="plan-title mb-30">Enterprice</h3>
                <span
                  className="item-icon mb-30"
                  style={{
                    backgroundImage: `url('../assets/images/icons/bg-0.png')`,
                  }}
                >
                  <i className="flaticon-air-freight"></i>
                </span>
                <h4 className="price-text mb-0">
                  <sup>$</sup> 99.99
                </h4>
                <div className="item-list ul-li-block clearfix">
                  <ul className="clearfix">
                    <li>100 MB Disk Space</li>
                    <li>2 Subdomains</li>
                    <li>5 Email Accounts</li>
                    <li>Webmail Support</li>
                  </ul>
                </div>
                <a href="#!" className="start-btn">
                  get started
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default PricingTable;
