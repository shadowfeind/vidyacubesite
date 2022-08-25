import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
const AppCategoryOne = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="app-Category-section"
        className={`app-Category-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="8" xs="12">
              <div className="section-title mb-60 text-center">
                <h2 className="title-text mb-30">
                  Search our all app by Categories
                </h2>
                <p className="paragraph-text mb-0">
                  We would like to take the opportunity to introduce to you our
                  company and services.Our Company has an experience of almost
                  10 years
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-lg-between">
            <Col lg="3" md="6" xs="12">
              <div className="Category-item ul-li-block clearfix">
                <h3 className="item-title">top downloads</h3>
                <ul className="clearfix">
                  <li>
                    <Link to="#!">Social Networking (35)</Link>
                  </li>
                  <li>
                    <Link to="#!">Communications (12)</Link>
                  </li>
                  <li>
                    <Link to="#!">B2B Business (11)</Link>
                  </li>
                  <li>
                    <Link to="#!">Abdroid Mobile App (70)</Link>
                  </li>
                  <li>
                    <Link to="#!">Customer retention (20)</Link>
                  </li>
                  <li>
                    <Link to="#!">SEO and Marketing (09)</Link>
                  </li>
                  <li>
                    <Link to="#!">Heath Treatment (15)</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="3" md="6" xs="12">
              <div className="Category-item ul-li-block clearfix">
                <h3 className="item-title">newest app</h3>
                <ul className="clearfix">
                  <li>
                    <Link to="#!">SEO and Marketing (20)</Link>
                  </li>
                  <li>
                    <Link to="#!">Heath Treatment (22)</Link>
                  </li>
                  <li>
                    <Link to="#!">Account Related (21)</Link>
                  </li>
                  <li>
                    <Link to="#!">Inventory management (17)</Link>
                  </li>
                  <li>
                    <Link to="#!">In-house fulfillment (07)</Link>
                  </li>
                  <li>
                    <Link to="#!">Multimedia (18)</Link>
                  </li>
                  <li>
                    <Link to="#!">Life Style (20)</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="3" md="6" xs="12">
              <div className="Category-item ul-li-block clearfix">
                <h3 className="item-title">most popular</h3>
                <ul className="clearfix">
                  <li>
                    <Link to="#!">Customer retention (21)</Link>
                  </li>
                  <li>
                    <Link to="#!">SEO and Marketing (33)</Link>
                  </li>
                  <li>
                    <Link to="#!">Heath Treatment (20)</Link>
                  </li>
                  <li>
                    <Link to="#!">Account Related (10)</Link>
                  </li>
                  <li>
                    <Link to="#!">Inventory management (20)</Link>
                  </li>
                  <li>
                    <Link to="#!">In-house fulfillment (15)</Link>
                  </li>
                  <li>
                    <Link to="#!">Multimedia (05)</Link>
                  </li>
                  <li>
                    <Link to="#!">Life Style (17)</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="3" md="6" xs="12">
              <div className="Category-item ul-li-block clearfix">
                <h3 className="item-title">top games</h3>
                <ul className="clearfix">
                  <li>
                    <Link to="#!">Heath Treatment (20)</Link>
                  </li>
                  <li>
                    <Link to="#!">Account Related (21)</Link>
                  </li>
                  <li>
                    <Link to="#!">Inventory management (09)</Link>
                  </li>
                  <li>
                    <Link to="#!">In-house fulfillment (07)</Link>
                  </li>
                  <li>
                    <Link to="#!">Multimedia (05)</Link>
                  </li>
                  <li>
                    <Link to="#!">Life Style (17)</Link>
                  </li>
                  <li>
                    <Link to="#!">In-house fulfillment (3)</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AppCategoryOne;
