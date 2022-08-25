import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import teamMembersData from "../../data/team/team-members.json";
import teamTitle from "../../data/team/team-title.json";
const [{ title, paragraph }] = teamTitle;
const Team = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="team-section"
        className={`team-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="10" xs="12">
              <div className="section-title text-center mb-100">
                <h2 className="title-text mb-30">{title}</h2>
                <p className="paragraph-text mb-0">{paragraph}</p>
              </div>
            </Col>
          </Row>

          <Row>
            {teamMembersData.map((data, key) => {
              return (
                <Col lg="3" md="6" xs="12" key={key}>
                  <div className="team-member-bordered text-center">
                    <div className="member-image mb-30 clearfix">
                      <div className="image-container">
                        <img src={data.img} alt="image_not_found" />
                        <ul className="member-social-links clearfix">
                          <li>
                            <Link to="#!">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#!">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#!">
                              <i className="fab fa-pinterest-p"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#!">
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <small className="animate-item-1 animate-item">
                        <img src={data.animate1} alt="image_not_found" />
                      </small>
                      <small className="animate-item-2 animate-item">
                        <img src={data.animate2} alt="image_not_found" />
                      </small>
                      <small className="animate-item-3 animate-item">
                        <img src={data.animate3} alt="image_not_found" />
                      </small>
                      <small className="animate-item-4 animate-item">
                        <img src={data.animate4} alt="image_not_found" />
                      </small>
                      <small className="animate-item-5 animate-item">
                        <img src={data.animate5} alt="image_not_found" />
                      </small>
                      <small className="animate-item-6 animate-item">
                        <img src={data.animate6} alt="image_not_found" />
                      </small>
                      <small className="animate-item-7 animate-item">
                        <img src={data.animate7} alt="image_not_found" />
                      </small>
                    </div>
                    <h3 className="member-name">{data.name}</h3>
                    <span className="member-title">{data.title}</span>
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

export default Team;
