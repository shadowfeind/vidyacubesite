import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BreadCrumbOne = ({ title, pageName, curentPageName }) => {
  return (
    <Fragment>
      <section
        id="breadcrumb-section"
        className="breadcrumb-section mma-container clearfix"
        style={{
          backgroundImage: `url('../assets/images/breadcrumb/bg-image-1.jpg')`,
        }}
      >
        <div className="design-image-1 clearfix">
          <small className="image-1" data-aos="fade-up" data-aos-delay="100">
            <img
              src="../assets/images/breadcrumb/design-image-1.png"
              alt="image_not_found"
            />
          </small>
          <small
            className="man-image-1"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <img
              src="../assets/images/breadcrumb/img-1.png"
              alt="image_not_found"
            />
          </small>
          <small
            className="man-image-2"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <img
              src="../assets/images/breadcrumb/img-2.png"
              alt="image_not_found"
            />
          </small>
          <small
            className="shape-image-1"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <img
              src="../assets/images/breadcrumb/img-5.png"
              alt="image_not_found"
            />
          </small>
          <small
            className="medal-image-1"
            data-aos="flip-left"
            data-aos-delay="1400"
          >
            <img
              src="../assets/images/breadcrumb/img-3.png"
              alt="image_not_found"
            />
          </small>
          <small
            className="shape-image-2"
            data-aos="zoom-in"
            data-aos-delay="1100"
          >
            <img
              src="../assets/images/breadcrumb/img-5.png"
              alt="image_not_found"
            />
          </small>
          <small
            className="medal-image-2"
            data-aos="flip-left"
            data-aos-delay="1500"
          >
            <img
              src="../assets/images/breadcrumb/img-4.png"
              alt="image_not_found"
            />
          </small>
        </div>
        <small
          className="design-image-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="../assets/images/breadcrumb/design-image-2.png"
            alt="image_not_found"
          />
        </small>

        <div className="container">
          <div className="row justify-content-lg-start justify-content-md-center">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="breadcrumb-content">
                <span className="page-name">{pageName}</span>
                <div className="section-title">
                  <h2 className="title-text mb-15">{title}</h2>
                  <p className="paragraph-text mb-0">
                    The most powerful software for any kind of School
                    Management. It does’t matter how big or small your School
                    is.
                  </p>
                </div>

                <nav className="breadcrumb-nav" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/app-landing-creative">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {curentPageName}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <small className="cross-image-1 spin-image mma-item">
          <img src="../assets/images/shapes/cross.png" alt="image_not_found" />
        </small>
        <small className="cross-image-2 spin-image mma-item">
          <img src="../assets/images/shapes/cross.png" alt="image_not_found" />
        </small>

        <small className="box-image-1 spin-image mma-item">
          <img src="../assets/images/shapes/box.png" alt="image_not_found" />
        </small>
        <small className="box-image-2 spin-image mma-item">
          <img src="../assets/images/shapes/box.png" alt="image_not_found" />
        </small>

        <small className="flow-image-1 zoominout-image mma-item">
          <img src="../assets/images/shapes/flow-1.png" alt="image_not_found" />
        </small>
        <small className="flow-image-2 zoominout-image mma-item">
          <img src="../assets/images/shapes/flow-2.png" alt="image_not_found" />
        </small>

        <small className="circle-half-1 spin-image mma-item">
          <img
            src="../assets/images/shapes/circle-half.png"
            alt="image_not_found"
          />
        </small>
        <small className="circle-half-2 spin-image mma-item">
          <img
            src="../assets/images/shapes/circle-half.png"
            alt="image_not_found"
          />
        </small>

        <small className="circle-image-1 zoominout-image mma-item">
          <img src="../assets/images/shapes/circle.png" alt="image_not_found" />
        </small>
      </section>
    </Fragment>
  );
};

export default BreadCrumbOne;
