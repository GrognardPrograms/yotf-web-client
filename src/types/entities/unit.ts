import { Entity } from "./entity";
import { Rotation } from "../geometry/rotation";
import { Coordinate } from "../geometry/coordinate";

export class Unit extends Entity {
  constructor(positionIn: Coordinate, rotationIn: Rotation) {
    super(positionIn, rotationIn);
  }
}