export interface ControlStateReader {
  getForward: () => boolean;
  getRight: () => boolean;
  getBackward: () => boolean;
  getLeft: () => boolean;
}