import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: "Lato", sans-serif;
  line-height: 180%;
  font-style: italic;
`;

function HeroDescription({ children }) {
  return <Text>{children}</Text>;
}

export default HeroDescription;
