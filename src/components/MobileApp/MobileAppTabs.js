import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { PaginationOne } from "../Pagination";
import classnames from "classnames";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import MobileAppTabsData from "../../data/mobile-app/mobile-app-tabs.json";

const MobileAppTabs = ({ sectionSpace }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Fragment>
      <section className={`mobile-app-section ${sectionSpace} clearfix`}>
        <Container>
          <Row>
            <Col lg="3" md="6" xs="12">
              <div className="app-nav ul-li-block clearfix">
                <h3 className="nav-title mb-0">
                  <i className="uil uil-th"></i>
                  All Categories
                </h3>

                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      popular item
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      free item
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      top item
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "4" })}
                      onClick={() => {
                        toggle("4");
                      }}
                    >
                      android item
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "5" })}
                      onClick={() => {
                        toggle("5");
                      }}
                    >
                      ios item
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "6" })}
                      onClick={() => {
                        toggle("6");
                      }}
                    >
                      desktop item
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "7" })}
                      onClick={() => {
                        toggle("7");
                      }}
                    >
                      lifestyle item
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col lg="9" xs="12">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="top-content-bar">
                    <Row className="justify-content-lg-between">
                      <Col lg="6" xs="12">
                        <h3 className="tab-pane-title mb-0">popular item</h3>
                      </Col>

                      <Col lg="4" xs="12">
                        <div className="option-form">
                          <form action="#">
                            <select className="form-control">
                              <option>popular item</option>
                              <option>free item</option>
                              <option>top item</option>
                              <option>android item</option>
                              <option>ios item</option>
                              <option>desktop item</option>
                              <option>lifestyle item</option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    {MobileAppTabsData.map((data, key) => {
                      return (
                        <Col lg="3" md="4" xs="12" key={key}>
                          <div className="app-item">
                            <div className="app-image">
                              <img src={data.img} alt="image_not_found" />
                              <Link to="#!" className="addtocart-btn">
                                <span>{data.addtocart}</span>
                              </Link>
                            </div>
                            <div className="app-content">
                              <div className="item-admin">
                                by{" "}
                                <Link className="admin-link" to="#!">
                                  {data.addminLink}
                                </Link>
                              </div>
                              <h3 className="item-title">
                                <Link to="#!" className="title-link">
                                  {data.title}
                                </Link>
                              </h3>
                              <div className="rating-star ul-li clearfix">
                                <ul className="clearfix">
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                </ul>
                                <span className="review-text">
                                  {data.reviewCount}
                                </span>
                              </div>
                              <small className={data.price}>
                                {data.freeText}
                              </small>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <div className="top-content-bar">
                    <Row className="justify-content-lg-between">
                      <Col lg="6" xs="12">
                        <h3 className="tab-pane-title mb-0">popular item</h3>
                      </Col>

                      <Col lg="4" xs="12">
                        <div className="option-form">
                          <form action="#">
                            <select className="form-control">
                              <option>popular item</option>
                              <option>free item</option>
                              <option>top item</option>
                              <option>android item</option>
                              <option>ios item</option>
                              <option>desktop item</option>
                              <option>lifestyle item</option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    {MobileAppTabsData.map((data, key) => {
                      return (
                        <Col lg="3" md="4" xs="12" key={key}>
                          <div className="app-item">
                            <div className="app-image">
                              <img src={data.img} alt="image_not_found" />
                              <Link to="#!" className="addtocart-btn">
                                <span>{data.addtocart}</span>
                              </Link>
                            </div>
                            <div className="app-content">
                              <div className="item-admin">
                                by{" "}
                                <Link className="admin-link" to="#!">
                                  {data.addminLink}
                                </Link>
                              </div>
                              <h3 className="item-title">
                                <Link to="#!" className="title-link">
                                  {data.title}
                                </Link>
                              </h3>
                              <div className="rating-star ul-li clearfix">
                                <ul className="clearfix">
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                </ul>
                                <span className="review-text">
                                  {data.reviewCount}
                                </span>
                              </div>
                              <small className={data.price}>
                                {data.freeText}
                              </small>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <div className="top-content-bar">
                    <Row className="justify-content-lg-between">
                      <Col lg="6" xs="12">
                        <h3 className="tab-pane-title mb-0">popular item</h3>
                      </Col>

                      <Col lg="4" xs="12">
                        <div className="option-form">
                          <form action="#">
                            <select className="form-control">
                              <option>popular item</option>
                              <option>free item</option>
                              <option>top item</option>
                              <option>android item</option>
                              <option>ios item</option>
                              <option>desktop item</option>
                              <option>lifestyle item</option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    {MobileAppTabsData.map((data, key) => {
                      return (
                        <Col lg="3" md="4" xs="12" key={key}>
                          <div className="app-item">
                            <div className="app-image">
                              <img src={data.img} alt="image_not_found" />
                              <Link to="#!" className="addtocart-btn">
                                <span>{data.addtocart}</span>
                              </Link>
                            </div>
                            <div className="app-content">
                              <div className="item-admin">
                                by{" "}
                                <Link className="admin-link" to="#!">
                                  {data.addminLink}
                                </Link>
                              </div>
                              <h3 className="item-title">
                                <Link to="#!" className="title-link">
                                  {data.title}
                                </Link>
                              </h3>
                              <div className="rating-star ul-li clearfix">
                                <ul className="clearfix">
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                </ul>
                                <span className="review-text">
                                  {data.reviewCount}
                                </span>
                              </div>
                              <small className={data.price}>
                                {data.freeText}
                              </small>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <div className="top-content-bar">
                    <Row className="justify-content-lg-between">
                      <Col lg="6" xs="12">
                        <h3 className="tab-pane-title mb-0">popular item</h3>
                      </Col>

                      <Col lg="4" xs="12">
                        <div className="option-form">
                          <form action="#">
                            <select className="form-control">
                              <option>popular item</option>
                              <option>free item</option>
                              <option>top item</option>
                              <option>android item</option>
                              <option>ios item</option>
                              <option>desktop item</option>
                              <option>lifestyle item</option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    {MobileAppTabsData.map((data, key) => {
                      return (
                        <Col lg="3" md="4" xs="12" key={key}>
                          <div className="app-item">
                            <div className="app-image">
                              <img src={data.img} alt="image_not_found" />
                              <Link to="#!" className="addtocart-btn">
                                <span>{data.addtocart}</span>
                              </Link>
                            </div>
                            <div className="app-content">
                              <div className="item-admin">
                                by{" "}
                                <Link className="admin-link" to="#!">
                                  {data.addminLink}
                                </Link>
                              </div>
                              <h3 className="item-title">
                                <Link to="#!" className="title-link">
                                  {data.title}
                                </Link>
                              </h3>
                              <div className="rating-star ul-li clearfix">
                                <ul className="clearfix">
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                </ul>
                                <span className="review-text">
                                  {data.reviewCount}
                                </span>
                              </div>
                              <small className={data.price}>
                                {data.freeText}
                              </small>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tabId="5">
                  <div className="top-content-bar">
                    <Row className="justify-content-lg-between">
                      <Col lg="6" xs="12">
                        <h3 className="tab-pane-title mb-0">popular item</h3>
                      </Col>

                      <Col lg="4" xs="12">
                        <div className="option-form">
                          <form action="#">
                            <select className="form-control">
                              <option>popular item</option>
                              <option>free item</option>
                              <option>top item</option>
                              <option>android item</option>
                              <option>ios item</option>
                              <option>desktop item</option>
                              <option>lifestyle item</option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    {MobileAppTabsData.map((data, key) => {
                      return (
                        <Col lg="3" md="4" xs="12" key={key}>
                          <div className="app-item">
                            <div className="app-image">
                              <img src={data.img} alt="image_not_found" />
                              <Link to="#!" className="addtocart-btn">
                                <span>{data.addtocart}</span>
                              </Link>
                            </div>
                            <div className="app-content">
                              <div className="item-admin">
                                by{" "}
                                <Link className="admin-link" to="#!">
                                  {data.addminLink}
                                </Link>
                              </div>
                              <h3 className="item-title">
                                <Link to="#!" className="title-link">
                                  {data.title}
                                </Link>
                              </h3>
                              <div className="rating-star ul-li clearfix">
                                <ul className="clearfix">
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                </ul>
                                <span className="review-text">
                                  {data.reviewCount}
                                </span>
                              </div>
                              <small className={data.price}>
                                {data.freeText}
                              </small>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tabId="6">
                  <div className="top-content-bar">
                    <Row className="justify-content-lg-between">
                      <Col lg="6" xs="12">
                        <h3 className="tab-pane-title mb-0">popular item</h3>
                      </Col>

                      <Col lg="4" xs="12">
                        <div className="option-form">
                          <form action="#">
                            <select className="form-control">
                              <option>popular item</option>
                              <option>free item</option>
                              <option>top item</option>
                              <option>android item</option>
                              <option>ios item</option>
                              <option>desktop item</option>
                              <option>lifestyle item</option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    {MobileAppTabsData.map((data, key) => {
                      return (
                        <Col lg="3" md="4" xs="12" key={key}>
                          <div className="app-item">
                            <div className="app-image">
                              <img src={data.img} alt="image_not_found" />
                              <Link to="#!" className="addtocart-btn">
                                <span>{data.addtocart}</span>
                              </Link>
                            </div>
                            <div className="app-content">
                              <div className="item-admin">
                                by{" "}
                                <Link className="admin-link" to="#!">
                                  {data.addminLink}
                                </Link>
                              </div>
                              <h3 className="item-title">
                                <Link to="#!" className="title-link">
                                  {data.title}
                                </Link>
                              </h3>
                              <div className="rating-star ul-li clearfix">
                                <ul className="clearfix">
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                </ul>
                                <span className="review-text">
                                  {data.reviewCount}
                                </span>
                              </div>
                              <small className={data.price}>
                                {data.freeText}
                              </small>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </TabPane>
                <TabPane tabId="7">
                  <div className="top-content-bar">
                    <Row className="justify-content-lg-between">
                      <Col lg="6" xs="12">
                        <h3 className="tab-pane-title mb-0">popular item</h3>
                      </Col>

                      <Col lg="4" xs="12">
                        <div className="option-form">
                          <form action="#">
                            <select className="form-control">
                              <option>popular item</option>
                              <option>free item</option>
                              <option>top item</option>
                              <option>android item</option>
                              <option>ios item</option>
                              <option>desktop item</option>
                              <option>lifestyle item</option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    {MobileAppTabsData.map((data, key) => {
                      return (
                        <Col lg="3" md="4" xs="12" key={key}>
                          <div className="app-item">
                            <div className="app-image">
                              <img src={data.img} alt="image_not_found" />
                              <Link to="#!" className="addtocart-btn">
                                <span>{data.addtocart}</span>
                              </Link>
                            </div>
                            <div className="app-content">
                              <div className="item-admin">
                                by{" "}
                                <Link className="admin-link" to="#!">
                                  {data.addminLink}
                                </Link>
                              </div>
                              <h3 className="item-title">
                                <Link to="#!" className="title-link">
                                  {data.title}
                                </Link>
                              </h3>
                              <div className="rating-star ul-li clearfix">
                                <ul className="clearfix">
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                  <li className="rated">
                                    <i className={data.icon}></i>
                                  </li>
                                </ul>
                                <span className="review-text">
                                  {data.reviewCount}
                                </span>
                              </div>
                              <small className={data.price}>
                                {data.freeText}
                              </small>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </TabPane>
                <PaginationOne />
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default MobileAppTabs;
