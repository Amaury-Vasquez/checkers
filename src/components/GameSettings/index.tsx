import React from "react";

import {
  Settings,
  TextInput,
  TextLabel,
  Form,
  RadioInput,
  RadioLabel,
  Radio,
  SubmitButton,
} from "./styles";

export const GameSettings = () => {
  return (
    <Settings>
      <Form>
        <TextLabel htmlFor="name"> {"username"} </TextLabel>
        <TextInput placeholder="randomUser" name="name" value="" />
        <TextLabel htmlFor="name"> {"first turn"} </TextLabel>
        <Radio>
          <RadioInput type="radio" name="turn" value="white" />
          <RadioLabel htmlFor="turn"> {"white"} </RadioLabel>
          <RadioInput type="radio" name="turn" value="dark" />
          <RadioLabel htmlFor="turn"> {"dark"} </RadioLabel>
        </Radio>
        <SubmitButton> {"confirm"} </SubmitButton>
      </Form>
    </Settings>
  );
};
