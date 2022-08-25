import React, { Fragment } from "react";

const newsLetterWidget = ({ title }) => {
  return (
    <Fragment>
      <div className="widget widget_newsletter ul-li clearfix">
        <h2 className="widget_title"> {title} </h2>
        <form action="#">
          <div className="form-item mb-0">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit" className="submit-btn">
              <i className="uil uil-message"></i>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default newsLetterWidget;
