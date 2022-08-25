import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BannerTwo } from "../../components/Banner";
import { FeatureTwo } from "../../components/Features";
import { FeatureThree } from "../../components/Features";
import { BrandSlider } from "../../components/BrandSlider";
import { WorkingProgressOne } from "../../components/WorkingProgress";
import FeaturesNav from "../../components/FeaturesNav/FeaturesNav";
import { TestimonialSliderTwo } from "../../components/TestimonialSlider";
import FanFact from "../../components/FuncFact/FanFact";
import Pricing from "../../components/PricingSection/PricingSection";
import { AppSectionTwo } from "../../components/AppSection";
import { FaqSectionTwo } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";

const HomePageTwo = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.2 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-2.png"
      />
      <LayoutFluid
        activeClass="active"
        whitekContent="white-content"
        wrapperClass="home-page-2"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BannerTwo />
          <BrandSlider />
          <FeatureTwo />
          <FeaturesNav />
          <WorkingProgressOne sectionSpace="sec-ptb-160" />
          <FeatureThree />
          <TestimonialSliderTwo
            sectionSpace="sec-ptb-160"
            bgColor="bg-light-gray"
          />
          <FanFact />
          <Pricing pricingBg="../assets/images/pricing/sec-bg-1.jpg" />
          <AppSectionTwo />
          <FaqSectionTwo />
          <BlogSlider sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default HomePageTwo;
