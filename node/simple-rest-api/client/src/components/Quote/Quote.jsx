import React from "react";
import styled from "styled-components";

const QuoteString = styled.blockquote`
  width: 48%;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 1.125rem;
  line-height: 180%;
`;

function Quote({ children }) {
  return <QuoteString>{`"${children}"`}</QuoteString>;
}

export default Quote;
