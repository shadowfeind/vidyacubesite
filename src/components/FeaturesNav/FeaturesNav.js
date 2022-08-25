import React, { useState } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";

import classnames from "classnames";
import TitleSection from "../Titlesection/TitleSection";
import titleTwo from "../../data/title/title-two.json";

const [{ title, Paragraph }] = titleTwo;

const FeaturesNav = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <section
        id="extra-features-section"
        className="extra-features-section sec-ptb-160 bg-light-gray clearfix"
      >
        <Container>
          <Row className="justify-content-center">
            <Col sm="12" lg="6" md="8">
              {
                <TitleSection spacer="mb-100" textAlign="text-center">
                  <h2 className="title-text mb-30">{title}</h2>
                  <p className="paragraph-text mb-0">{Paragraph}</p>
                </TitleSection>
              }
            </Col>
          </Row>

          <div className="features-nav ul-li-center mb-100">
            {/* class="nav" */}
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <span className="item-icon">
                    <img
                      src="../assets/fonts/svg/filled/admin.svg"
                      alt="icon_not_found"
                    />
                  </span>
                  Admin Portal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <span className="item-icon">
                    <img
                      src="../assets/fonts/svg/filled/teacher.svg"
                      alt="icon_not_found"
                    />
                  </span>
                  Teacher Portal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  <span className="item-icon">
                    <img
                      src="../assets/fonts/svg/filled/student.svg"
                      alt="icon_not_found"
                    />
                  </span>
                  Student Portal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  <span className="item-icon">
                    <img
                      src="../assets/fonts/svg/filled/Proposal.svg"
                      alt="icon_not_found"
                    />
                  </span>
                  Parent Portal
                </NavLink>
              </NavItem>
            </Nav>
          </div>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                  <div className="feature-content">
                    <h3 className="item-title mb-30">Admin Portal</h3>
                    <p className="mb-30">
                      The Admin Portal is a tool used to create and manage users
                      and meeting accounts, generate usage reports, manage
                      meeting options on behalf of account holders, and to
                      manage everything for a school might need for smooth
                      operation. Below are some of the things an admin can do.
                    </p>
                    <div className="instructions-list ul-li-block">
                      <ul className="clearfix">
                        <li>
                          <i className="flaticon-checked"></i> After you Add
                          teachers and students.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Assign subjects
                          to teachers.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Manage leave
                          request.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Generate Exam
                          Results.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col sm="12" lg="6" md="8">
                  <div className="feature-image text-center">
                    <img
                      src="../assets/images/features/img-1.png"
                      alt="image_not_found"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                  <div className="feature-content">
                    <h3 className="item-title mb-30">
                      Teacher Portal
                      {/* <span className="break-point">
                        user friendly app Features
                      </span> */}
                    </h3>
                    <p className="mb-30">
                      The Teacher Portal is a tool used to create and manage
                      assignments and meeting with students. A teacher will be
                      able to do asses students and take online classes if
                      needed. Below are some of the things a teacher can do.
                    </p>
                    <div className="instructions-list ul-li-block">
                      <ul className="clearfix">
                        <li>
                          <i className="flaticon-checked"></i> Assign homework
                          to students.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Provide
                          resources.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Take attendance.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Create and manage
                          online classes.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col sm="12" lg="6" md="8">
                  <div className="feature-image text-center">
                    <img
                      src="../assets/images/features/img-2.png"
                      alt="image_not_found"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                  <div className="feature-content">
                    <h3 className="item-title mb-30">
                      Student Portal
                      {/* <span className="break-point">
                        user friendly app Features
                      </span> */}
                    </h3>
                    <p className="mb-30">
                      In student portal a student can do everything virtuall
                      which a student needds to do when in a classroom
                      physically. Below are some of the things a student can do.
                    </p>
                    <div className="instructions-list ul-li-block">
                      <ul className="clearfix">
                        <li>
                          <i className="flaticon-checked"></i> Submit and
                          receive assignments.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Read resources
                          provided by teacher.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Take online
                          class.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Receive
                          notifications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col sm="12" lg="6" md="8">
                  <div className="feature-image text-center">
                    <img
                      src="../assets/images/features/img-3.png"
                      alt="image_not_found"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                  <div className="feature-content">
                    <h3 className="item-title mb-30">
                      Parent Portal
                      {/* <span className="break-point">
                        user friendly app Features
                      </span> */}
                    </h3>
                    <p className="mb-30">
                      Parent portal is for all the parents to keep up with the
                      day to day activities of their children.
                    </p>
                    <div className="instructions-list ul-li-block">
                      <ul className="clearfix">
                        <li>
                          <i className="flaticon-checked"></i> Submit and
                          receive assignments.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Read resources
                          provided by teacher.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Take online
                          class.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Receive
                          notifications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col sm="12" lg="6" md="8">
                  <div className="feature-image text-center">
                    <img
                      src="../assets/images/features/img-3.png"
                      alt="image_not_found"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </section>
    </div>
  );
};

export default FeaturesNav;
