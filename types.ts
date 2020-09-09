export type Floor = {
  floor: number;
  direction: FloorDirection;
};

export enum FloorDirection {
  UP = "up",
  DOWN = "down",
}

export const FLOORS = [6, 5, 4, 3, 2, 1, 0];

