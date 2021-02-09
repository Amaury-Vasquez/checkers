import styled from "styled-components";

export const PanelContainer = styled.div`
  width: 30vw;
  height: 60vh;
  display: grid;
  grid-template-rows: 1fr 7fr;
  background-color: var(--light-gray);
  border: 1px solid var(--gray);
  @media screen and (max-width: 450px) {
    width: 100vw;
    height: auto;
    display: block;
    border: none;
    & > :first-child {
      margin-top: 3vh;
    }
  }
`;
