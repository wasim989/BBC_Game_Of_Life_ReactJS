import React from "react";
import GameUtils from "./GameUtils.js";
import { AssertionError } from "assert";

describe("Unit Tests", function() {
  test("deepCopyObject function", () => {
    let testObj = {
      numA: 1,
      stringA: "hello",
      nestedObj: { nVal1: 1, nVal2: 2, nval3: "hello again" }
    };
    expect(GameUtils.deepCopyObject(testObj)).toStrictEqual(testObj);
  });

  test("createRandGrid function", () => {
    expect(GameUtils.createRandGrid(3, 3)).not.toEqual(
      GameUtils.createRandGrid(3, 3)
    );
  });

  test("changeCellState function", () => {
    let emptyGrid = Array(3)
      .fill()
      .map(() => Array(3).fill(false));

    let clickedState01 = [
      [false, true, false],
      [false, false, false],
      [false, false, false]
    ];

    let clickedState02 = [
      [false, true, true],
      [false, false, false],
      [false, false, false]
    ];

    let clickedState22 = [
      [false, true, true],
      [false, false, false],
      [false, false, true]
    ];

    let clickedState22B = [
      [false, true, true],
      [false, false, false],
      [false, false, false]
    ];

    expect(GameUtils.changeCellState(emptyGrid, 0, 1)).toStrictEqual(
      clickedState01
    );
    expect(GameUtils.changeCellState(clickedState01, 0, 2)).toStrictEqual(
      clickedState02
    );
    expect(GameUtils.changeCellState(clickedState02, 2, 2)).toStrictEqual(
      clickedState22
    );
    expect(GameUtils.changeCellState(clickedState22, 2, 2)).toStrictEqual(
      clickedState22B
    );
  });

  test("createEmptyGrid function", () => {
    expect(GameUtils.createEmptyGrid(3, 5)).toHaveLength(3);
    expect(GameUtils.createEmptyGrid(3, 5)[1]).toHaveLength(5);
  });

  test("checkTopNeighbour function", () => {
    let gridWithTopNeighbour = [
      [false, true, false],
      [false, false, false],
      [false, false, false]
    ];
    let gridWithoutTopNeighbour = [
      [true, false, true],
      [true, true, true],
      [true, true, true]
    ];

    expect(
      GameUtils.checkTopNeighbour(gridWithTopNeighbour, 1, 1)
    ).toBeTruthy();

    expect(
      GameUtils.checkTopNeighbour(gridWithoutTopNeighbour, 1, 1)
    ).toBeFalsy();
  });

  test("checktopLeftNeighbour function", () => {
    let gridWithTopLeftNeighbour = [
      [true, false, false],
      [false, false, false],
      [false, false, false]
    ];
    let gridWithoutTopLeftNeighbour = [
      [false, true, true],
      [true, true, true],
      [true, true, true]
    ];

    expect(
      GameUtils.checkTopLeftNeighbour(gridWithTopLeftNeighbour, 1, 1)
    ).toBeTruthy();

    expect(
      GameUtils.checkTopLeftNeighbour(gridWithoutTopLeftNeighbour, 1, 1)
    ).toBeFalsy();
  });

  test("checkTopRightNeighbour function", () => {
    let gridWithTopRightNeighbour = [
      [false, false, true],
      [false, false, false],
      [false, false, false]
    ];
    let gridWithoutTopRightNeighbour = [
      [true, true, false],
      [true, true, true],
      [true, true, true]
    ];

    expect(
      GameUtils.checkTopRightNeighbour(gridWithTopRightNeighbour, 1, 1)
    ).toBeTruthy();

    expect(
      GameUtils.checkTopRightNeighbour(gridWithoutTopRightNeighbour, 1, 1)
    ).toBeFalsy();
  });

  test("checkRightNeighbour function", () => {
    let gridWithRightNeighbour = [
      [false, false, false],
      [false, false, true],
      [false, false, false]
    ];
    let gridWithoutRightNeighbour = [
      [true, true, true],
      [true, true, false],
      [true, true, true]
    ];

    expect(
      GameUtils.checkRightNeighbour(gridWithRightNeighbour, 1, 1)
    ).toBeTruthy();

    expect(
      GameUtils.checkRightNeighbour(gridWithoutRightNeighbour, 1, 1)
    ).toBeFalsy();
  });

  test("checkLeftNeighbour  function", () => {
    let gridWithLeftNeighbour = [
      [false, false, false],
      [true, false, false],
      [false, false, false]
    ];
    let gridWithoutLeftNeighbour = [
      [true, true, true],
      [false, true, true],
      [true, true, true]
    ];

    expect(
      GameUtils.checkLeftNeighbour(gridWithLeftNeighbour, 1, 1)
    ).toBeTruthy();

    expect(
      GameUtils.checkLeftNeighbour(gridWithoutLeftNeighbour, 1, 1)
    ).toBeFalsy();
  });

  test("checkBottomNeighbour function", () => {
    let gridWithBottomNeighbour = [
      [false, false, false],
      [false, false, false],
      [false, true, false]
    ];
    let gridWithoutBottomNeighbour = [
      [true, true, true],
      [true, true, true],
      [true, false, true]
    ];

    expect(
      GameUtils.checkBottomNeighbour(gridWithBottomNeighbour, 1, 1)
    ).toBeTruthy();

    expect(
      GameUtils.checkBottomNeighbour(gridWithoutBottomNeighbour, 1, 1)
    ).toBeFalsy();
  });

  test("checkBottomLeftNeighbour function", () => {
    let gridWithBottomLeftNeighbour = [
      [false, false, false],
      [false, false, false],
      [true, false, false]
    ];
    let gridWithoutBottomLeftNeighbour = [
      [true, true, true],
      [true, true, true],
      [false, true, true]
    ];

    expect(
      GameUtils.checkBottomLeftNeighbour(gridWithBottomLeftNeighbour, 1, 1)
    ).toBeTruthy();

    expect(
      GameUtils.checkBottomLeftNeighbour(gridWithoutBottomLeftNeighbour, 1, 1)
    ).toBeFalsy();
  });

  test("checkBottomRightNeighbour function", () => {
    let gridWithBottomRightNeighbour = [
      [false, false, false],
      [false, false, false],
      [false, false, true]
    ];
    let gridWithoutBottomRightNeighbour = [
      [true, true, true],
      [true, true, true],
      [true, true, false]
    ];

    expect(
      GameUtils.checkBottomRightNeighbour(gridWithBottomRightNeighbour, 1, 1)
    ).toBeTruthy();

    expect(
      GameUtils.checkBottomRightNeighbour(gridWithoutBottomRightNeighbour, 1, 1)
    ).toBeFalsy();
  });
});

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

