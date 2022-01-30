import styled from "styled-components";

export const SelectModalContainer = styled.div`
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

export const SelectText = styled.h1`
  text-align: center;
  font-family: "Comforter", cursive;
  letter-spacing: 5px;
`;

export const SelectButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const SelectButton = styled.div`
  padding: 15px 30px;
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 1s ease;
  opacity: 1;
  font-family: "Comforter", cursive;

  &:hover {
    opacity: 0.7;
  }
`;
