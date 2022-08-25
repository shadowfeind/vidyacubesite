import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";

import { AppDetailsV1 } from "../../components/AppDetails";
const AppDetailsV1Page = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="App Details - bootstrap App Store - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="app-details-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="App Details Page"
            pageName="App Details"
            curentPageName="App Details"
          />
          <AppDetailsV1 />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default AppDetailsV1Page;
