import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 75vw;
  height: 70vh;
  background-color: var(--light-gray);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: var(--shadow);
  padding: 10px;

  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`;
