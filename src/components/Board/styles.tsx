import styled from "styled-components";

export const GameBoard = styled.div<{ dimension: number }>`
  width: 35vw;
  height: 35vw;
  box-shadow: var(--shadow);
  box-sizing: border-box;
  border-radius: 5px;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.dimension}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.dimension}, 1fr)`};
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  & > div {
  }
`;
