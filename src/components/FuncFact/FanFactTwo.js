import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { Component } from "react";

class FanFactTwo extends Component {
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
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="counter-item text-center">
            <h3>
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
                  end={this.state.CounterUp ? 12 : 0}
                  suffix="+"
                  duration={5}
                />
              </VisibilitySensor>
            </h3>
            <span className="title-text">Home Pages</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="counter-item text-center">
            <h3>
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
                  end={this.state.CounterUp ? 11 : 0}
                  suffix="+"
                  duration={5}
                />
              </VisibilitySensor>
            </h3>
            <span className="title-text">Inner Pages</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="counter-item text-center">
            <h3>
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
                  suffix="+"
                  duration={5}
                />
              </VisibilitySensor>
            </h3>
            <span className="title-text">Blog Pages</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="counter-item text-center">
            <h3>
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
                  end={this.state.CounterUp ? 4 : 0}
                  suffix="+"
                  duration={5}
                />
              </VisibilitySensor>
            </h3>
            <span className="title-text">Details Pages</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FanFactTwo;
