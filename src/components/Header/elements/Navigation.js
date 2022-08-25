import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ activeClass }) => {
  return (
    <Fragment>
      <nav className="main-menubar ul-li-right clearfix">
        <ul className="clearfix">
          <li
            className={`menu-item-has-child ${
              activeClass ? activeClass : null
            }`}
          >
            <Link to="/">home</Link>
            {/* <ul className="sub-menu">
              <li
                className={`menu-item-has-child ${
                  activeClass ? activeClass : null
                }`}
              >
                <Link to="#!">mobile app</Link>
                <ul className="sub-menu">
                  <li className={activeClass ? activeClass : null}>
                    <Link to="/">App Landing Creative</Link>
                  </li>
                  <li>
                    <Link to="app-landing-elegant">App Landing Elegant</Link>
                  </li>
                  <li>
                    <Link to="app-landing-modern">App Landing Modern</Link>
                  </li>
                  <li>
                    <Link to="app-landing-minimal">App Landing Minimal</Link>
                  </li>
                  <li>
                    <Link to="app-landing-exclusive">
                      App Landing Exclusive
                    </Link>
                  </li>
                  <li>
                    <Link to="app-landing-classic">App Landing Classic</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-child">
                <Link to="#!">sass landing page</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="saas-landing-creative">
                      Saas Landing Creative
                    </Link>
                  </li>
                  <li>
                    <Link to="saas-landing-elegant">Saas Landing Elegant</Link>
                  </li>
                  <li>
                    <Link to="saas-landing-exclusive">
                      Saas Landing Exclusive
                    </Link>
                  </li>
                  <li>
                    <Link to="saas-landing-modern">Saas Landing Modern</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-child">
                <Link to="#!">app store</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="app-store-creative">App Store Creative</Link>
                  </li>
                  <li>
                    <Link to="app-store-elegant">App Store Elegant</Link>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li className="menu-item-has-child">
            <Link to="/features-app-landing-creative">features</Link>
            {/* <ul className="sub-menu">
              <li>
                <Link to="/features-app-landing-creative">
                  App Landing Creative
                </Link>
              </li>
              <li>
                <Link to="/features-saas-landing-creative">
                  Saas Landing Creative
                </Link>
              </li>
            </ul> */}
          </li>
          <li className="menu-item-has-child">
            <Link to="about-us">about us</Link>
            {/* <ul className="sub-menu">
              <li>
                <Link to="about-us">about us</Link>
              </li>
              <li>
                <Link to="contact-us">contact with us</Link>
              </li>
              <li>
                <Link to="team">our team</Link>
              </li>
              <li className="menu-item-has-child">
                <Link to="#!">app details</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="app-details-v1">app details V.1</Link>
                  </li>
                  <li>
                    <Link to="app-details-v2">app details V.2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="faq">FAQ</Link>
              </li>
              <li>
                <Link to="404">404 Error</Link>
              </li>
              <li className="menu-item-has-child">
                <Link to="#!">others pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="register">register</Link>
                  </li>
                  <li>
                    <Link to="login">login</Link>
                  </li>
                  <li>
                    <Link to="forget-password">forget password</Link>
                  </li>
                  <li>
                    <Link to="coming-soon">coming soon</Link>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li className="menu-item-has-child">
            <Link to="contact-us">contact us</Link>
          </li>
          {/* <li>
            <Link to="pricing-page">pricing</Link>
          </li> */}
          {/* <li className="menu-item-has-child">
            <Link to="#!">blogs</Link>
            <ul className="sub-menu">
              <li>
                <Link to="blog-default-page">Blog Default</Link>
              </li>
              <li>
                <Link to="blog-standard-page">blog standard</Link>
              </li>
              <li>
                <Link to="blog-two-column-page">blog 2 column</Link>
              </li>
              <li>
                <Link to="blog-three-column-page">blog 3 column</Link>
              </li>
              <li>
                <Link to="blog-details-one-page">blog details default</Link>
              </li>
              <li>
                <Link to="blog-details-two-page">blog details sidebar</Link>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
