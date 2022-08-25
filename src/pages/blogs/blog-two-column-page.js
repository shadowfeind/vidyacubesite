import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import { BlogTwoColumn } from "../../components/Blogs";

const BlogTwoColumnPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Blog Post Two Column - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="blog-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="Blog Post Two Column"
            pageName="blog post"
            curentPageName="blog post"
          />
          <BlogTwoColumn sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default BlogTwoColumnPage;
