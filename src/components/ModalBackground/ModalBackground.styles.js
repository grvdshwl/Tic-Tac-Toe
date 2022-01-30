import styled from "styled-components";

export const ModalBackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 1.2s ease;
  opacity: 1;
  ${({ hide }) => !!hide && "opacity:0; z-index:-1;"}
`;
