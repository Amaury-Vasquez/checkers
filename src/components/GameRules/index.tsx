import React from "react";

import { Rules, Subtitle, Text, Title } from "./styles";

export const GameRules = () => {
  return (
    <Rules>
      <Title> {"How to play"} </Title>
      <Text>
        {
          "On your turn, move any of your checkers by the movement rules described below, after you move one checker your turn is over. The game continues with players alternating turns. "
        }
      </Text>
      <Subtitle> {"movement rules"} </Subtitle>
      <Text>
        {
          "Checkers can move diagonally forward, towards your opponent's side of the board, if a checker becomes a king, it can move diagonally forwards or backwards."
        }{" "}
        <br />
        {
          "Move your checker one space diagonally to an open adjacent square; or jump one or more checkers diagonally to an open square adjacent to the checker you jumped."
        }{" "}
        <br />
        {"When you jump an opponent's checker you capture it."} <br />
        {
          "If all squares adjacent to your checker are occupied, your checker is blocked and cannot move."
        }
      </Text>
      <Subtitle> {"Capturing an opponent's checker"} </Subtitle>
      <Text>
        {" "}
        {
          "If you jump an opponent's checker, you capture it. Remove it from play afterwards. If you can jump an opponents checker you HAVE TO."
        }{" "}
      </Text>
      <Subtitle> {'Becoming a "King"'} </Subtitle>
      <Text>
        {
          "As soon as one of your checkers reaches the first row on your opponent's side of the gameboard, it becomes a King. A King checker can move forward or backward on the gameboard"
        }
      </Text>
      <Title>{"how to win"}</Title>
      <Text>
        {
          "The first player to capture all opposing checkers from the gameboard wins the game, also if one player can't move automatically loses."
        }
      </Text>
    </Rules>
  );
};
