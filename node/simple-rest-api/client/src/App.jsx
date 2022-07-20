import React from "react";

import Layout from "./components/Layout";
import { CharacterInput, InputContainer, SubmitButton } from "./components/CharacterInput";
import { HeroContainer, HeroDescription, HeroHeader } from "./components/Hero";
import { Quote, Author, QuoteContainer } from "./components/Quote";

const DEFAULT_QUOTE = "Hmm, no words of wisdom of coolness yet...";

function App() {
  return (
    <Layout>
      <HeroContainer>
        <HeroHeader>Anime Character Quotes</HeroHeader>
        <HeroDescription>
          How it works: To get a quote, enter an anime characters name into the field below and then
          click "Get Quote".
        </HeroDescription>
      </HeroContainer>
      <InputContainer>
        <CharacterInput />
        <SubmitButton>Get Quote</SubmitButton>
      </InputContainer>
      <QuoteContainer>
        <Quote>{DEFAULT_QUOTE}</Quote>
        <Author>Name - Show</Author>
      </QuoteContainer>
    </Layout>
  );
}

export default App;
