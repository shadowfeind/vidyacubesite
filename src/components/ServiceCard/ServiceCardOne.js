import React, { Fragment } from "react";
import serviceOne from "../../data/service/service-one.json";
import { Container, Row, Col } from "reactstrap";
const ServiceCardOne = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="service-section"
        className={`service-section ${sectionSpace} clearfix`}
      >
        <Container className="container">
          <Row>
            {serviceOne.map((data, key) => {
              return (
                <Col lg="4" xs="12" key={key}>
                  <div className="service-grid-item text-center">
                    <span
                      className="item-icon"
                      style={{ backgroundImage: `url(${data.img})` }}
                    >
                      <i className={data.icon}></i>
                    </span>
                    <h2 className="item-title mb-30">{data.title}</h2>
                    <p>{data.text}</p>
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

export default ServiceCardOne;
