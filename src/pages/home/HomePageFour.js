import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutTwo } from "../../layouts";
import BannerFour from "../../components/Banner/BannerFour";
import FeaturesNav from "../../components/FeaturesNav/FeaturesNav";
import { FeatureFive } from "../../components/Features";
import { TestimonialSliderTwo } from "../../components/TestimonialSlider";
import { ServiceSliderOne } from "../../components/ServiceSlider";
import FanFact from "../../components/FuncFact/FanFact";
import Pricing from "../../components/PricingSection/PricingSection";
import { AppSectionThree } from "../../components/AppSection";
import { FaqSectionTwo } from "../../components/FaqSection";
import BlogSlider from "../../components/BLogSlider/BlogSlider";
const HomePageFour = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Home V.4 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-1.png"
      />
      <LayoutTwo
        activeClass="active"
        wrapperClass="home-page-4"
        sectionSpace="sec-ptb-160 pb-0"
      >
        <main>
          <BannerFour />
          <ServiceSliderOne />
          <FeatureFive />
          <FeaturesNav />
          <TestimonialSliderTwo
            sectionSpace="sec-ptb-160 pt-0"
            bgColor="bg-light-gray"
          />
          <FanFact />
          <Pricing pricingBg="../assets/images/pricing/sec-bg-1.jpg" />
          <AppSectionThree sectionSpace="sec-ptb-160 pb-0" />
          <BlogSlider sectionSpace="sec-ptb-160" />
          <FaqSectionTwo />
        </main>
      </LayoutTwo>
    </Fragment>
  );
};

export default HomePageFour;
