import React, { useState, useEffect } from "react";

import Layout from "./components/Layout";
import { CharacterInput, InputContainer, SubmitButton } from "./components/CharacterInput";
import { HeroContainer, HeroDescription, HeroHeader } from "./components/Hero";
import { Quote, Author, QuoteContainer, Pagination } from "./components/Quote";

const DEFAULT_QUOTE = "Hmm, no words of wisdom of coolness yet...";

function App() {
  const [character, setCharacter] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [featuredQuote, setFeaturedQuote] = useState(null);

  function handleInputChange(event) {
    setCharacter(event.target.value);
  }

  function goToPrevious() {
    const { index } = featuredQuote;
    const previousIndex = index - 1;

    if (previousIndex <= 0) return;
    setFeaturedQuote({ index: previousIndex, data: quotes[previousIndex] });
  }

  function goToNext() {
    const { index } = featuredQuote;
    const nextIndex = index + 1;

    if (nextIndex >= quotes.length) return;
    setFeaturedQuote({ index: nextIndex, data: quotes[nextIndex] });
  }

  async function getCharacterQuote() {
    if (!character) return;

    const response = await fetch(`http://localhost:4000/quote/character/${character}`);
    const quotesData = await response.json();

    setQuotes(quotesData.data);
    setFeaturedQuote({ index: 0, data: quotesData.data[0] });
  }

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
        <CharacterInput characterName={character} handleInputChange={handleInputChange} />
        <SubmitButton handleClick={getCharacterQuote}>Get Quote</SubmitButton>
      </InputContainer>
      <QuoteContainer>
        <Pagination goToPrevious={goToPrevious} goToNext={goToNext}>
          <Quote>{featuredQuote?.data?.quote ?? DEFAULT_QUOTE}</Quote>
          <Author>
            {featuredQuote
              ? `${featuredQuote?.data?.character} - ${featuredQuote?.data?.anime}`
              : "Name - Show"}
          </Author>
        </Pagination>
      </QuoteContainer>
    </Layout>
  );
}

export default App;
