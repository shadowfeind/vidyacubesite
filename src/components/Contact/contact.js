import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import Contacttitle from "../../data/contact/contact-title.json";
import ContactData from "../../data/contact/contact.json";
const [{ title, subTitle }] = Contacttitle;
const Contact = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="contact-section"
        className={`contact-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="8" xs="12">
              <div className="section-title mb-100 text-center">
                <span className="sub-title mb-15"> {subTitle} </span>
                <h2 className="title-text mb-0">{title}</h2>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-lg-between justify-content-md-center">
            {ContactData.map((data, key) => {
              return (
                <Col lg="4" xs="12" key={key}>
                  <div
                    className={`contact-info-item ${data.className} text-center ul-li-block`}
                  >
                    <span
                      className="item-icon"
                      style={{ backgroundImage: `url(${data.img})` }}
                    >
                      <i className={data.icon}></i>
                    </span>
                    <ul className="clearfix">
                      <li> {data.textOne} </li>
                      <li> {data.textTwo}</li>
                    </ul>
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

export default Contact;
