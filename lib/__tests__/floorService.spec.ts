import { decideFloorPath } from "../floorService";
import { Floor, FloorDirection } from "../../types";

describe("FloorService", () => {
  it("should choose path 3 -> 4 -> 2", () => {
    const _exFloors: Floor[] = [
      { floor: 4, direction: FloorDirection.DOWN },
      { floor: 3, direction: FloorDirection.UP },
      { floor: 2, direction: FloorDirection.DOWN },
    ];

    expect(decideFloorPath(_exFloors)).toStrictEqual([3, 4, 2]);
  });

  it("should choose path 2 -> 5 -> 4 -> 2", () => {
    const _exFloors: Floor[] = [
      { floor: 2, direction: FloorDirection.UP },
      { floor: 2, direction: FloorDirection.DOWN },
      { floor: 5, direction: FloorDirection.UP },
      { floor: 4, direction: FloorDirection.DOWN },
    ];

    expect(decideFloorPath(_exFloors)).toStrictEqual([2, 5, 4, 2]);
  });
});
