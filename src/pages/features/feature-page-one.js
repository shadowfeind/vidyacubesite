import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import FeaturesNav from "../../components/FeaturesNav/FeaturesNav";
import { FeatureOne } from "../../components/Features";

const FeaturePageOne = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Features - Vidya Cube MIS"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="App Feature"
            pageName="Features"
            curentPageName="team members"
          />
          <FeaturesNav />
          <FeatureOne sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default FeaturePageOne;
