import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding-inline: 2rem;
`;

function SubmitButton({ children }) {
  return <Button>{children}</Button>;
}

export default SubmitButton;
