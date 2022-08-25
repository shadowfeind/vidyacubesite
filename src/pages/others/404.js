import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/utility";
const ErrorPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Opps! Page Not Found - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <div className="common-page">
        {/* <!-- brand-logo - start
		================================================== --> */}
        <div className="brand-logo">
          <Link to="/" className="brand-link">
            <img src="../assets/images/logo/logo-2.png" alt="logo_not_found" />
          </Link>
        </div>
        {/* <!-- brand-logo - end
		================================================== --> */}

        {/* <!-- error-section - start
		================================================== --> */}
        <section id="error-section" className="error-section clearfix">
          <div className="common-container">
            <div className="image-container">
              <img src="../assets/images/404.png" alt="image_not_found" />
            </div>
          </div>
          <div className="common-container bg-default-blue">
            <div className="item-content">
              <h2 className="title-text mb-30">404 error not found</h2>
              <p className="mb-60">
                The page you are looking for was moved or renamed or might never
                existed.
              </p>
              <Link to="/" className="custom-btn">
                take me home
              </Link>
            </div>
            <small className="shape-1">
              <img
                src="../assets/images/shapes/cross.png"
                alt="image_not_found"
              />
            </small>
            <small className="shape-2">
              <img
                src="../assets/images/shapes/flow-1.png"
                alt="image_not_found"
              />
            </small>
            <small className="shape-3">
              <img
                src="../assets/images/shapes/box.png"
                alt="image_not_found"
              />
            </small>
            <small className="shape-4">
              <img
                src="../assets/images/shapes/box.png"
                alt="image_not_found"
              />
            </small>
            <small className="shape-5">
              <img
                src="../assets/images/shapes/circle-half.png"
                alt="image_not_found"
              />
            </small>
            <small className="shape-6">
              <img
                src="../assets/images/shapes/cross.png"
                alt="image_not_found"
              />
            </small>
            <small className="shape-7">
              <img
                src="../assets/images/shapes/flow-2.png"
                alt="image_not_found"
              />
            </small>
            <small className="shape-8">
              <img
                src="../assets/images/shapes/circle.png"
                alt="image_not_found"
              />
            </small>
            <small className="shape-9">
              <img
                src="../assets/images/shapes/circle-half.png"
                alt="image_not_found"
              />
            </small>
          </div>
        </section>
        {/* <!-- error-section - end
		================================================== --> */}

        {/* <!-- social-links - start
		================================================== --> */}
        <div className="social-links ul-li clearfix">
          <h3 className="title-text mb-30">follow us:</h3>
          <ul className="clearfix">
            <li>
              <Link to="#!">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="#!">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#!">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </li>
            <li>
              <Link to="#!">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- social-links - end
		================================================== --> */}
      </div>
    </Fragment>
  );
};

export default ErrorPage;
