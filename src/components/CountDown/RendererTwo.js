import React, { Fragment } from "react";

const RendererTwo = ({ days, hours, minutes, seconds }) => {
  return (
    <Fragment>
      <div className="countdown-timer ul-li mb-45 clearfix">
        <ul className="countdown-list">
          <li className="timer-item days">
            <strong>{days}</strong>
            <small>Days</small>
          </li>
          <li className="timer-item hours">
            <strong>{hours}</strong>
            <small>Hours</small>
          </li>
          <li className="timer-item mins">
            <strong>{minutes}</strong>
            <small>Minutes</small>
          </li>
          <li className="timer-item sec">
            <strong suppressHydrationWarning={true}>{seconds}</strong>
            <small>Seconds</small>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default RendererTwo;
