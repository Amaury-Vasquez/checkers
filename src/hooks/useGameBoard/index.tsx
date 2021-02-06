import { useEffect, useState } from "react";

import { SquareValues } from "../../interfaces";
export const useGameBoard = (boardDimension: number = 10) => {
  // Functions
  const initialBoard = () => {
    const tmpBoard: SquareValues[][] = [[]];
    for (
      let i = 0;
      i < boardDimension && tmpBoard.length < boardDimension;
      i++
    ) {
      if (!tmpBoard[i]) tmpBoard.push([]);
      for (
        let j = 0, color = i % 2 === 0;
        j < boardDimension;
        j++, color = !color
      )
        tmpBoard[i].push({
          x: j,
          y: i,
          whiteSquare: color,
          active: (i < 4 && !color) || (i > 5 && !color),
          piece: {
            whitePiece:
              i < 4 && !color ? true : i > 5 && !color ? false : undefined,
            queen: false,
          },

          optional: false,
          selected: false,
        });
    }
    return tmpBoard;
  };

  const markUpSquares = (
    board: SquareValues[][],
    square: SquareValues,
    value: boolean
  ) => {
    const { x, y, piece } = square;
    const { whitePiece } = piece;
    const upSquares: SquareValues[] = [];

    if (x - 1 >= 0 && y - 1 >= 0) {
      const left = board[y - 1][x - 1];
      if (!left.active) {
        left.optional = value;
        left.piece.whitePiece = whitePiece;
        upSquares.push(left);
      } else if (
        left.piece.whitePiece !== undefined &&
        left.piece.whitePiece !== whitePiece &&
        x - 2 >= 0 &&
        y - 2 >= 0 &&
        !board[y - 2][x - 2].active
      ) {
        board[y - 2][x - 2].optional = value;
        board[y - 2][x - 2].piece.whitePiece = value ? whitePiece : undefined;
        upSquares.push(board[y - 2][x - 2]);
      }
    }
    if (x + 1 < boardDimension && y - 1 >= 0) {
      const right = board[y - 1][x + 1];
      if (!right.active) {
        right.optional = value;
        right.piece.whitePiece = whitePiece;
        upSquares.push(right);
      } else if (
        right.piece.whitePiece !== undefined &&
        right.piece.whitePiece !== whitePiece &&
        x + 2 < boardDimension &&
        y - 2 >= 0 &&
        !board[y - 2][x + 2].active
      ) {
        board[y - 2][x + 2].optional = value;
        board[y - 2][x + 2].piece.whitePiece = value ? whitePiece : undefined;
        upSquares.push(board[y - 2][x + 2]);
      }
    }

    return upSquares;
  };

  const markDownSquares = (
    board: SquareValues[][],
    square: SquareValues,
    value: boolean
  ) => {
    const { x, y, piece } = square;
    const { whitePiece } = piece;
    const downSquares: SquareValues[] = [];

    if (x - 1 >= 0 && y + 1 < boardDimension) {
      const left = board[y + 1][x - 1];
      if (!left.active) {
        left.optional = value;
        left.piece.whitePiece = whitePiece;
        downSquares.push(left);
      } else if (
        left.piece.whitePiece !== undefined &&
        left.piece.whitePiece !== whitePiece &&
        x - 2 >= 0 &&
        y + 2 < boardDimension &&
        !board[y + 2][x - 2].active
      ) {
        board[y + 2][x - 2].optional = value;
        board[y + 2][x - 2].piece.whitePiece = value ? whitePiece : undefined;
        downSquares.push(board[y + 2][x - 2]);
      }
    }
    if (x + 1 < boardDimension && y + 1 < boardDimension) {
      const right = board[y + 1][x + 1];
      if (!right.active) {
        right.optional = value;
        right.piece.whitePiece = whitePiece;
        downSquares.push(right);
      } else if (
        right.piece.whitePiece !== undefined &&
        right.piece.whitePiece !== whitePiece &&
        x + 2 < boardDimension &&
        y + 2 < boardDimension &&
        !board[y + 2][x + 2].active
      ) {
        board[y + 2][x + 2].optional = value;
        board[y + 2][x + 2].piece.whitePiece = value ? whitePiece : undefined;
        downSquares.push(board[y + 2][x + 2]);
      }
    }

    return downSquares;
  };

  const setOptional = (
    board: SquareValues[][],
    square: SquareValues,
    value: boolean = true
  ) => {
    const { queen, whitePiece } = square.piece;
    let aux: SquareValues[] = [];
    if (queen)
      aux = markUpSquares(board, square, value).concat(
        markDownSquares(board, square, value)
      );
    else if (whitePiece)
      aux = aux.concat(markDownSquares(board, square, value));
    else aux = aux.concat(markUpSquares(board, square, value));
    return aux;
  };

  const move = (board: SquareValues[][], square: SquareValues) => {
    const { x, y } = square;
    if (prev) {
      const dest = prev.marked.find((item) => item.x === x && item.y === y);
      const { queen, whitePiece } = prev.touched.piece;
      if (dest) {
        prev.marked.forEach((item) => {
          board[item.y][item.x].optional = false;
          board[item.y][item.x].piece.whitePiece = undefined;
        });

        board[prev.touched.y][prev.touched.x].active = false;
        board[prev.touched.y][prev.touched.x].piece.whitePiece = undefined;
        board[prev.touched.y][prev.touched.x].piece.queen = false;
        board[prev.touched.y][prev.touched.x].selected = false;
        board[prev.touched.y][prev.touched.x].optional = false;

        board[dest.y][dest.x].piece.whitePiece = whitePiece;
        board[dest.y][dest.x].piece.queen = queen;
        board[dest.y][dest.x].active = true;
        board[dest.y][dest.x].selected = false;

        return true;
      }
    }
    return false;
  };
  const callback = (square: SquareValues) => {
    const { active } = square;
    const tmpBoard = [...gameBoard];
    if (active) {
      if (prev) setOptional(tmpBoard, prev.touched, false);
      const aux: SquareValues[] = setOptional(tmpBoard, square);
      setPrev({ touched: square, marked: aux });
    } else if (prev && move(tmpBoard, square)) {
      setOptional(tmpBoard, prev.touched);
      setPrev(undefined);
    }
    setGameBoard(tmpBoard);
  };

  // State

  const [gameBoard, setGameBoard] = useState<SquareValues[][]>(initialBoard());
  const [prev, setPrev] = useState<
    { touched: SquareValues; marked: Array<SquareValues> } | undefined
  >();

  // Effects

  // useEffect(() => {
  //   if (prev)
  //     console.log(prev.touched !== gameBoard[prev.touched.y][prev.touched.x]);
  // }, [prev]);
  return { gameBoard, callback };
};
