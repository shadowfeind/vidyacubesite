import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutTwo } from "../../layouts";
import { BannerTen } from "../../components/Banner";
import { BrandSliderTwo } from "../../components/BrandSlider";
import { ServiceCardOne } from "../../components/ServiceCard";
import FeaturesNav from "../../components/FeaturesNav/FeaturesNav";
import { FeatureNine } from "../../components/Features";
import { SoftwareSectionThree } from "../../components/Software";
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
        PageTitle="Home V.10 - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-1.png"
      />
      <LayoutTwo
        activeClass="active"
        wrapperClass="home-page-10"
        sectionSpace="sec-ptb-160 pb-0"
      >
        <main>
          <BannerTen />
          <BrandSliderTwo />
          <ServiceCardOne sectionSpace="sec-ptb-160" />
          <FeaturesNav />
          <FeatureNine sectionSpace="sec-ptb-160" />
          <SoftwareSectionThree sectionSpace="sec-ptb-160" />
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
