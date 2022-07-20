import React from "react";
import styled from "styled-components";

const AuthorText = styled.p`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-size: 1.125rem;
  line-height: 180%;
`;

function Author({ children }) {
  return <AuthorText>{children}</AuthorText>;
}

export default Author;
