import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { MusicApp } from "../../components/MusicApp";
import { ReviewTab } from "../../components/ReviewTab";
const AppDetailsV1 = () => {
  return (
    <Fragment>
      {/* <!-- app-details-section - start
		================================================== --> */}
      <section
        id="app-details-section"
        className="app-details-section sec-ptb-160 pb-0 clearfix"
      >
        <Container>
          <Row className="justify-content-lg-start justify-content-md-center">
            <Col lg="9" xs="12">
              <div className="app-details-content clearfix">
                <MusicApp />
                <ReviewTab />
              </div>
            </Col>

            <Col lg="3" md="6" xs="12">
              <aside
                id="sidebar-section"
                className="sidebar-section app-details-sidebar clearfix"
              >
                {/* <!-- widget_search - satrt --> */}
                <div className="widget widget_search">
                  <form action="#">
                    <div className="form-item mb-0">
                      <input type="search" placeholder="Enter Your Keyword" />
                      <button type="submit" className="search-btn">
                        <i className="uil uil-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- widget_search - end --> */}

                {/* <!-- widget_categories - start --> */}
                <div className="widget widget_categories ul-li-block clearfix">
                  <h2 className="widget_title">
                    <i className="uil uil-th"></i> all categories
                  </h2>
                  <ul className="clearfix">
                    <li>
                      <a href="#!">Most Popular</a>
                    </li>
                    <li>
                      <a href="#!">Free Downloads</a>
                    </li>
                    <li>
                      <a href="#!">Top Downloads</a>
                    </li>
                    <li>
                      <a href="#!">mAndroid Apps</a>
                    </li>
                    <li>
                      <a href="#!">iOS Apps</a>
                    </li>
                    <li>
                      <a href="#!">Desktop Apps</a>
                    </li>
                    <li>
                      <a href="#!">Life Style</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- widget_categories - end --> */}

                {/* <!-- widget_tag_cloud - satrt --> */}
                <div className="widget widget_tag_cloud ul-li clearfix">
                  <h2 className="widget_title">
                    <i className="uil uil-pricetag-alt"></i> tags
                  </h2>
                  <ul className="clearfix">
                    <li>
                      <a href="#!">travels</a>
                    </li>
                    <li>
                      <a href="#!">adventure</a>
                    </li>
                    <li>
                      <a href="#!">foods</a>
                    </li>
                    <li>
                      <a href="#!">lifestyle</a>
                    </li>
                    <li>
                      <a href="#!">traveling</a>
                    </li>
                    <li>
                      <a href="#!">photography</a>
                    </li>
                    <li>
                      <a href="#!">trends</a>
                    </li>
                    <li>
                      <a href="#!">fashion</a>
                    </li>
                    <li>
                      <a href="#!">music</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- widget_tag_cloud - end --> */}
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!-- app-details-section - end
		================================================== --> */}
    </Fragment>
  );
};

export default AppDetailsV1;
