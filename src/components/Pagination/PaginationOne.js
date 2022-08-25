import React from "react";
import { Link } from "react-router-dom";
const AppalPagination = () => {
  return (
    <div className="pagination-nav ul-li-center clearfix">
      <ul className="pagination clearfix">
        <li className="page-item prev-item">
          <Link to="#?" className="page-link">
            <i className="uil uil-angle-left"></i>
          </Link>
        </li>
        <li className="page-item">
          <Link to="#?" className="page-link">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link to="#?" className="page-link">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link to="#?" className="page-link">
            3
          </Link>
        </li>
        <li className="page-item next-item">
          <Link to="#?" className="page-link">
            <i className="uil uil-angle-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AppalPagination;
