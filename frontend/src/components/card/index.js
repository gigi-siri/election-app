import React from "react";

const Card = ({ title, children }) => {
  const cardStyle = { padding: "20px", width: "700px", margin: "0 auto" };
  return (
    <div className="card" style={cardStyle}>
      <h1>{title}</h1>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
