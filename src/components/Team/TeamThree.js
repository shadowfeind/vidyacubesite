import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import teamMembersData from "../../data/team/team-members-three.json";
import teamTitle from "../../data/team/team-title.json";
const [{ title, paragraph }] = teamTitle;
const TeamThree = ({ sectionSpace }) => {
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
                  <div className="team-member-grid text-center">
                    <div className="member-image image-container clearfix">
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
                    <div className="member-info">
                      <h3 className="member-name">{data.name}</h3>
                      <span className="member-title">{data.title}</span>
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

export default TeamThree;
