import React from "react";
import TicTacBody from "../Body/Body";
import TicTacFooter from "../Footer/Footer";
import TicTacHeader from "../Header/Header";
import { TicTacContainer } from "./TicTacToe.styles";

const TicTacToe = () => {
  return (
    <TicTacContainer>
      <TicTacHeader />
      <TicTacBody />
      <TicTacFooter />
    </TicTacContainer>
  );
};

export default TicTacToe;
