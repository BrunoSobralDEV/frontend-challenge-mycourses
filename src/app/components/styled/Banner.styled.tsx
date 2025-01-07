"use client";
import styled from "styled-components";

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
    /* min-width:952px; To-do -> apply only bg-image*/
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
  color: ${({ theme}) => theme.colors["text-secondary"]};
  max-width: 300px;

  font-size: ${({ theme}) => theme.fontSizes["2xl"]};
  font-weight: 700;
  line-height: 1.5;
`;  

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors["text-secondary"]};

  width: 192px;
  height: 52px;
  
  font-size: ${({ theme}) => theme.fontSizes.md};
  font-weight: 700;
`;