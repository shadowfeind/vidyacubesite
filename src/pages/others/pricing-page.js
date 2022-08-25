import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import Pricing from "../../components/PricingSection/PricingSection";
import PricingTable from "../../components/PricingSection/PricingTable";
const PricingPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Pricing Plan - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="pricing-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="Most Attractive Pricing Plan"
            pageName="pricing plan"
            curentPageName="pricing table"
          />
          <Pricing
            sectionSpace="sec-ptb-160"
            pricingBg="../assets/images/pricing/sec-bg-1.jpg"
          />
          <PricingTable />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default PricingPage;
