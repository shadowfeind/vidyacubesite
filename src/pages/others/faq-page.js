import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import { FaqSectionOne } from "../../components/FaqSection";
import { FaqSectionTwo } from "../../components/FaqSection";
const FaqPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Frequently Asked Questions - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="faq-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="Frequently Asked Questions"
            pageName="faq's page"
            curentPageName="faq's page"
          />
          <FaqSectionOne />
          <FaqSectionTwo />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default FaqPage;
