import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { VideoModal } from "../Modal";

const featureTwo = () => {
  return (
    <Fragment>
      <section
        id="features-section"
        className="features-section sec-ptb-160 clearfix"
      >
        <Container>
          <div className="feature-item">
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="5" md="8" xs="12">
                <div className="feature-image-2 text-center">
                  <span className="item-image">
                    <img
                      src="../assets/images/features/img-4.png"
                      alt="image_not_found"
                    />
                  </span>
                  <VideoModal />
                </div>
              </Col>

              <Col lg="6" md="8" xs="12">
                <div className="feature-content p-0">
                  <h2 className="feature-item-title">
                    More then an app{" "}
                    <span>that perfect fit for your business</span>
                  </h2>
                  <p className="mb-0">
                    Mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system,
                    and expound. mistaken you a complete account of the system
                    expound. expound.
                  </p>

                  <div className="service-list ul-li clearfix">
                    <ul className="clearfix">
                      <li>
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage: `url('../assets/images/icons/bg-6.png')`,
                          }}
                        >
                          <i className="uil uil-lightbulb-alt"></i>
                        </div>
                        <div className="item-content">
                          <h3 className="item-title mb-15">
                            Full Integradtions
                          </h3>
                          <p className="mb-0">
                            Expound the actual teachings of the great explorer
                            of the truth, the aster of human happiness. No one
                            rejects.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage: `url('../assets/images/icons/bg-7.png')`,
                          }}
                        >
                          <i className="uil uil-atm-card"></i>
                        </div>
                        <div className="item-content">
                          <h3 className="item-title mb-15">Secure payment</h3>
                          <p className="mb-0">
                            Expound the actual teachings of the great explorer
                            of the truth, the aster of human happiness. No one
                            rejects.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage: `url('../assets/images/icons/bg-8.png')`,
                          }}
                        >
                          <i className="uil uil-shield-exclamation"></i>
                        </div>
                        <div className="item-content">
                          <h3 className="item-title mb-15">Steady Updates</h3>
                          <p className="mb-0">
                            Expound the actual teachings of the great explorer
                            of the truth, the aster of human happiness. No one
                            rejects.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default featureTwo;
