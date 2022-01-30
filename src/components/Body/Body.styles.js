import styled from "styled-components";

export const BodyContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const BodyBox = styled.div`
  width: 30vw;
  height: 70vh;
  border: 10px solid #d2691e;
  background-color: #1a1a1a;
  border-radius: 5px;
  box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.8);
  @media only screen and (max-width: 600px) {
    width: 90vw;
    height: 60vh;
  }
`;

export const Table = styled.table`
  display: grid;
  place-items: center;
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr`
  display: flex;
  justify-content: space-around;
  border-top: 3px solid #2e2e2e;
  &:nth-child(1) {
    border-top: none;
  }
  &:nth-child(3) {
    border-bottom: none;
  }
`;
export const Cell = styled.td`
  border-left: 3px solid #2e2e2e;
  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:nth-child(1) {
    border-left: none;
  }
  &:nth-child(3) {
    border-right: none;
  }
  color: white;
  font-size: 40px;
  font-family: "Comforter", cursive;
`;
