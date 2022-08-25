import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BannerEight } from "../../components/Banner";
import { BrandSlider } from "../../components/BrandSlider";
import { FeatureEight } from "../../components/Features";
import { WorkingProgressOne } from "../../components/WorkingProgress";
import { SoftwareSectionTwo } from "../../components/Software";
import { TestimonialSliderOne } from "../../components/TestimonialSlider";
import FanFact from "../../components/FuncFact/FanFact";
import PricingOne from "../../components/PricingSection/PricingSection";
import { FreeTrailOne } from "../../components/FreeTrail";
import { FaqSectionTwo } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";
const HomePageEight = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.8 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-1.png"
      />
      <LayoutFluid
        activeClass="active"
        wrapperClass="home-page-8"
        sectionSpace="sec-ptb-160 pb-0"
      >
        <main>
          <BannerEight sectionSpace="mb-60" />
          <BrandSlider />
          <FeatureEight sectionSpace="sec-ptb-160" />
          <WorkingProgressOne sectionSpace="sec-ptb-160 pt-0" />
          <SoftwareSectionTwo sectionSpace="sec-ptb-160" />
          <TestimonialSliderOne sectionSpace="sec-ptb-160 pb-0" />
          <FanFact />
          <PricingOne pricingBg="../assets/images/pricing/sec-bg-1.jpg" />
          <FreeTrailOne sectionSpace="sec-ptb-160" />
          <FaqSectionTwo />
          <BlogSlider sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default HomePageEight;
