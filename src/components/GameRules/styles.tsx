import styled from "styled-components";

export const Rules = styled.div`
  height: 100%;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  padding: 30px;
  & > h3 {
    font-weight: 500;
    margin-bottom: 1vh;
    font-style: italic;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  text-transform: capitalize;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 2vh;
`;
