"use client";
import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 24px;
  min-height: 301px;

  h1 {
    margin-bottom: 64px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 48px 60px;
  }
`;
export const FavoritesWrapper = styled.div<{ $empty: boolean; }>`
  display: ${(props) => (props.$empty ? "flex" : "grid")};
  
  grid-template-columns: ${(props) =>
    props.$empty ? "none" : "repeat(auto-fit, minmax(250px, 315px))"};
  gap: 20px;
  text-align: center;
  
  align-items: ${(props) => (props.$empty ? "center" : "initial")};
  justify-content: ${(props) => (props.$empty ? "center" : "initial")};
  flex-direction: ${(props) => (props.$empty ? "column" : "initial")};
  
`;

export const FavoritesEmpty = styled.section`
`;