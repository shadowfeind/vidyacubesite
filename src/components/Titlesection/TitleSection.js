import React from "react";
const titleSection = (props) => {
  return (
    <div className={`section-title ${props.spacer} ${props.textAlign}`}>
      {props.children}
    </div>
  );
};

export default titleSection;
