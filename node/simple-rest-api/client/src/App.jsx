import React, { useState, useEffect, useMemo } from "react";

import Layout from "./components/Layout";
import { CharacterInput, InputContainer, SubmitButton } from "./components/CharacterInput";
import { HeroContainer, HeroDescription, HeroHeader } from "./components/Hero";
import { Quote, Author, QuoteContainer, Pagination } from "./components/Quote";

const DEFAULT_QUOTE = "Hmm, no words of wisdom of coolness yet...";

function App() {
  const [character, setCharacter] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [featuredQuoteIndex, setFeaturedQuoteIndex] = useState(null);

  const featuredQuote = useMemo(() => {
    return quotes[featuredQuoteIndex];
  }, [quotes, featuredQuoteIndex]);

  function handleInputChange(event) {
    setCharacter(event.target.value);
  }

  function goToPrevious() {
    const previousIndex = featuredQuoteIndex - 1;
    if (previousIndex <= 0) return;
    setFeaturedQuoteIndex(previousIndex);
  }

  function goToNext() {
    const numOfQuotes = quotes.length || 0;
    const nextIndex = featuredQuoteIndex + 1;

    if (nextIndex >= numOfQuotes) return;
    setFeaturedQuoteIndex(nextIndex);
  }

  async function getCharacterQuote() {
    if (!character) return;

    const response = await fetch(`http://localhost:4000/quote/character/${character}`);
    const quotesData = await response.json();

    setQuotes(quotesData.data);
    setFeaturedQuoteIndex(0);
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
          <Quote>{featuredQuote?.quote ?? DEFAULT_QUOTE}</Quote>
          <Author>
            {featuredQuote
              ? `${featuredQuote?.character} - ${featuredQuote?.anime}`
              : "Name - Show"}
          </Author>
        </Pagination>
      </QuoteContainer>
    </Layout>
  );
}

export default App;
