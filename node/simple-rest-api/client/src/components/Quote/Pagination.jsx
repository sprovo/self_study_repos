import React from "react";
import styled from "styled-components";

const PaginationContent = styled.div`
  width: 64%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function Pagination({ goToPrevious, goToNext, children }) {
  return (
    <>
      <button type="button" onClick={goToPrevious}>
        Previous
      </button>
      <PaginationContent>{children}</PaginationContent>
      <button type="button" onClick={goToNext}>
        Next
      </button>
    </>
  );
}

export default Pagination;
