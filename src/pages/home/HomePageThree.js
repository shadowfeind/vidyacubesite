import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BannerThree } from "../../components/Banner";
import { BrandSlider } from "../../components/BrandSlider";
import { WorkingProgressOne } from "../../components/WorkingProgress";
import { ServiceSliderOne } from "../../components/ServiceSlider";
import { FeatureFoure } from "../../components/Features";
import { TestimonialSliderOne } from "../../components/TestimonialSlider";
import FanFact from "../../components/FuncFact/FanFact";
import Pricing from "../../components/PricingSection/PricingSection";
import { AppSectionThree } from "../../components/AppSection";
import { FaqSectionTwo } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";

const HomePageThree = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.3 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-6.png"
      />
      <LayoutFluid activeClass="active" wrapperClass="home-page-3">
        <main>
          <BannerThree />
          <BrandSlider />
          <ServiceSliderOne sectionSpace="sec-ptb-160 pb-0" />
          <FeatureFoure />
          <WorkingProgressOne sectionSpace="sec-ptb-160 pt-0" />
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
      </LayoutFluid>
    </Fragment>
  );
};

export default HomePageThree;
