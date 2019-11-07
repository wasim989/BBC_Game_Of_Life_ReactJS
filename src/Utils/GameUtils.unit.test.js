import GameUtils from "./GameUtils.js";

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
