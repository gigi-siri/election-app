import React from "react";
import { Outlet } from "react-router-dom";

const Voters = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Voters;
