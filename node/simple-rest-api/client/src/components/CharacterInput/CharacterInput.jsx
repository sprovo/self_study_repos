import React, { useState } from "react";
import styled from "styled-components";

const CharacterInputField = styled.input`
  width: 50%;
  padding: 1rem 1rem;
  font-family: "Lato", sans-serif;
`;

function CharacterInput() {
  return (
    <CharacterInputField name="character-name" placeholder="Enter an anime character's name..." />
  );
}

export default CharacterInput;
