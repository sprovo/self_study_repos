import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding-inline: 2rem;
`;

function SubmitButton({ handleClick, children }) {
  return <Button type="button" onClick={handleClick}>{children}</Button>;
}

export default SubmitButton;
