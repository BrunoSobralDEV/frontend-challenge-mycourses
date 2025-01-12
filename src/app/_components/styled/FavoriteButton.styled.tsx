"use client";
import styled, { css } from "styled-components";

export const FavoriteWrapper = styled.div<{ $btnLarge: boolean }>`
  ${({ theme, $btnLarge }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${$btnLarge ? "114px" : "36px"};
    height: ${$btnLarge ? "31px" : "36px"};
    border-radius: ${$btnLarge ? "0.125rem" : "50%"};
    background-color: ${$btnLarge ? "#FFF" : "rgba(0, 0, 0, 0.35)"};
    border: ${$btnLarge &&
    `1px solid ${theme.colors["border-favorite-button"]}`};

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    transition: all 0.3s ease;

    img {
      height: ${$btnLarge && "14px"};
    }

    @media screen and (min-width: ${theme.screen.md}) {
      
    }
  `};
`;

export const FavoriteText = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
