import React from "react";
import "./buttons.css";

function Buttons(props) {
  return (
    <div className="buttons">
      <button className="btn" onClick={props.playHandler}>
        Play
      </button>
      <button className="btn" onClick={props.stopHandler}>
        Stop
      </button>
      <button className="btn" onClick={props.clearHandler}>
        Clear
      </button>
      <button className="btn" onClick={props.randHandler}>
        Rand
      </button>
    </div>
  );
}

export default Buttons;
