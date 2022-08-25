import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";

import { Map } from "../../components/Map";
const ContactPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Contact Us - Vidya Cube MIS"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="contact-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="contact with us"
            pageName="contact us"
            curentPageName="contact us"
          />

          <Map />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default ContactPage;
