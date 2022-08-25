import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const instagramWidget = ({ title }) => {
  return (
    <Fragment>
      <div className="widget widget_instagram ul-li clearfix">
        <h2 className="widget_title"> {title} </h2>
        <ul className="clearfix">
          <li>
            <Link to="#!">
              <img
                src="../assets/images/instagram/img-1.jpg"
                alt="image_not_found"
              />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img
                src="../assets/images/instagram/img-2.jpg"
                alt="image_not_found"
              />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img
                src="../assets/images/instagram/img-3.jpg"
                alt="image_not_found"
              />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img
                src="../assets/images/instagram/img-4.jpg"
                alt="image_not_found"
              />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img
                src="../assets/images/instagram/img-5.jpg"
                alt="image_not_found"
              />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img
                src="../assets/images/instagram/img-1.jpg"
                alt="image_not_found"
              />
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default instagramWidget;
