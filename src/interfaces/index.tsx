export interface PieceValues {
  whitePiece: boolean | undefined;
  queen: boolean;
}

export interface SquareValues {
  x: number;
  y: number;
  whiteSquare: boolean;
  active: boolean;
  optional: boolean;
  selected: boolean;
  piece: PieceValues;
  callback?: Function;
}
