import styled from "styled-components";

export const StatusModalContainer = styled.div`
  position: absolute;
  width: 25vw;
  height: 30vh;
  z-index: 1;
  top: 30vh;
  left: calc(50% - 12.5vw);
  background-color: white;
  display: grid;
  place-items: center;

  @media only screen and (max-width: 600px) {
    width: 80vw;
    left: calc(50% - 40vw);
  }
`;

export const StatusModalText = styled.h1`
  text-align: center;
  font-family: "Comforter", cursive;
  letter-spacing: 5px;
`;
