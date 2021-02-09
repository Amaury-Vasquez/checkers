import styled from "styled-components";

export const GameBoard = styled.div<{ dimension: number }>`
  width: 30vw;
  height: 30vw;
  box-sizing: border-box;
  border: 1px solid var(--gray);
  border-radius: 5px;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.dimension}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.dimension}, 1fr)`};
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 450px) {
    width: 100vw;
    height: 100vw;
    border: none;
  }
`;
