import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { SquareValues } from "../../interfaces";

export const useGameBoard = () => {
  // const
  const boardDimension = 8;

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
          active: (i < 3 && !color) || (i > 4 && !color),
          piece: {
            whitePiece:
              i < 3 && !color ? true : i > 4 && !color ? false : undefined,
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
    // Function used to move pieces in the board, returns 1 if there is a
    // piece capture and piece move, 0 if theres is a piece move, -1 if nothing happens

    if (prev) {
      const { x, y } = square;
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
        board[dest.y][dest.x].piece.queen =
          (dest.y === 0 && !whitePiece) ||
          (dest.y === boardDimension - 1 && whitePiece)
            ? true
            : queen;
        board[dest.y][dest.x].active = true;
        board[dest.y][dest.x].selected = false;

        const sumx = dest.x - prev.touched.x,
          sumy = dest.y - prev.touched.y;
        if (Math.abs(sumx) > 1 && Math.abs(sumy) > 1) {
          const i = sumy > 0 ? prev.touched.y + 1 : prev.touched.y - 1,
            j = sumx > 0 ? prev.touched.x + 1 : prev.touched.x - 1,
            aux = board[i][j];
          aux.active = false;
          aux.piece.whitePiece = undefined;
          aux.piece.queen = false;
          return 1;
        }
        return 0;
      }
    }
    return -1;
  };

  const callback = (square: SquareValues) => {
    const { active } = square;
    const tmpBoard = [...gameBoard];
    if (active && square.piece.whitePiece === turn) {
      if (prev) setOptional(tmpBoard, prev.touched, false);
      const aux: SquareValues[] = setOptional(tmpBoard, square);
      setPrev({ touched: square, marked: aux });
    } else if (prev && prev.touched.piece.whitePiece === turn) {
      const capture = move(tmpBoard, square);
      if (capture >= 0) {
        if (capture !== 1) setTurn(!turn);
        else {
          if (turn) setDarkCount(() => darkCount + 1);
          else setWhiteCount(() => whiteCount + 1);
        }
        setOptional(tmpBoard, prev.touched);
        setPrev(undefined);
      }
    }
    setGameBoard(tmpBoard);
  };

  // State

  const [reset, setReset] = useState(false);
  const [gameBoard, setGameBoard] = useState<SquareValues[][]>(initialBoard());
  const [turn, setTurn] = useState(true);
  // turn is true when is whitePieces turn, false when darkPieces turn
  const [whiteCount, setWhiteCount] = useState(0);
  // counts whitePieces captured
  const [darkCount, setDarkCount] = useState(0);
  // counts darkPieces captured
  const [prev, setPrev] = useState<
    { touched: SquareValues; marked: Array<SquareValues> } | undefined
  >();

  // Effects

  useEffect(() => {
    if (whiteCount === 20 || darkCount === 20) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Congrats ${
          whiteCount === 20 ? "white pieces" : "dark pieces"
        } player, you had won`,
        showConfirmButton: true,
        timer: 3000,
      });
    }
  }, [whiteCount, darkCount]);

  useEffect(() => {
    if (reset) {
      setReset(false);
      setGameBoard(initialBoard());
      setWhiteCount(0);
      setDarkCount(0);
      setPrev(undefined);
      setTurn(true);
    }
  }, [
    reset,
    setReset,
    setGameBoard,
    setWhiteCount,
    setDarkCount,
    setPrev,
    setTurn,
  ]);
  return { gameBoard, callback, setReset, boardDimension };
};
