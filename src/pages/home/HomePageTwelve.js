import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { SearchAppOne } from "../../components/SearchApp";
import { MobileAppTabs } from "../../components/MobileApp";
import FanFact from "../../components/FuncFact/FanFact";
import { AppCategoryOne } from "../../components/AppCategory";
import { FaqSectionOne } from "../../components/FaqSection";
const HomePageTwelve = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.12 - Appal - App Store Leanding Page"
        favicon="../assets/images/logo/favourite-icon-1.png"
      />
      <LayoutFluid
        activeClass="active"
        wrapperClass="home-page-12"
        sectionSpace="sec-ptb-160 pb-0"
      >
        <main>
          <SearchAppOne sectionSpace="mb-60" />
          <MobileAppTabs sectionSpace="sec-ptb-160 pb-0" />
          <FanFact />
          <AppCategoryOne sectionSpace="sec-ptb-160 pt-0" />
          <FaqSectionOne />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default HomePageTwelve;
