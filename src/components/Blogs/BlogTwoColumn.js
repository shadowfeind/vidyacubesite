import React, { Fragment } from "react";
import BlogTowColumnData from "../../data/blog/blog-three.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { PaginationOne } from "../Pagination";

import {
  CategoriesWidget,
  CloudTagWidget,
  InstagramWidget,
  NewsLetterWidget,
  PostWidget,
  SearchWidget,
} from "./elements";

const BlogTowColumn = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="blog-section"
        className={`blog-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="10" xs="12">
              <Row>
                {BlogTowColumnData.map((data, key) => {
                  return (
                    <Col md="6" xs="12" key={key}>
                      <div className="blog-grid-item clearfix">
                        <div className="blog-image">
                          <img src={data.img} alt="image_not_found" />
                          <div className="post-date">
                            <strong className="date-text">
                              {" "}
                              {data.dateNumber}{" "}
                            </strong>
                            <span className="month-text">{data.monthText}</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <div className="post-meta ul-li mb-30 clearfix">
                            <ul className="clearfix">
                              <li>
                                <Link to="#!" className="post-admin">
                                  <span className="admin-image">
                                    <img
                                      src={data.adminimage}
                                      alt="image_not_found"
                                    />
                                  </span>
                                  {data.adminName}
                                </Link>
                              </li>
                              <li>
                                <i className="uil uil-stopwatch"></i>{" "}
                                {data.time}
                              </li>
                            </ul>
                          </div>
                          <Link to="#!" className="tag-link">
                            {" "}
                            {data.tagLink}{" "}
                          </Link>
                          <h3 className="blog-title mb-0">
                            <Link to="#!" className="title-link">
                              {data.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </Col>
                  );
                })}

                <Col xs="12">
                  <PaginationOne />
                </Col>
              </Row>
            </Col>
            <Col lg="4" md="6" xs="12">
              <aside id="sidebar-section" className="sidebar-section clearfix">
                <SearchWidget />
                {/* <!-- widget_search - end --> */}

                {/* <!-- widget_categories - start --> */}
                <CategoriesWidget title="categories" />
                {/* <!-- widget_categories - end --> */}

                {/* <!-- widget_cixposttype - start --> */}

                <PostWidget title="Recent Post" />
                {/* <!-- widget_cixposttype - end --> */}

                {/* <!-- widget_tag_cloud - satrt --> */}
                <CloudTagWidget title="tags" />
                {/* <!-- widget_tag_cloud - end --> */}

                {/* <!-- widget_instagram - start --> */}
                <InstagramWidget title="Instagram" />
                {/* <!-- widget_instagram - end --> */}

                {/* <!-- widget_newsletter - start --> */}
                <NewsLetterWidget title="Newsletter" />
                {/* <!-- widget_newsletter - end --> */}
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogTowColumn;
