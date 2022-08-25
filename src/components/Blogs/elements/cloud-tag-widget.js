import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const cloudTagWidget = ({ title }) => {
  return (
    <Fragment>
      <div className="widget widget_tag_cloud ul-li clearfix">
        <h2 className="widget_title">{title}</h2>
        <ul className="clearfix">
          <li>
            <Link to="#!">travels</Link>
          </li>
          <li>
            <Link to="#!">adventure</Link>
          </li>
          <li>
            <Link to="#!">foods</Link>
          </li>
          <li>
            <Link to="#!">lifestyle</Link>
          </li>
          <li>
            <Link to="#!">traveling</Link>
          </li>
          <li>
            <Link to="#!">photography</Link>
          </li>
          <li>
            <Link to="#!">trends</Link>
          </li>
          <li>
            <Link to="#!">fashion</Link>
          </li>
          <li>
            <Link to="#!">music</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default cloudTagWidget;
