import React from "react";
import Item from "./item.jsx";
import "./itembox.css";

function Itembox() {
  return (
    <div className="Container">
      <Item image={"./Jamm.jpeg"} path="/sales" />
      <Item image={"./Jamm.jpeg"} path="/webs" />
      <Item image={"./Jamm.jpeg"} path="/projects" />
    </div>
  );
}

export default Itembox;
