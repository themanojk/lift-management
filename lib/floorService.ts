import { Floor, FloorDirection } from "../types";

// CURRENT floor should not be considered for now as case is not given when
// someone at floor 3 and keys are pressed which direction to choose first
export const decideFloorPath = (selectedFloors: Floor[]): number[] => {
  const path: number[] = [];

  const floorNumbers = selectedFloors.sort((a: Floor, b: Floor) =>
    a.floor < b.floor ? -1 : 0
  );

  console.log("Algo > floorNumbersSorted > ", floorNumbers);

  // go up in floors
  floorNumbers
    .filter((floor: Floor) => floor.direction === FloorDirection.UP)
    .forEach((floor: Floor) => {
      path.push(floor.floor);
    });

  // go down in floors
  floorNumbers
    .sort((a: Floor, b: Floor) => (a.floor > b.floor ? -1 : 0))
    .filter((floor: Floor) => floor.direction === FloorDirection.DOWN)
    .forEach((floor: Floor) => {
      path.push(floor.floor);
    });

  return path;
};
