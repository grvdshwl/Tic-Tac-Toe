import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
`;
export const FooterText = styled.h1`
  font-family: "Comforter", cursive;
  letter-spacing: 5px;
  font-size: 2rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
