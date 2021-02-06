import React from "react";

import { Container } from "./styles";
import { Board } from "../Board";
import { useGameBoard } from "../../hooks/useGameBoard";

export const Game = () => {
  const boardDimension = 10;
  const { gameBoard, callback } = useGameBoard(boardDimension);
  return (
    <Container>
      <Board
        callback={callback}
        gameBoard={gameBoard}
        boardDimension={boardDimension}
      />
    </Container>
  );
};
