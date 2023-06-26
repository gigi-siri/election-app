import React from "react";

export const HeaderLarge = ({ title }) => {
  return (
    <div className="jumbotron jumbotron my-5">
      <div className="container">
        <h1 className="display-4 text-center font-weight-bold">{title}</h1>
      </div>
    </div>
  );
};

export const HeaderSmall = ({ title }) => {
  return (
    <div className="jumbotron jumbotron my-5">
      <div className="container">
        <h1 className=" text-center ">{title}</h1>
      </div>
    </div>
  );
};
