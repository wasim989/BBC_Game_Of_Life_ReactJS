import GameUtils from "./GameUtils.js";

describe("Integration Tests", function() {
  test("countLiveNeighbours function (from centre))", () => {
    let gridWithOneNeighbour = [
      [false, false, false],
      [false, true, false],
      [false, false, true]
    ];
    let gridWithTwoNeighbours = [
      [false, false, true],
      [false, false, false],
      [false, false, true]
    ];
    let gridWith4Neighbours = [
      [true, true, true],
      [false, true, false],
      [false, false, true]
    ];
    let gridWith8Neighbours = [
      [true, true, true],
      [true, false, true],
      [true, true, true]
    ];

    expect(GameUtils.countLiveNeighbours(gridWithOneNeighbour, 1, 1)).toEqual(
      1
    );
    expect(GameUtils.countLiveNeighbours(gridWithTwoNeighbours, 1, 1)).toEqual(
      2
    );
    expect(GameUtils.countLiveNeighbours(gridWith4Neighbours, 1, 1)).toEqual(4);
    expect(GameUtils.countLiveNeighbours(gridWith8Neighbours, 1, 1)).toEqual(8);
  });

  test("countLiveNeighbours function (from edges and corners))", () => {
    let gridWithOneNeighbourTopLeft = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    let gridWithTwoNeighboursTopright = [
      [false, true, false],
      [false, true, false],
      [false, false, false]
    ];
    let gridWithThreeNeighboursBottomLeft = [
      [false, true, true],
      [true, true, false],
      [false, true, true]
    ];
    let gridWithTwoNeighboursbottomRight = [
      [true, true, true],
      [true, false, true],
      [true, true, true]
    ];
    let gridWithFiveNeighboursbottom = [
      [false, false, false],
      [true, true, true],
      [true, true, true]
    ];

    expect(
      GameUtils.countLiveNeighbours(gridWithOneNeighbourTopLeft, 0, 0)
    ).toEqual(1);
    expect(
      GameUtils.countLiveNeighbours(gridWithTwoNeighboursTopright, 0, 2)
    ).toEqual(2);
    expect(
      GameUtils.countLiveNeighbours(gridWithThreeNeighboursBottomLeft, 2, 0)
    ).toEqual(3);
    expect(
      GameUtils.countLiveNeighbours(gridWithTwoNeighboursbottomRight, 2, 2)
    ).toEqual(2);
    expect(
      GameUtils.countLiveNeighbours(gridWithFiveNeighboursbottom, 2, 1)
    ).toEqual(5);
  });
});
