import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import { TeamTwo } from "../../components/Team";
import { TeamThree } from "../../components/Team";
const TeamPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Team Members - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="team-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="../assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="Meet with our Team"
            pageName="team members"
            curentPageName="team members"
          />
          <TeamTwo sectionSpace="sec-ptb-160" />
          <TeamThree sectionSpace="sec-ptb-160  bg-light-gray" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default TeamPage;
