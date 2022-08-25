import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import titleFive from "../../data/title/title-five.json";
import { Component } from "react";

const [{ title, subTitle }] = titleFive;

class FanFact extends Component {
  state = {
    CounterUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ CounterUp: true });
    }
  };

  render() {
    return (
      <section
        id="funfact-section"
        className="funfact-section sec-ptb-160 clearfix"
      >
        <div className="container">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${"../assets/images/map.png"})` }}
          >
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-sm-12">
                <div className="section-title mb-100 text-center">
                  <span className="sub-title mb-15">{subTitle}</span>
                  <h2 className="title-text mb-0">{title}</h2>
                </div>
              </div>
            </div>

            <div className="counter-items-list ul-li-center mb-100 clearfix">
              <ul className="clearfix">
                <li>
                  <h4>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        className="count-text"
                        start={0}
                        end={this.state.CounterUp ? 25 : 0}
                        suffix="M+"
                        duration={5}
                      />
                    </VisibilitySensor>
                  </h4>
                  <small className="counter-title">total download</small>
                </li>
                <li>
                  <h4>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        className="count-text"
                        start={0}
                        end={this.state.CounterUp ? 14 : 0}
                        suffix="M+"
                        duration={5}
                      />
                    </VisibilitySensor>
                  </h4>
                  <small className="counter-title">active accounts</small>
                </li>
                <li>
                  <h4>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        className="count-text"
                        start={0}
                        end={this.state.CounterUp ? 7 : 0}
                        suffix="M+"
                        duration={5}
                      />
                    </VisibilitySensor>
                  </h4>
                  <small className="counter-title">positive reviews</small>
                </li>
              </ul>
            </div>

            {/* <div className="review-btn text-center">
              <Link to="/review-page" className="custom-btn-underline">
                see all review
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default FanFact;
