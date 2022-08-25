import React, { useState, Fragment } from "react";
import titleSix from "../../data/title/title-six.json";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
const [{ subTitle, title }] = titleSix;
const Pricing = ({ pricingBg, sectionSpace }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <div
        id="pricing-section"
        className={`pricing-section ${sectionSpace} clearfix`}
      >
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

        <div className="pricing-tab-nav ul-li-center clearfix">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                monthly
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                annualy
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <div
          className="bg-image sec-ptb-160 pt-0 clearfix"
          style={{
            backgroundImage: `url(${pricingBg})`,
          }}
        >
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
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
            </TabPane>
            <TabPane tabId="2">
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
                        <sup>$</sup>59.99
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
                        <sup>$</sup> 199.99
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
            </TabPane>
          </TabContent>
          <div className="review-btn text-center">
            <a href="#!" className="custom-btn-underline">
              more pricing plan
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;
