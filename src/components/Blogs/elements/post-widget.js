import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const postWidget = ({ title }) => {
  return (
    <Fragment>
      <div className="widget widget_cixposttype ul-li-block clearfix">
        <h2 className="widget_title">{title}</h2>
        <ul className="clearfix">
          <li>
            <span className="post-date">April 04, 2021</span>
            <Link to="#!" className="item-title">
              How to Improve you Digital Marketing selling Campaign
            </Link>
          </li>
          <li>
            <span className="post-date">March 25, 2021</span>
            <Link to="#!" className="item-title">
              10 Business Strategy need to know for Digital Marketing
            </Link>
          </li>
          <li>
            <span className="post-date">March 05, 2021</span>
            <Link to="#!" className="item-title">
              10 Best way to Present your Work
            </Link>
          </li>
          <li>
            <span className="post-date">February 21, 2021</span>
            <Link to="#!" className="item-title">
              How to Improve you Digital Marketing selling Campaign
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default postWidget;
