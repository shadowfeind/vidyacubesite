import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { BlogDetails } from "./elements";

const BlogDetailsOne = () => {
  return (
    <Fragment>
      <section
        id="blog-details-section"
        className="blog-details-section clearfix"
      >
        <Container>
          <Row className="row justify-content-center">
            <Col lg="9" md="10" xs="12">
              <BlogDetails />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogDetailsOne;
