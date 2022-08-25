import React, { Fragment, useState } from "react";
import { HeaderTwo } from "../components/Header";
import { Footer } from "../components/Footer";
import { AppalScrollToTop } from "../components/ScrollToTop";
import { SideBar } from "../components/SideBar";
const LayoutTwo = ({
  children,
  activeClass,
  sectionSpace,
  logoWhite,
  whitekContent,
  wrapperClass,
}) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <Fragment>
      <div className={wrapperClass}>
        <AppalScrollToTop />
        <HeaderTwo
          handleSidebar={handleSidebar}
          activeClass={activeClass}
          btnType="custom-btn"
          logoWhite={logoWhite}
          whitekContent={whitekContent}
        />
        <SideBar sidebarIsOpen={sidebarIsOpen} handleSidebar={handleSidebar} />
        {children}
        <Footer sectionSpace={sectionSpace} />
      </div>
    </Fragment>
  );
};

export default LayoutTwo;
