import { Entity } from "./entity";
import { Rotation } from "../../../geometry/types/rotation";
import { Coordinate } from "../../../geometry/types/coordinate";

export class Unit extends Entity {
  constructor(positionIn: Coordinate, rotationIn: Rotation) {
    super(positionIn, rotationIn);
  }
}