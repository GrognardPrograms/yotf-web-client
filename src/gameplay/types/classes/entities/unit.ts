import { Coordinate, Rotation } from "../../../../geometry";

import { Entity } from "./entity";

export class Unit extends Entity {
  constructor(positionIn: Coordinate, rotationIn: Rotation) {
    super(positionIn, rotationIn);
  }
}