import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BannerSeven } from "../../components/Banner";
import { BrandSlider } from "../../components/BrandSlider";
import { ServiceSliderOne } from "../../components/ServiceSlider";
import { SoftwareSectionOne } from "../../components/Software";
import { FeatureSeven } from "../../components/Features";
import { TestimonialSliderTwo } from "../../components/TestimonialSlider";
import FanFact from "../../components/FuncFact/FanFact";
import PricingTwo from "../../components/PricingSection/PricingSectionTwo";
import { FreeTrailOne } from "../../components/FreeTrail";
import { FaqSectionTwo } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";
const HomePageSeven = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.7 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-7.png"
      />
      <LayoutFluid
        activeClass="active"
        wrapperClass="home-page-7"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BannerSeven sectionSpace="mb-60" />
          <BrandSlider />
          <ServiceSliderOne sectionSpace="sec-ptb-160" />
          <FeatureSeven sectionSpace="sec-ptb-160 pt-0" />
          <SoftwareSectionOne sectionSpace="sec-ptb-160" />
          <TestimonialSliderTwo
            sectionSpace="sec-ptb-160"
            bgColor="bg-light-gray"
          />
          <FanFact />
          <PricingTwo pricingBg="../assets/images/pricing/sec-bg-3.jpg" />
          <FreeTrailOne sectionSpace="sec-ptb-160" />
          <FaqSectionTwo />
          <BlogSlider sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default HomePageSeven;
