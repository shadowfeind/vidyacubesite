import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutTwo } from "../../layouts";
import { BannerSix } from "../../components/Banner";
import { ServiceCardOne } from "../../components/ServiceCard";
import FeaturesNav from "../../components/FeaturesNav/FeaturesNav";
import { FeatureSix } from "../../components/Features";
import { WorkingProgressTwo } from "../../components/WorkingProgress";
import { TestimonialSliderOne } from "../../components/TestimonialSlider";
import FanFact from "../../components/FuncFact/FanFact";
import Pricing from "../../components/PricingSection/PricingSection";
import { AppSectionThree } from "../../components/AppSection";
import { FaqSectionTwo } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";
const HomePageSix = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.6 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-1.png"
      />
      <LayoutTwo
        activeClass="active"
        wrapperClass="home-page-6"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="black-content"
      >
        <main>
          <BannerSix sectionSpace="mb-60" />
          <ServiceCardOne sectionSpace="mb-100" />
          <FeatureSix sectionSpace="sec-ptb-160 pt-0" />
          <FeaturesNav />
          <WorkingProgressTwo sectionSpace="sec-ptb-160" />
          <TestimonialSliderOne
            sectionSpace="sec-ptb-160"
            bgColor="bg-light-gray"
          />
          <FanFact />
          <Pricing pricingBg="../assets/images/pricing/sec-bg-1.jpg" />
          <AppSectionThree sectionSpace="sec-ptb-160" />
          <FaqSectionTwo />
          <BlogSlider sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutTwo>
    </Fragment>
  );
};

export default HomePageSix;
