import React from "react";
import { ButtonStyled } from "./ButtonStyles";

function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

export default Button;
