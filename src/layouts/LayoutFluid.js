import React, { Fragment, useState } from "react";
import { HeaderFluid } from "../components/Header";
import { Footer } from "../components/Footer";
import { AppalScrollToTop } from "../components/ScrollToTop";
import { SideBar } from "../components/SideBar";
const LayoutFluid = ({
  children,
  activeClass,
  wrapperClass,
  whitekContent,
  logoWhite,
}) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Fragment>
      <div className={wrapperClass}>
        <AppalScrollToTop />
        <HeaderFluid
          handleSidebar={handleSidebar}
          logoWhite={logoWhite}
          activeClass={activeClass}
          whitekContent={whitekContent}
          btnType="custom-btn"
        />
        <SideBar sidebarIsOpen={sidebarIsOpen} handleSidebar={handleSidebar} />
        {children}
        <Footer sectionSpace="sec-ptb-160 pb-0" />
      </div>
    </Fragment>
  );
};

export default LayoutFluid;
