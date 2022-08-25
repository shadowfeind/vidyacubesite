import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import { About } from "../../components/About";
import { ServiceSliderOne } from "../../components/ServiceSlider";
// import { TestimonialSliderTwo } from "../../components/TestimonialSlider";
import FanFact from "../../components/FuncFact/FanFact";
import { Team } from "../../components/Team";

const AboutPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="About Us - Vidya Cube MIS"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="about-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="We are More then a team"
            pageName="about us"
            curentPageName="about us"
          />
          <About sectionSpace="sec-ptb-160" />
          <ServiceSliderOne />
          {/* <FanFact /> */}
          {/* <Team sectionSpace="sec-ptb-160 pt-0" /> */}
          {/* <TestimonialSliderTwo
            sectionSpace="sec-ptb-160"
            bgColor="bg-light-gray"
          /> */}
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default AboutPage;
