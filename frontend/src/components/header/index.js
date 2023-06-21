import React from "react";

const Header = ({ title }) => {
  return (
    <div className="jumbotron jumbotron my-5">
      <div className="container">
        <h1 className="display-4 text-center font-weight-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
