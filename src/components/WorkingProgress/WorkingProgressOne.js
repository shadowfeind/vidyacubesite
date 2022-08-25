import React from "react";
import TitleSection from "../Titlesection/TitleSection";
import { Container, Row, Col } from "reactstrap";

import titleOne from "../../data/title/title-one.json";
const [{ title, Paragraph }] = titleOne;
const workingProgressOne = ({ sectionSpace }) => {
  return (
    <section
      id="working-process-section"
      className={`working-process-section ${sectionSpace} clearfix`}
    >
      <Container>
        <Row className="justify-content-center">
          <Col sm="12" lg="6" md="8">
            <TitleSection spacer="mb-100" textAlign="text-center">
              <h2 className="title-text mb-30">{title}</h2>
              <p className="paragraph-text mb-0">{Paragraph}</p>
            </TitleSection>
          </Col>
        </Row>

        <div className="process-steps-list ul-li">
          <ul className="clearfix">
            <li>
              <span className="item-icon">
                <img
                  src="../assets/fonts/svg/outline/Interaction.svg"
                  alt="icon_not_found"
                />
              </span>
              <h3 className="item-title mb-0">login</h3>
            </li>
            <li>
              <span className="item-icon">
                <img
                  src="../assets/fonts/svg/outline/Development.svg"
                  alt="icon_not_found"
                />
              </span>
              <h3 className="item-title mb-0">input data</h3>
            </li>
            <li>
              <span className="item-icon">
                <img
                  src="../assets/fonts/svg/outline/Pie_Chart.svg"
                  alt="icon_not_found"
                />
              </span>
              <h3 className="item-title mb-0">data analysis</h3>
            </li>
            <li>
              <span className="item-icon">
                <img
                  src="../assets/fonts/svg/outline/Launch.svg"
                  alt="icon_not_found"
                />
              </span>
              <h3 className="item-title mb-0">view result</h3>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default workingProgressOne;
