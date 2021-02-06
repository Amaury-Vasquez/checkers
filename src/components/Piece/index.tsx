import React, { ElementType } from "react";

export const Piece = (props: { cover: ElementType }) => {
  return <props.cover size="40px" />;
};
