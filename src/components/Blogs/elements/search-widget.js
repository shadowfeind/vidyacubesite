import React, { Fragment } from "react";

const searchWidget = () => {
  return (
    <Fragment>
      <div className="widget widget_search">
        <form action="#">
          <div className="form-item mb-0">
            <input type="search" placeholder="Enter Your Keyword" />
            <button type="submit" className="search-btn">
              <i className="uil uil-search"></i>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default searchWidget;
