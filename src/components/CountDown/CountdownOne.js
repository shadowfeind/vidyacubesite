import React from "react";
import Countdown from "react-countdown";
import RendererTwo from "./RendererTwo";

const CountdownOne = ({ dateTime }) => {
  return <Countdown date={new Date(dateTime)} renderer={RendererTwo} />;
};

export default CountdownOne;
