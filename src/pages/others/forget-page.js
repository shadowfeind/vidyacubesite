import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/utility";
const ForGetPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Reset Password - Appal - Mobile App Leanding Page"
        favicon="../assets/images/logo/favourite-icon-0.png"
      />
      <div className="common-page">
        {/* <!-- brand-logo - start
		================================================== --> */}
        <div className="brand-logo">
          <Link to="/app-landing-creative" className="brand-link">
            <img src="../assets/images/logo/logo-2.png" alt="logo_not_found" />
          </Link>
        </div>
        {/* <!-- brand-logo - end
		================================================== --> */}

        {/* <!-- register-section - start
		================================================== --> */}

        <section id="register-section" className="register-section clearfix">
          <div className="common-container">
            <div className="image-container">
              <img src="../assets/images/common-1.png" alt="image_not_found" />
            </div>
          </div>
          <div className="common-container bg-default-blue">
            <div className="item-content">
              <h2 className="title-text mb-30">Forgot Password?</h2>
              <p className="mb-60">
                Enter your email address associated{" "}
                <span>with your account.</span>
              </p>
              <div className="register-form">
                <form action="#">
                  <div className="form-item mb-45">
                    <input id="reg-email" type="email" />
                    <label htmlFor="reg-email">email address</label>
                  </div>
                  <button type="submit" className="custom-btn">
                    send reset link
                  </button>
                </form>
              </div>
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

        {/* <!-- register-section - end
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

export default ForGetPage;
