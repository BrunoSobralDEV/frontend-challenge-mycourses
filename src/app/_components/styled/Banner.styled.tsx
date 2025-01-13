"use client";
import styled, { css } from "styled-components";

export const Section = styled.section`
  background-image: url('/images/banner.png');
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  aspect-ratio: 375/460;

  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    background-image: url('/images/banner-desktop.svg');
    background-position: center;
    background-size: cover;
    
    max-height: 540px;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 101px;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    left: 44px;
    bottom: 61px;

    gap: 97px;
  }
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors["text-secondary"]};
    max-width: 300px;
    font-size: ${theme.fontSizes["2xl"]};
    font-weight: 700;
    line-height: 1.5;
    
  `}
`;  

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors["text-secondary"]};

    width: 192px;
    height: 52px;
    
    font-size: ${theme.fontSizes.md};
    font-weight: 700;
  `}
`;