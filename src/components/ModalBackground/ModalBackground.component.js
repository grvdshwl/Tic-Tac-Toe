import React from "react";
import { ModalBackgroundContainer } from "./ModalBackground.styles";

const ModalBackground = (props) => {
  const { children, ...otherProps } = props;
  return (
    <ModalBackgroundContainer {...otherProps}>
      {children}
    </ModalBackgroundContainer>
  );
};

export default ModalBackground;
