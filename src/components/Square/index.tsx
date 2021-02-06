import React from "react";

import { SquareValues } from "../../interfaces";
import { SquareContainer } from "./styles";
import { WhiteToken, DarkToken } from "../../svg";
import { Piece } from "../Piece";

export const Square = (props: SquareValues) => {
  const { piece, active, whiteSquare, optional, selected, callback } = props;
  return (
    <SquareContainer
      optional={optional}
      whitePiece={piece.whitePiece}
      selected={selected}
      whiteSquare={whiteSquare}
      onClick={() => {
        if (callback) callback(props);
      }}
    >
      {active && piece.whitePiece !== undefined ? (
        <Piece cover={piece.whitePiece ? WhiteToken : DarkToken} />
      ) : (
        <div></div>
      )}
    </SquareContainer>
  );
};
