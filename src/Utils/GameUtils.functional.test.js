import GameUtils from "./GameUtils.js";

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
