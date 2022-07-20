import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  font-family: "Comic Neue", cursive;
  font-size: 5rem;
`;

function HeroHeader({ children }) {
  return <Header>{children}</Header>;
}

export default HeroHeader;
