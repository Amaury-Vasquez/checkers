import styled from "styled-components";

export const NavigationMenu = styled.div<{ len: number }>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.len}, 1fr);`};
`;

export const Tab = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    `var(--${props.active ? "light-gray" : "gray"})`};
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  & > svg {
    font-size: 20px;
    margin-right: 1vw;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const TabName = styled.span`
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
`;
