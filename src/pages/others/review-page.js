import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import { Review } from "../../components/Review";
const ReviewPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Reviewer Testimonials - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="testimonial-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="See what our customers say about us"
            pageName="Testimonials"
            curentPageName="Testimonials"
          />
          <Review sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default ReviewPage;
