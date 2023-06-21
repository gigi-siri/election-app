import React from "react";

const Input = (props) => {
  return (
    //Redesign the forms with the previous data and use form design from their site.
    <div className="form-group">
      <label htmlFor={props.id} id={props.id}>
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
