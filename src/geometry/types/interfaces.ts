export interface CoordinateReader {
  getX: () => number;
  getY: () => number;
  getZ: () => number;
}

export interface RotationReader { 
  getXRtn: () => number;
  getYRtn: () => number;
  getZRtn: () => number;
}