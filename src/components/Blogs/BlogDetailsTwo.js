import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { BlogDetails } from "./elements";
import {
  CategoriesWidget,
  CloudTagWidget,
  InstagramWidget,
  NewsLetterWidget,
  PostWidget,
  SearchWidget,
} from "./elements";

const BlogDetailsTwo = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="blog-details-section"
        className={`blog-details-section ${sectionSpace} clearfix`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="10" xs="12">
              <BlogDetails />
            </Col>
            <Col lg="4" md="6" xs="12">
              <aside id="sidebar-section" className="sidebar-section clearfix">
                {/* <!-- widget_search - satrt --> */}
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

export default BlogDetailsTwo;
