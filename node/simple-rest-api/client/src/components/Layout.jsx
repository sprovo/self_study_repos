import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

function Layout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;
