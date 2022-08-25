import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const categoriesWidget = ({ title }) => {
  return (
    <Fragment>
      <div className="widget widget_categories ul-li-block clearfix">
        <h2 className="widget_title">{title}</h2>
        <ul className="clearfix">
          <li>
            <Link to="#!">popular</Link>{" "}
            <span className="badge float-right">(12)</span>
          </li>
          <li>
            <Link to="#!">web design</Link>{" "}
            <span className="badge float-right">(08)</span>
          </li>
          <li>
            <Link to="#!">web development</Link>{" "}
            <span className="badge float-right">(10)</span>
          </li>
          <li>
            <Link to="#!">mobile application</Link>{" "}
            <span className="badge float-right">(05)</span>
          </li>
          <li>
            <Link to="#!">trendy design</Link>{" "}
            <span className="badge float-right">(07)</span>
          </li>
          <li>
            <Link to="#!">others</Link>{" "}
            <span className="badge float-right">(07)</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default categoriesWidget;
