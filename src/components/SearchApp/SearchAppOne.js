import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
const SearchAppOne = () => {
  return (
    <Fragment>
      <section
        id="search-section"
        className="search-section clearfix"
        style={{
          backgroundImage: `url('../assets/images/banner/app-bg-img-1.jpg')`,
        }}
      >
        <div className="overlay-color">
          <Container>
            <Row className="justify-content-center">
              <Col md="8" xs="12">
                <div className="banner-content text-center">
                  <h1>
                    Most Completed App Store Website{" "}
                    <span>Search your Desire App</span>
                  </h1>
                  <div className="search-form">
                    <form action="#">
                      <div className="form-item mb-0">
                        <input
                          type="search"
                          placeholder="Type your desire App"
                        />
                        <button type="submit" className="search-btn">
                          <i className="uil uil-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Fragment>
  );
};

export default SearchAppOne;
