import React from "react";
import "./square.css";

function Square(props) {
  return (
    <div
      className="square"
      onClick={props.cellClickHandler}
      style={
        props.status
          ? { backgroundColor: "green" }
          : { backgroundColor: "white" }
      }
    ></div>
  );
}

export default Square;
