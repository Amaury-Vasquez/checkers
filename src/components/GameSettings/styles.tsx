import styled from "styled-components";

export const Settings = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px;
`;

export const Form = styled.form`
  & > * {
    padding: 10px;
  }

  & > label:not(:first-child) {
    margin-top: 2vh;
  }
`;
export const TextInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 10px;
  height: 5vh;
  border-radius: 2px;
`;

export const TextLabel = styled.label`
  text-transform: capitalize;
  display: block;
  margin-bottom: 0.5vh;
  font-size: 14px;
`;

export const Radio = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: auto;
  & > input:not(:first-child) {
    margin-left: 3vw;
  }
`;

export const RadioInput = styled.input``;
export const RadioLabel = styled.label`
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  width: 30%;
  height: 5vh;
  justify-self: center;
  border: 1px solid black;
`;
