import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { AppSliderOne } from "../../components/AppSlider";
import { MobileAppOne } from "../../components/MobileApp";
import { MobileAppTwo } from "../../components/MobileApp";
import { MobileAppThree } from "../../components/MobileApp";
import FanFact from "../../components/FuncFact/FanFact";
import { AppCategoryOne } from "../../components/AppCategory";
import { FaqSectionOne } from "../../components/FaqSection";
const HomePageEleven = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.11 - Appal - App Store Leanding Page"
        favicon="../assets/images/logo/favourite-icon-1.png"
      />
      <LayoutFluid
        activeClass="active"
        wrapperClass="home-page-11"
        sectionSpace="sec-ptb-160 pb-0"
      >
        <main>
          <AppSliderOne sectionSpace="mb-60" />
          <MobileAppOne sectionSpace="sec-ptb-160" />
          <MobileAppTwo sectionSpace="sec-ptb-160 bg-light-gray" />
          <MobileAppThree sectionSpace="sec-ptb-160 pb-0" />
          <FanFact />
          <AppCategoryOne sectionSpace="sec-ptb-160 pt-0" />
          <FaqSectionOne />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default HomePageEleven;
