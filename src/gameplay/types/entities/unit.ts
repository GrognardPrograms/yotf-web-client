import { Entity } from "./entity";
import { Rotation } from "../../../utils/geometry/types/rotation";
import { Coordinate } from "../../../utils/geometry/types/coordinate";

export class Unit extends Entity {
  constructor(positionIn: Coordinate, rotationIn: Rotation) {
    super(positionIn, rotationIn);
  }
}