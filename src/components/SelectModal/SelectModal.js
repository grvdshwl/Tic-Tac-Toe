import React from "react";
import {
  SelectButton,
  SelectButtonWrapper,
  SelectModalContainer,
  SelectText,
} from "./SelectModal.styles";

const SelectModal = ({ onClick }) => {
  return (
    <SelectModalContainer>
      <SelectText>Select Side</SelectText>

      <SelectButtonWrapper>
        <SelectButton onClick={onClick}>X</SelectButton>
        <SelectButton onClick={onClick}>O</SelectButton>
      </SelectButtonWrapper>
    </SelectModalContainer>
  );
};

export default SelectModal;
