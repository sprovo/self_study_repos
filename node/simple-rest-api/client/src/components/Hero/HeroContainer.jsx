import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function HeroContainer({ children }) {
  return <Container>{children}</Container>;
}

export default HeroContainer;
