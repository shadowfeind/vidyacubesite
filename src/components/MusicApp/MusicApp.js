import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MusicApp = () => {
  return (
    <Fragment>
      <div className="app-item">
        <div className="app-image">
          <img src="../assets/images/app/img-12.png" alt="image_not_found" />
        </div>
        <div className="app-content clearfix">
          <div className="item-admin">
            by{" "}
            <Link className="admin-linkLink" to="#!">
              Google Inc.
            </Link>
          </div>
          <h3 className="item-title">Spotify Music</h3>
          <div className="item-tag ul-li clearfix">
            <ul className="clearfix">
              <li>
                <Link to="#!">music</Link>
              </li>
              <li>
                <Link to="#!">entertainment</Link>
              </li>
            </ul>
          </div>
          <small className="free-text">free</small>
        </div>
        <div className="btns-group ul-li clearfix">
          <ul className="clearfix">
            <li className="dropdown">
              <Link
                className="dropdown-toggle bg-default-blue"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                download for
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <div className="store-list ul-li-block clearfix">
                  <ul className="clearfix">
                    <li>
                      <Link to="#!">app store</Link>
                    </li>
                    <li>
                      <Link to="#!">play store</Link>
                    </li>
                    <li>
                      <Link to="#!">windows store</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="#!" className="bg-default-pink">
                add to card
              </Link>
            </li>
          </ul>
        </div>
        <div className="rating-star ul-li clearfix">
          <ul className="clearfix">
            <li className="rated">
              <i className="fas fa-star"></i>
            </li>
            <li className="rated">
              <i className="fas fa-star"></i>
            </li>
            <li className="rated">
              <i className="fas fa-star"></i>
            </li>
            <li className="rated">
              <i className="fas fa-star"></i>
            </li>
            <li className="rated">
              <i className="fas fa-star"></i>
            </li>
          </ul>
          <span className="review-text">(4.9 Reviews)</span>
        </div>
      </div>
    </Fragment>
  );
};

export default MusicApp;
