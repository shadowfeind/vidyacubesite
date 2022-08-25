import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { AppDetailsV2 } from "../../components/AppDetails";
const AppDetailsV2Page = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="App Details - bootstrap App Store - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="app-details-page-2"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
      >
        <main>
          <AppDetailsV2 />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default AppDetailsV2Page;
