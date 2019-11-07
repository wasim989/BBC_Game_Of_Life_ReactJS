import React from "react";
import GameUtils from "../../Utils/GameUtils.js";
import Grid from "../Grid/Grid.js";
import Buttons from "../Buttons/Buttons.js";
import "./game.css";

class Game extends React.Component {
  constructor() {
    super();
    this.speed = 200; //delay between grid re-renders
    this.rows = 3; //number of rows in grid
    this.cols = 3; //number of columns in grid

    this.state = {
      grid: GameUtils.createEmptyGrid(3, 3)
    };
  }

  playHandler = () => {
    //set up an interval
    if (this.intervalId !== undefined) clearInterval(this.intervalId);
    this.intervalId = setInterval(this.generate, this.speed);
    console.log("play");
    console.log(this.intervalId);
  };

  stopHandler = () => {
    //clear the interval
    clearInterval(this.intervalId);
    console.log("stop");
    console.log(this.intervalId);
  };

  clearHandler = () => {
    //clear the grid and clear the interval
    this.setState({ grid: GameUtils.createEmptyGrid(this.rows, this.cols) });
  };

  randHandler = () => {
    //seed the grid with random values
    this.setState({ grid: GameUtils.createRandGrid(this.rows, this.cols) });
  };

  cellClickHandler = (row, col) => {
    //invert cell state
    console.log("cell click handler" + row + col);
    this.setState({
      grid: GameUtils.changeCellState(this.state.grid, row, col)
    });
  };

  generate = () => {
    //proceed to next iteration
    this.setState({
      grid: GameUtils.generate(this.state.grid)
    });
  };

  render() {
    return (
      <div>
        <Grid
          grid={this.state.grid}
          rows={this.rows}
          cols={this.cols}
          cellClickHandler={this.cellClickHandler}
        />
        <Buttons
          playHandler={this.playHandler}
          stopHandler={this.stopHandler}
          clearHandler={this.clearHandler}
          randHandler={this.randHandler}
        />
      </div>
    );
  }
}

export default Game;
