import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutTwo } from "../../layouts";
import { BannerFive } from "../../components/Banner";
import { BrandSlider } from "../../components/BrandSlider";
import FeaturesNav from "../../components/FeaturesNav/FeaturesNav";
import { FeatureFoure } from "../../components/Features";
import { WorkingProgressOne } from "../../components/WorkingProgress";
import { TestimonialSliderOne } from "../../components/TestimonialSlider";
import { ServiceSliderOne } from "../../components/ServiceSlider";
import FanFact from "../../components/FuncFact/FanFact";
import Pricing from "../../components/PricingSection/PricingSection";
import { AppSectionThree } from "../../components/AppSection";
import { FaqSectionTwo } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";
const HomePageFive = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.5 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-5.png"
      />
      <LayoutTwo
        activeClass="active"
        wrapperClass="home-page-5"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BannerFive />
          <BrandSlider />
          <ServiceSliderOne sectionSpace="sec-ptb-160 pb-0" />
          <FeatureFoure />
          <FeaturesNav />
          <WorkingProgressOne sectionSpace="sec-ptb-160" />
          <TestimonialSliderOne
            sectionSpace="sec-ptb-160"
            bgColor="bg-light-gray"
          />
          <FanFact />
          <Pricing pricingBg="../assets/images/pricing/sec-bg-2.jpg" />
          <AppSectionThree sectionSpace="sec-ptb-160" />
          <FaqSectionTwo />
          <BlogSlider sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutTwo>
    </Fragment>
  );
};

export default HomePageFive;
