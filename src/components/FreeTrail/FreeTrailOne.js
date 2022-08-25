import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
const FreeTrailOne = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="free-trail-section"
        className={`free-trail-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="8" xs="12">
              <div className="section-title mb-100 text-center">
                <span className="sub-title mb-15">
                  10M+ Peoples Using our App
                </span>
                <h2 className="title-text mb-0">
                  Take Control of your work ?{" "}
                  <span>
                    Check out <small>30 days free trail</small> version
                  </span>
                </h2>
              </div>
            </Col>

            <Col lg="10" xs="12" className="col-lg-10 col-md-12 col-sm-12">
              <div
                className="free-trail-form text-center"
                style={{ backgroundImage: `url(../assets/images/map-2.png)` }}
              >
                <form action="#">
                  <div className="form-item">
                    <input type="email" placeholder="Enter Email Address" />
                    <button
                      type="submit"
                      className="form-item-btn bg-default-blue"
                    >
                      get started
                    </button>
                  </div>
                </form>
                <p className="mb-0">*No credit card Required.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default FreeTrailOne;
