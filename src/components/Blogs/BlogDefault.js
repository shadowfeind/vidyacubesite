import React, { Fragment } from "react";
import BlogDefaultData from "../../data/blog/blog-two.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { PaginationOne } from "../Pagination";

const BlogDefault = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="blog-section"
        className={`blog-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="10" xs="12">
              {BlogDefaultData.map((data, key) => {
                return (
                  <div className="big-blog-item clearfix" key={key}>
                    <div className="blog-image">
                      <img src={data.img} alt="image_not_found" />
                      <div className="post-date">
                        <strong className="date-text">{data.dateNumber}</strong>
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
                            <i className="uil uil-stopwatch"></i> {data.time}
                          </li>
                        </ul>
                      </div>
                      <div className="post-tags ul-li clearfix">
                        <ul className="clearfix">
                          <li>
                            <Link to="#!" className="tag-link">
                              {data.tagLink1}
                            </Link>
                          </li>
                          <li>
                            <Link to="#!" className="tag-link">
                              {data.tagLink2}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="blog-title mb-30">
                        <Link to="#!" className="title-link">
                          {data.title}
                        </Link>
                      </h3>
                      <p className="item-paragraph mb-45">{data.text}</p>
                      <Link to="#!" className="custom-btn-underline">
                        {data.readMoreLink}
                      </Link>
                    </div>
                  </div>
                );
              })}

              <PaginationOne />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogDefault;
