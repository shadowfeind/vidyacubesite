import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutTwo } from "../../layouts";
import { BannerNine } from "../../components/Banner";
import { BrandSlider } from "../../components/BrandSlider";
import { ServiceSliderOne } from "../../components/ServiceSlider";
import FeaturesNav from "../../components/FeaturesNav/FeaturesNav";
import { FeatureTwo } from "../../components/Features";
import { FeatureSeven } from "../../components/Features";
import { SoftwareSectionTwo } from "../../components/Software";
import { TestimonialSliderTwo } from "../../components/TestimonialSlider";
import FanFact from "../../components/FuncFact/FanFact";
import PricingOne from "../../components/PricingSection/PricingSection";
import { FreeTrailOne } from "../../components/FreeTrail";
import { FaqSectionTwo } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";
const HomePageNine = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.9 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-2.png"
      />
      <LayoutTwo
        activeClass="active"
        wrapperClass="home-page-9"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BannerNine />
          <BrandSlider />
          <ServiceSliderOne sectionSpace="sec-ptb-160 pb-0" />
          <FeatureTwo sectionSpace="sec-ptb-160" />
          <FeaturesNav />
          <FeatureSeven sectionSpace="sec-ptb-160" />
          <SoftwareSectionTwo sectionSpace="sec-ptb-160" />
          <TestimonialSliderTwo sectionSpace="sec-ptb-160 pb-0" />
          <FanFact />
          <PricingOne pricingBg="../assets/images/pricing/sec-bg-1.jpg" />
          <FreeTrailOne sectionSpace="sec-ptb-160" />
          <FaqSectionTwo />
          <BlogSlider sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutTwo>
    </Fragment>
  );
};

export default HomePageNine;
