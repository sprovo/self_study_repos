import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;
`;

function InputContainer({ children }) {
  return <Container>{children}</Container>;
}

export default InputContainer;
