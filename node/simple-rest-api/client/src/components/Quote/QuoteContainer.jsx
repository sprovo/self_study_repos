import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function QuoteContainer({ children }) {
  return <Container>{children}</Container>;
}

export default QuoteContainer;
