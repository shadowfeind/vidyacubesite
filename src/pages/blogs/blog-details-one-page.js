import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbTwo } from "../../components/BreadCrumb";
import { BlogDetailsOne } from "../../components/Blogs";

const BlogDetailsOnePage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Blog Details - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="blog-details-page-1"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbTwo />
          <BlogDetailsOne />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default BlogDetailsOnePage;
