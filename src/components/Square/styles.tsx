import styled from "styled-components";

export const SquareContainer = styled.div<{
  whiteSquare: boolean;
  whitePiece: boolean | undefined;
  selected: boolean;
  optional: boolean;
}>`
  background-color: var(--dark-square);
  opacity: ${(props) => (props.selected ? "0.5" : "1")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.whiteSquare ? "var(--white-square)" : "var(--dark-square)"};
  ${(props) =>
    props.optional
      ? `& > div {
    height: 30%;
    width: 30%;
    border-radius: 50%;
    background-color: ${
      props.whitePiece !== undefined
        ? props.whitePiece
          ? "var(--rgba-dark-blue)"
          : "var(--rgba-red);"
        : null
    }
  }`
      : null}
`;
