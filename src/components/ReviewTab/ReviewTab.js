import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import { Fragment } from "react";

const ReviewTab = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <div className="overall-review">
        <Row>
          <Col lg="6" xs="12">
            <div className="overall-review-nav ul-li clearfix">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "1",
                    })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    about
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "2",
                    })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    overview
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "3",
                    })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    reviews
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col lg="6" xs="12">
            <div className="write-review-btn text-right">
              <button type="button">write a review</button>
            </div>
          </Col>
        </Row>
        <TabContent activeTab={activeTab}>
          <TabPane id="about-pane" tabId="1">
            <h3 className="pane-item-title mb-30">Overall Rating 4.9</h3>
            <p className="mb-30">
              Love music? Play your favorite songs and albums free on Windows 10
              with Spotify.
            </p>
            <p className="mb-30">
              Stream the tracks you love instantly, browse the charts or fire up
              readymade playlists in every genre and mood. Radio plays you great
              song after great song, based on your music taste. Discover new
              music too, with awesome playlists built just for you.
            </p>
            <p className="mb-30">
              Digital Marketing selling{" "}
              <a href="#!">
                <u>inventore veritatis</u>
              </a>{" "}
              is important for our ability to learn from mistakes, but it was
              alsogive rise to self-criticism, because it is part of the
              threat-protection system in the other the company wordsImprove you
              Digital Marketing selling.
            </p>
            <div className="info-list ul-li-block mb-30 clearfix">
              <ul className="clearfix">
                <li>
                  <span className="icon">
                    <i className="flaticon-checked"></i>
                  </span>
                  <p className="mb-0">
                    the and expound the actual teachings of the great explorer
                    of the truth, of human happiness. No one rejects.
                  </p>
                </li>
                <li>
                  <span className="icon">
                    <i className="flaticon-checked"></i>
                  </span>
                  <p className="mb-0">
                    the and expound the actual teachings of the great explorer
                    of the truth, of human happiness. No one rejects.
                  </p>
                </li>
                <li>
                  <span className="icon">
                    <i className="flaticon-checked"></i>
                  </span>
                  <p className="mb-0">
                    the and expound the actual teachings of the great explorer
                    of the truth, of human happiness. No one rejects.
                  </p>
                </li>
              </ul>
            </div>
            <p className="mb-0">
              Stream the tracks you love instantly, browse the charts or fire up
              readymade playlists in every genre and mood. Radio plays you great
              song after great song, based on your music taste. Discover new
              music too, with awesome playlists built just for you.
            </p>
          </TabPane>
          <TabPane id="overview-pane" tabId="2">
            <h3 className="pane-item-title mb-30">App Overview</h3>
            <p className="mb-30">
              Love music? Play your favorite songs and albums free on Windows 10
              with Spotify.
            </p>
            <p className="mb-30">
              Stream the tracks you love instantly, browse the charts or fire up
              readymade playlists in every genre and mood. Radio plays you great
              song after great song, based on your music taste. Discover new
              music too, with awesome playlists built just for you.
            </p>
            <p className="mb-30">
              Digital Marketing selling{" "}
              <a href="#!">
                <u>inventore veritatis</u>
              </a>{" "}
              is important for our ability to learn from mistakes, but it was
              alsogive rise to self-criticism, because it is part of the
              threat-protection system in the other the company wordsImprove you
              Digital Marketing selling.
            </p>
            <div className="info-list ul-li-block mb-30 clearfix">
              <h4 className="title-text">Free:</h4>
              <ul className="clearfix">
                <li>lay any song, artist, album or playlist instantly</li>
                <li>
                  Browse hundreds of readymade playlists in every genre and mood
                </li>
                <li>stay on top of the Charts</li>
                <li>Stream Radio</li>
                <li>Enjoy podcasts, audiobooks and videos</li>
                <li>Discover more music with personalized playlists</li>
              </ul>
            </div>
            <div className="info-list ul-li-block mb-30 clearfix">
              <h4 className="title-text">Premium:</h4>
              <ul className="clearfix">
                <li>Download tunes and play offline</li>
                <li>Listen ad-free</li>
                <li>Get even better sound quality</li>
                <li>Try it free for 30 days, no strings attached</li>
              </ul>
            </div>
            <p className="mb-0">
              Stream the tracks you love instantly, browse the charts or fire up
              readymade playlists in every genre and mood. Radio plays you great
              song after great song, based on your music taste. Discover new
              music too, with awesome playlists built just for you.
            </p>
          </TabPane>
          <TabPane id="review-pane" tabId="3">
            <div className="item-ratings ul-li-block clearfix">
              <h3 className="pane-item-title mb-30">Overall Rating 4.9</h3>
              <ul className="clearfix">
                <li>
                  <div className="rating-star ul-li clearfix float-left">
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
                  </div>
                  <div className="single-experties">
                    <div className="progress">
                      <div
                        className="progress-bar Rx-width-100 animated"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <span className="review-text">(35 Reviews)</span>
                </li>
                <li>
                  <div className="rating-star ul-li clearfix float-left">
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
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="single-experties">
                    <div className="progress">
                      <div
                        className="progress-bar Rx-width-80 animated"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rating-star ul-li clearfix float-left">
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
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="single-experties">
                    <div className="progress">
                      <div
                        className="progress-bar Rx-width-60 animated"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <span className="review-text">(35 Reviews)</span>
                </li>
                <li>
                  <div className="rating-star ul-li clearfix float-left">
                    <ul className="clearfix">
                      <li className="rated">
                        <i className="fas fa-star"></i>
                      </li>
                      <li className="rated">
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="single-experties">
                    <div className="progress">
                      <div
                        className="progress-bar Rx-width-40 animated"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rating-star ul-li clearfix float-left">
                    <ul className="clearfix">
                      <li className="rated">
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="single-experties">
                    <div className="progress">
                      <div
                        className="progress-bar Rx-width-20 animated"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="customer-reviews">
              <h3 className="pane-item-title mb-30">Customer Reviews</h3>
              <div className="review-item">
                <div className="rating-star ul-li mb-15 clearfix">
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
                </div>
                <h3 className="customer-name mb-30">
                  Will Connolly
                  <span className="comment-date float-right">
                    17 March 2019
                  </span>
                </h3>
                <p className="mb-0">
                  I just love this app. I would recommend this. After you sign
                  in, add a few choices and watch the movies and shows add up.
                  Before you know it, you have a nice lineup of movies and shows
                  that you have been wanting to watch and watch again. The price
                  isn't bad at all. You choose which option and there you go.
                </p>
              </div>
              <div className="review-item">
                <div className="rating-star ul-li mb-15 clearfix">
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
                </div>
                <h3 className="customer-name mb-30">
                  Tomen Jerry
                  <span className="comment-date float-right">
                    17 March 2019
                  </span>
                </h3>
                <p className="mb-0">
                  I just love this app. I would recommend this. After you sign
                  in, add a few choices and watch the movies and shows add up.
                  Before you know it, you have a nice lineup of movies and shows
                  that you have been wanting to watch and watch again. The price
                  isn't bad at all. You choose which option and there you go.
                </p>
              </div>
              <div className="review-item">
                <div className="rating-star ul-li mb-15 clearfix">
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
                </div>
                <h3 className="customer-name mb-30">
                  Roger Shaw
                  <span className="comment-date float-right">
                    17 March 2019
                  </span>
                </h3>
                <p className="mb-0">
                  I just love this app. I would recommend this. After you sign
                  in, add a few choices and watch the movies and shows add up.
                  Before you know it, you have a nice lineup of movies and shows
                  that you have been wanting to watch and watch again. The price
                  isn't bad at all. You choose which option and there you go.
                </p>
              </div>
              <div className="review-item">
                <div className="rating-star ul-li mb-15 clearfix">
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
                </div>
                <h3 className="customer-name mb-30">
                  Harold Pearson
                  <span className="comment-date float-right">
                    17 March 2019
                  </span>
                </h3>
                <p className="mb-0">
                  I just love this app. I would recommend this. After you sign
                  in, add a few choices and watch the movies and shows add up.
                  Before you know it, you have a nice lineup of movies and shows
                  that you have been wanting to watch and watch again. The price
                  isn't bad at all. You choose which option and there you go.
                </p>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </Fragment>
  );
};

export default ReviewTab;
