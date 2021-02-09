import styled from "styled-components";
import { fadeIn } from "../styles/animation";

export const Svg = styled.svg<{ size?: string }>`
  ${fadeIn()};
  width: ${(props) => (props.size ? props.size : "30px")};
  height: ${(props) => (props.size ? props.size : "30px")};
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
    transition: transform 0.1s ease;
  }
  @media screen and (max-width: 450px) {
    width: 25px;
    height: 25px;
  }
`;
