import React, { useContext } from "react";
import { StateContext } from "../../context/state.context";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import {
  BodyBox,
  BodyContainer,
  Cell,
  Row,
  Table,
  TableBody,
} from "./Body.styles";

const TicTacBody = () => {
  const { cells, handleCellClick } = useContext(StateContext);

  return (
    <BodyContainer>
      <BodyBox>
        <ScoreBoard />
        <Table>
          <TableBody>
            <Row>
              <Cell onClick={handleCellClick} id="0">
                {cells[0]}
              </Cell>
              <Cell onClick={handleCellClick} id="1">
                {cells[1]}
              </Cell>
              <Cell onClick={handleCellClick} id="2">
                {cells[2]}
              </Cell>
            </Row>
            <Row>
              <Cell onClick={handleCellClick} id="3">
                {cells[3]}
              </Cell>
              <Cell onClick={handleCellClick} id="4">
                {cells[4]}
              </Cell>
              <Cell onClick={handleCellClick} id="5">
                {cells[5]}
              </Cell>
            </Row>
            <Row>
              <Cell onClick={handleCellClick} id="6">
                {cells[6]}
              </Cell>
              <Cell onClick={handleCellClick} id="7">
                {cells[7]}
              </Cell>
              <Cell onClick={handleCellClick} id="8">
                {cells[8]}
              </Cell>
            </Row>
          </TableBody>
        </Table>
      </BodyBox>
    </BodyContainer>
  );
};

export default TicTacBody;
