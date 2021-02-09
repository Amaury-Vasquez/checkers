import React from "react";

import { Container, Content } from "./styles";
import { Board } from "../Board";
import { useGameBoard } from "../../hooks/useGameBoard";
import { Panel } from "../Panel";

export const Game = () => {
  const { gameBoard, callback, boardDimension } = useGameBoard();
  return (
    <Container>
      <Content>
        <Board
          callback={callback}
          gameBoard={gameBoard}
          boardDimension={boardDimension}
        />
        <Panel />
      </Content>
    </Container>
  );
};
