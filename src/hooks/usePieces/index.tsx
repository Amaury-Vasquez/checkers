import { useState } from "react";

import { SquareValues } from "../../interfaces";

export const usePieces = () => {
  const [whitePieces, setWhite] = useState<SquareValues[]>([]);
  return whitePieces;
};
