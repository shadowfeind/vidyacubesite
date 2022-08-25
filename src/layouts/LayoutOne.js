import React, { Fragment, useState } from "react";
import { HeaderOne } from "../components/Header";
import { Footer } from "../components/Footer";
import { AppalScrollToTop } from "../components/ScrollToTop";
import { SideBar } from "../components/SideBar";

const LayoutOne = ({ children, activeClass, wrapperClass }) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Fragment>
      <div className={wrapperClass}>
        <AppalScrollToTop />
        <HeaderOne
          handleSidebar={handleSidebar}
          activeClass={activeClass}
          btnType="custom-btn"
        />
        <SideBar sidebarIsOpen={sidebarIsOpen} handleSidebar={handleSidebar} />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

export default LayoutOne;
