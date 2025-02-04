import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

function Item(props) {
  return (
    <Link to={props.path}>
      <div className="card">
        <div className="v_uno">
          <img src={props.image} />
        </div>
      </div>
    </Link>
  );
}

export default Item;