describe("Functional (Scenario) Tests", function() {
  test("Scenario 0 - no interactions", () => {
    let emptyGrid = Array(3)
      .fill()
      .map(() => Array(3).fill(false));

    expect(GameUtils.generate(emptyGrid)).toStrictEqual(emptyGrid);
  });

  test("Scenario 1 - underpopulation", () => {
    let oneNeighbourA = [
      [true, false, false],
      [true, false, false],
      [false, false, false]
    ];
    let oneNeighbourB = [
      [false, true, false],
      [false, true, false],
      [false, false, false]
    ];
    let oneNeighbourC = [
      [true, false, false],
      [false, false, false],
      [false, false, true]
    ];

    let emptyGrid = Array(3)
      .fill()
      .map(() => Array(3).fill(false));

    expect(GameUtils.generate(oneNeighbourA)).toStrictEqual(emptyGrid);
    expect(GameUtils.generate(oneNeighbourB)).toStrictEqual(emptyGrid);
    expect(GameUtils.generate(oneNeighbourC)).toStrictEqual(emptyGrid);
  });

  test("Scenario 2 & 5 - overcrowding & grid with no live cells", () => {
    let fourNeighbours = [
      [false, true, false],
      [true, true, true],
      [false, true, false]
    ];

    let fourNeighboursResult = [
      [true, true, true],
      [true, false, true],
      [true, true, true]
    ];

    let emptyGrid = Array(3)
      .fill()
      .map(() => Array(3).fill(false));
    // console.log(GameUtils.generate(fourNeighbours));
    expect(GameUtils.generate(fourNeighbours)).toStrictEqual(
      fourNeighboursResult
    );
  });

  test("Scenario 3 - survival", () => {
    let block = [
      [true, true, false],
      [true, true, false],
      [false, false, false]
    ];

    let tub = [[false, true, false], [true, false, true], [false, true, false]];

    let emptyGrid = Array(3)
      .fill()
      .map(() => Array(3).fill(false));
    // console.log(GameUtils.generate(fourNeighbours));
    expect(GameUtils.generate(block)).toStrictEqual(block);
    expect(GameUtils.generate(tub)).toStrictEqual(tub);
  });

  test("Scenario 4 & 6 - creation of life &  Expected outcome for seeded grid ", () => {
    let blinkerA = [
      [false, true, false],
      [false, true, false],
      [false, true, false]
    ];

    let blinkerB = [
      [false, false, false],
      [true, true, true],
      [false, false, false]
    ];

    let emptyGrid = Array(3)
      .fill()
      .map(() => Array(3).fill(false));
    // console.log(GameUtils.generate(fourNeighbours));
    expect(GameUtils.generate(blinkerA)).toStrictEqual(blinkerB);
    expect(GameUtils.generate(blinkerB)).toStrictEqual(blinkerA);
  });
});
