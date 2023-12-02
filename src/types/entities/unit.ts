import { Rotation } from "../geometry/rotation";
import { Coordinate } from "../geometry/coordinate";
import { Entity } from "./entity";

export class Unit extends Entity {
  constructor(positionIn: Coordinate, rotationIn: Rotation) {
    super(positionIn, rotationIn);
  }
}