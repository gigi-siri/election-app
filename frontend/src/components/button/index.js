import React from "react";

const Button = (props) => {
  const btnStyle = {
    marginTop: "15px",
  };
  return (
    <button
      type={props.type}
      className="btn btn-primary"
      onClick={props.onClick}
      style={btnStyle}
    >
      {props.title}
    </button>
  );
};

export default Button;
