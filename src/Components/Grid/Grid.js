import React from "react";
import Square from "../Square/Square.js";

function Grid(props) {
  const width = props.cols * 205;
  let squaresArray = [];

  squaresArray = Array(props.rows)
    .fill()
    .map((outerObj, outerInd) =>
      Array(props.cols)
        .fill()
        .map((innerObj, innerInd) => {
          return (
            <Square
              key={outerInd + " " + innerInd}
              status={props.grid[outerInd][innerInd]}
              cellClickHandler={() => {
                props.cellClickHandler(outerInd, innerInd);
              }}
            />
          );
        })
    );

  return <div style={{ width: width }}>{squaresArray}</div>;
}
export default Grid;
