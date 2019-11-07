export default class GameUtils {
  //returns a 2d array containing false values
  static createEmptyGrid = (rows, cols) =>
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));

  //generates grid with random elemenrs
  static createRandGrid = (rows, cols) => {
    let returnGrid = this.createEmptyGrid(cols, rows);

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 2) === 1) {
          returnGrid[i][j] = 1;
        } else {
          returnGrid[i][j] = 0;
        }
      }
    }

    return returnGrid;
  };

  //toggles state of specified cell true/false
  static changeCellState = (grid, rowInd, colInd) => {
    let returnGrid = this.deepCopyObject(grid);
    returnGrid[rowInd][colInd] = !returnGrid[rowInd][colInd];

    return returnGrid;
  };

  //returns grid containing next state for GOL
  static generate = grid => {
    let returnGrid = this.deepCopyObject(grid);

    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
        let neighbours = this.countLiveNeighbours(grid, i, j);
        if (neighbours < 2 || neighbours > 3) {
          returnGrid[i][j] = false;
        } else if (neighbours === 3) {
          returnGrid[i][j] = true;
        }
      }
    }

    return returnGrid;
  };

  //counts living neighbours of specified cell
  static countLiveNeighbours = (grid, rowInd, colInd) => {
    let count = 0;
    let locationFuncs = [
      this.checkTopLeftNeighbour,
      this.checkTopNeighbour,
      this.checkTopRightNeighbour,
      this.checkLeftNeighbour,
      this.checkRightNeighbour,
      this.checkBottomLeftNeighbour,
      this.checkBottomNeighbour,
      this.checkBottomRightNeighbour
    ];

    locationFuncs.forEach((func, ind) => {
      if (func(grid, rowInd, colInd)) count++;
    });

    return count;
  };

  static checkTopNeighbour = (grid, rowInd, colInd) => {
    //if not top row
    if (rowInd > 0) {
      return grid[rowInd - 1][colInd] ? true : false;
    }
    return false;
  };

  static checkTopLeftNeighbour = (grid, rowInd, colInd) => {
    //if not top row and not left col
    if (rowInd > 0 && colInd > 0) {
      return grid[rowInd - 1][colInd - 1] ? true : false;
    }
    return false;
  };

  static checkTopRightNeighbour = (grid, rowInd, colInd) => {
    //if not top row and not right col
    if (rowInd > 0 && colInd < grid[0].length - 1) {
      return grid[rowInd - 1][colInd + 1] ? true : false;
    }
    return false;
  };

  static checkRightNeighbour = (grid, rowInd, colInd) => {
    //if not right col
    if (colInd < grid[0].length - 1) {
      return grid[rowInd][colInd + 1] ? true : false;
    }
    return false;
  };

  static checkLeftNeighbour = (grid, rowInd, colInd) => {
    //if not left row
    if (colInd > 0) {
      return grid[rowInd][colInd - 1] ? true : false;
    }
    return false;
  };

  static checkBottomNeighbour = (grid, rowInd, colInd) => {
    //if not bottom row
    if (rowInd < grid.length - 1) {
      return grid[rowInd + 1][colInd] ? true : false;
    }
    return false;
  };

  static checkBottomLeftNeighbour = (grid, rowInd, colInd) => {
    //if not bottom row and not left col
    if (rowInd < grid.length - 1 && colInd > 0) {
      return grid[rowInd + 1][colInd - 1] ? true : false;
    }
    return false;
  };

  static checkBottomRightNeighbour = (grid, rowInd, colInd) => {
    //if not bottom row and not right col
    if (rowInd < grid.length - 1 && colInd < grid[0].length - 1) {
      return grid[rowInd + 1][colInd + 1] ? true : false;
    }
    return false;
  };

  //returns an identical copy of any object
  static deepCopyObject = obj => {
    return JSON.parse(JSON.stringify(obj));
  };
}
