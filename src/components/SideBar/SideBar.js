import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { UncontrolledCollapse } from "reactstrap";
const SideBar = ({ sidebarIsOpen, handleSidebar }) => {
  return (
    <Fragment>
      <div className="sidebar-menu-wrapper">
        <div
          id="sidebar-menu"
          className={`sidebar-menu ${sidebarIsOpen ? "active" : null}`}
        >
          <div className="dismiss text-right mb-60 clearfix">
            <span className="close-btn" onClick={handleSidebar}>
              <i className="flaticon-cancel-music"></i>
            </span>
          </div>

          <div className="btns-group ul-li mb-60 clearfix">
            <h2 className="sidebar-title mb-30">support & downloads</h2>
            <p className="mb-45">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <ul className="clearfix">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=io.ionic.studentmis"
                  className="store-btn bg-default-blue"
                >
                  <span className="icon">
                    <i className="flaticon-google-play"></i>
                  </span>
                  <strong className="title-text">
                    <small>available on</small>
                    google play
                  </strong>
                </a>
              </li>
              <li>
                <Link to="#!" className="store-btn bg-default-black">
                  <span className="icon">
                    <i className="flaticon-apple"></i>
                  </span>
                  <strong className="title-text">
                    <small>available on</small>
                    apple store
                  </strong>
                </Link>
              </li>
            </ul>
          </div>

          {/* <ul className="menu-list mb-60 list-unstyled components clearfix">
            <li className="menu-item-has-child active">
              <Link to="#?" id="toggler0">
                Mobile App
              </Link>

              <UncontrolledCollapse toggler="#toggler0">
                <ul className="sub-menu list-unstyled">
                  <li className="active">
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
                    <Link to="app-landing-classic">App Landing classic</Link>
                  </li>
                </ul>
              </UncontrolledCollapse>
            </li>
            <li className="menu-item-has-child">
              <Link to="#?" id="toggler1">
                Sass Landing
              </Link>

              <UncontrolledCollapse toggler="#toggler1">
                <ul className="sub-menu list-unstyled">
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
              </UncontrolledCollapse>
            </li>
            <li className="menu-item-has-child">
              <Link to="#?" id="toggler2">
                App Store
              </Link>
              <UncontrolledCollapse toggler="#toggler2">
                <ul className="sub-menu list-unstyled">
                  <li>
                    <Link to="app-store-creative">App Store Creative</Link>
                  </li>
                  <li>
                    <Link to="app-store-eElegant">App Store Elegant</Link>
                  </li>
                  <li>
                    <Link to="app-details-v1">App Details v.1</Link>
                  </li>
                  <li>
                    <Link to="app-details-v2">App Details v.2</Link>
                  </li>
                </ul>
              </UncontrolledCollapse>
            </li>
            <li>
              <Link to="about-us">About Us</Link>
            </li>
            <li className="menu-item-has-child">
              <Link to="#?" id="toggler3">
                features
              </Link>
              <UncontrolledCollapse toggler="#toggler3">
                <ul className="sub-menu list-unstyled">
                  <li>
                    <Link to="features-app-landing-creative">
                      App Landing Creative
                    </Link>
                  </li>
                  <li>
                    <Link to="features-saas-landing-creative">
                      Saas Landing Creative
                    </Link>
                  </li>
                </ul>
              </UncontrolledCollapse>
            </li>
            <li>
              <Link to="contact-us">Contact With Us</Link>
            </li>
            <li>
              <Link to="team">Our Team</Link>
            </li>
            <li>
              <Link to="review-page">Customar Review</Link>
            </li>
            <li>
              <Link to="pricing-page">Pricing Plan</Link>
            </li>
            <li>
              <Link to="faq">Frequently Asked Questions</Link>
            </li>
            <li className="menu-item-has-child">
              <Link to="#?" id="toggler4">
                Latest Blog
              </Link>
              <UncontrolledCollapse toggler="#toggler4">
                <ul className="sub-menu list-unstyled">
                  <li>
                    <Link to="blog-default-page">Blog Post Default</Link>
                  </li>
                  <li>
                    <Link to="blog-standard-page">blog post standard</Link>
                  </li>
                  <li>
                    <Link to="blog-two-column-page">blog post 2 column</Link>
                  </li>
                  <li>
                    <Link to="blog-three-column-page">blog post 3 column</Link>
                  </li>
                  <li>
                    <Link to="blog-details-one-page">blog details default</Link>
                  </li>
                  <li>
                    <Link to="blog-details-two-page">blog details sidebar</Link>
                  </li>
                </ul>
              </UncontrolledCollapse>
            </li>
            <li className="menu-item-has-child">
              <Link to="#?" id="toggler5">
                Pages
              </Link>
              <UncontrolledCollapse toggler="#toggler5">
                <ul className="sub-menu list-unstyled">
                  <li>
                    <Link to="register">Register Page</Link>
                  </li>
                  <li>
                    <Link to="login">Login Page</Link>
                  </li>
                  <li>
                    <Link to="forget-password">Forget Password</Link>
                  </li>
                  <li>
                    <Link to="coming-soon">Coming Soon</Link>
                  </li>
                  <li>
                    <Link to="404">404 Page</Link>
                  </li>
                </ul>
              </UncontrolledCollapse>
            </li>
          </ul> */}

          <div className="contact-info ul-li-block mb-60 clearfix">
            <h2 className="sidebar-title mb-30">contact info</h2>
            <ul className="clearfix">
              <li>
                <span className="icon">
                  <i className="uil uil-map-marker"></i>
                </span>
                Jwagal, Lalitpur 44600
              </li>
              <li>
                <span className="icon">
                  <i className="uil uil-map-pin"></i>
                </span>
                Lalitpur, Nepal
              </li>
              <li>
                <span className="icon">
                  <i className="uil uil-envelope-alt"></i>
                </span>
                www.blueberryexperts.com
              </li>
              <li>
                <span className="icon">
                  <i className="uil uil-phone"></i>
                </span>
                + 977 980 231 5999
              </li>
            </ul>
          </div>

          <div className="social-links ul-li clearfix">
            <h2 className="sidebar-title mb-30">follow us</h2>
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
        </div>
        <div
          onClick={handleSidebar}
          className={`overlay ${sidebarIsOpen ? "active" : null}`}
        ></div>
      </div>
    </Fragment>
  );
};

export default SideBar;
