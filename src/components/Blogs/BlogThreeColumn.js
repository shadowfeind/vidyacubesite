import React, { Fragment } from "react";
import BlogTowColumnData from "../../data/blog/blog-four.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { PaginationOne } from "../Pagination";

const BlogTowColumn = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="blog-section"
        className={`blog-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-center">
            {BlogTowColumnData.map((data, key) => {
              return (
                <Col md="4" xs="12" key={key}>
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
                            <i className="uil uil-stopwatch"></i> {data.time}
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
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogTowColumn;
