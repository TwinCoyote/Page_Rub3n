import React from "react";
import Item from "./item.jsx";
import "./itembox.css";

function Itembox() {
  return (
    <div className="Container">
      <Item image={"./microcontrolador.jpg"} path="/sales" />
      <Item image={"./web.jpg"} path="/sales" />
      <Item image={"./Jamm.jpeg"} path="/sales" />
    </div>
  );
}

export default Itembox;
