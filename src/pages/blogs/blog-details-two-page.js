import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import { BlogDetailsTwo } from "../../components/Blogs";

const BlogDetailsTwoPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Blog Details With Sidebar - Appal - Mobile App Leanding Page"
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
            title="Blog Details with Sidebar"
            pageName="blog details"
            curentPageName="blog details"
          />
          <BlogDetailsTwo sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default BlogDetailsTwoPage;
