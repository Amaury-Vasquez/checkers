import React, { ElementType, useEffect } from "react";

import { SquareValues } from "../../interfaces";
import { Square } from "../Square";
import { GameBoard } from "./styles";

export const Board = (props: {
  boardDimension: number;
  gameBoard: SquareValues[][];
  callback?: Function;
}) => {
  const { boardDimension, gameBoard, callback } = props;
  const mapBoard = () => {
    let tmpBoard: JSX.Element[] = [];
    gameBoard.forEach((row) =>
      row.forEach((square) => {
        const { active, optional, selected, x, y, whiteSquare, piece } = square;
        tmpBoard.push(
          <Square
            active={active}
            callback={callback && !whiteSquare ? callback : undefined}
            optional={optional}
            selected={selected}
            piece={piece}
            x={x}
            y={y}
            whiteSquare={whiteSquare}
            key={`${x}+${y}+${whiteSquare}+${piece.whitePiece}+${selected}+${active}+${optional}+${piece.queen}`}
          />
        );
      })
    );
    return tmpBoard;
  };

  return <GameBoard dimension={boardDimension}>{mapBoard()}</GameBoard>;
};
