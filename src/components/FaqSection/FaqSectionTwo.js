import React, { useState } from "react";
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

import titleSeven from "../../data/title/title-seven.json";

const [{ title, paragraph, subTitle }] = titleSeven;

const FaqSectionTwo = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
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
          <Col lg="4" md="6" xs="12">
            <div
              className="faq-tabs-nav ul-li-block clearfix aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="450"
              data-aos-delay="300"
            >
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    General
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Payments
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Security
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    Accounts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "5" })}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    More
                  </NavLink>
                </NavItem>
              </Nav>

              <ul className="contact-info clearfix">
                <li>Can’t find answer?</li>
                <li>
                  Mail us at <a href="#!">xyz@gmail.com</a>
                </li>
                <li>
                  call <a href="#!">+880 924 920 940</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="8" md="8" xs="12">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="queistions-container">
                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="600"
                  >
                    <h3 className="item-title mb-15">
                      1. How to Purchase your product ?
                    </h3>
                    <p className="mb-0">
                      We are promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="900"
                  >
                    <h3 className="item-title mb-15">
                      2. Do you accept Paypal or any others payment system?
                    </h3>
                    <p className="mb-0">
                      Appal promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1200"
                  >
                    <h3 className="item-title mb-15">
                      3. Can I migrate Hosting Service from one to another ?
                    </h3>
                    <p className="mb-0">
                      A transaction is a transfer of value between Bitcoin
                      wallets that gets included in block chain. Bitcoin wallets
                      a secret piece of data called a private key.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1500"
                  >
                    <h3 className="item-title mb-15">
                      4. Why Dedicated Hosting is important for Websites ?
                    </h3>
                    <p className="mb-0">
                      Appal will transfer of value between Bitcoin wallets that
                      gets included in block chains. Bitcoin wallets keep a
                      secret piece of data called a private.
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="queistions-container">
                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="600"
                  >
                    <h3 className="item-title mb-15">
                      5. How to Purchase your product ?
                    </h3>
                    <p className="mb-0">
                      We are promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="900"
                  >
                    <h3 className="item-title mb-15">
                      6. Do you accept Paypal or any others payment system?
                    </h3>
                    <p className="mb-0">
                      Appal promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1200"
                  >
                    <h3 className="item-title mb-15">
                      7. Can I migrate Hosting Service from one to another ?
                    </h3>
                    <p className="mb-0">
                      A transaction is a transfer of value between Bitcoin
                      wallets that gets included in block chain. Bitcoin wallets
                      a secret piece of data called a private key.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1500"
                  >
                    <h3 className="item-title mb-15">
                      8. Why Dedicated Hosting is important for Websites ?
                    </h3>
                    <p className="mb-0">
                      Appal will transfer of value between Bitcoin wallets that
                      gets included in block chains. Bitcoin wallets keep a
                      secret piece of data called a private.
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="queistions-container">
                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="600"
                  >
                    <h3 className="item-title mb-15">
                      9. How to Purchase your product ?
                    </h3>
                    <p className="mb-0">
                      We are promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="900"
                  >
                    <h3 className="item-title mb-15">
                      10. Do you accept Paypal or any others payment system?
                    </h3>
                    <p className="mb-0">
                      Appal promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1200"
                  >
                    <h3 className="item-title mb-15">
                      11. Can I migrate Hosting Service from one to another ?
                    </h3>
                    <p className="mb-0">
                      A transaction is a transfer of value between Bitcoin
                      wallets that gets included in block chain. Bitcoin wallets
                      a secret piece of data called a private key.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1500"
                  >
                    <h3 className="item-title mb-15">
                      12. Why Dedicated Hosting is important for Websites ?
                    </h3>
                    <p className="mb-0">
                      Appal will transfer of value between Bitcoin wallets that
                      gets included in block chains. Bitcoin wallets keep a
                      secret piece of data called a private.
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="4">
                <div className="queistions-container">
                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="600"
                  >
                    <h3 className="item-title mb-15">
                      13. How to Purchase your product ?
                    </h3>
                    <p className="mb-0">
                      We are promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="900"
                  >
                    <h3 className="item-title mb-15">
                      14. Do you accept Paypal or any others payment system?
                    </h3>
                    <p className="mb-0">
                      Appal promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1200"
                  >
                    <h3 className="item-title mb-15">
                      15. Can I migrate Hosting Service from one to another ?
                    </h3>
                    <p className="mb-0">
                      A transaction is a transfer of value between Bitcoin
                      wallets that gets included in block chain. Bitcoin wallets
                      a secret piece of data called a private key.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1500"
                  >
                    <h3 className="item-title mb-15">
                      16. Why Dedicated Hosting is important for Websites ?
                    </h3>
                    <p className="mb-0">
                      Appal will transfer of value between Bitcoin wallets that
                      gets included in block chains. Bitcoin wallets keep a
                      secret piece of data called a private.
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="5">
                <div className="queistions-container">
                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="600"
                  >
                    <h3 className="item-title mb-15">
                      17. How to Purchase your product ?
                    </h3>
                    <p className="mb-0">
                      We are promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="900"
                  >
                    <h3 className="item-title mb-15">
                      18. Do you accept Paypal or any others payment system?
                    </h3>
                    <p className="mb-0">
                      Appal promisess to their customer to make sure bes
                      services transaction is a transfer of value between
                      Bitcoin wallets that gets included in block chain. Bitcoin
                      wallets keep a secret piece of data called a private key
                      or seed.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1200"
                  >
                    <h3 className="item-title mb-15">
                      19. Can I migrate Hosting Service from one to another ?
                    </h3>
                    <p className="mb-0">
                      A transaction is a transfer of value between Bitcoin
                      wallets that gets included in block chain. Bitcoin wallets
                      a secret piece of data called a private key.
                    </p>
                  </div>

                  <div
                    className="queistions-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="1500"
                  >
                    <h3 className="item-title mb-15">
                      20. Why Dedicated Hosting is important for Websites ?
                    </h3>
                    <p className="mb-0">
                      Appal will transfer of value between Bitcoin wallets that
                      gets included in block chains. Bitcoin wallets keep a
                      secret piece of data called a private.
                    </p>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqSectionTwo;
