import React from "react";

import { StatusModalContainer, StatusModalText } from "./StatusModal.styles";

const StatusModal = ({ message }) => {
  return (
    <StatusModalContainer>
      <StatusModalText>{message}</StatusModalText>
    </StatusModalContainer>
  );
};

export default StatusModal;
