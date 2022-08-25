import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import MobileAppOneData from "../../data/mobile-app/mobile-app-one.json";
const MobileAppOne = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section className={`mobile-app-section ${sectionSpace} clearfix`}>
        <Container>
          <Row>
            <Col xs="12">
              <div className="section-title clearfix">
                <h2 className="title-text float-left mb-0">Top Free Apps</h2>
                <Link className="custom-btn-underline float-right" to="#!">
                  see more app
                </Link>
              </div>
            </Col>
            {MobileAppOneData.map((data, key) => {
              return (
                <Col lg="2" md="4" xs="12" key={key}>
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
                        <span className="review-text">{data.reviewCount}</span>
                      </div>
                      <small className={data.price}>{data.freeText}</small>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default MobileAppOne;
