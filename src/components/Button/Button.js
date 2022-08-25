import React from "react";
const button = (props) => (
  <button className={`${props.btnType}  ${props.btnColor}`}>
    {props.children}
  </button>
);

export default button;
