import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="man">
      <div className="card">
        <h1>{props.name}</h1>
        <h3>{props.job}</h3>
      </div>
    </div>
  );
}

export default Card;
