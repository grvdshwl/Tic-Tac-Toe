import React, { useContext } from "react";
import { StateContext } from "../../context/state.context";
import {
  ScoreBoardContainer,
  ScoreBox,
  ScoreContent,
} from "./ScoreBoard.styles";

const ScoreBoard = () => {
  const { playerWins, computerWins } = useContext(StateContext);
  return (
    <ScoreBoardContainer>
      <ScoreBox>
        <ScoreContent>Player</ScoreContent>
        <ScoreContent>{playerWins}</ScoreContent>
      </ScoreBox>
      <ScoreBox>
        <ScoreContent>Computer</ScoreContent>
        <ScoreContent>{computerWins}</ScoreContent>
      </ScoreBox>
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;
