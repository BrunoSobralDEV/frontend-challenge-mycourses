"use client";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Section = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
`;

export const Banner = styled.div`
  margin-bottom: 24px;
  img {
    max-height: 540px;
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    img {
      min-height: 540px;
    }
    margin-bottom: 48px;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 0 20px;

    @media screen and (min-width: ${theme.screen.md}) {
      display: grid;
      grid-template-areas: "description button";

      padding: 0 60px;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    grid-area: button;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    padding: 14px 16px;
    width: 100%;
    height: 31px;
    margin-bottom: 16px;

    background-color: ${theme.colors["bg-button-favorite"]};
    color: ${theme.colors["text-course-page"]};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: none;
    cursor: pointer;

    font-family: var(--font-inter);
    font-size: ${theme.fontSizes.md};
    font-weight: 700;

    img {
      filter: invert(1);
      transition: all 0.5s ease;
    }

    transition: all 0.5s ease;
    @media screen and (min-width: ${theme.screen.md}) {
      width: 114px;
      height: 31px;

      &:hover {
        ${({ theme }) => css`
          background-color: ${theme.colors.primary};
          color: white;
        `}
        img {
          filter: invert(0);
        }
      }
    }
  `}
`;

export const Content = styled.div`
  grid-area: description;
  margin-bottom: 24px;

  h1 {
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

export const Share = styled(Link)`
  background-color: ${({ theme }) => theme.colors["bg-button-share"]};
  width: 56px;
  height: auto;
  padding: 16px;
  border-radius: 50%;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;

  position: absolute;
  bottom: -24px;
  right: 20px;

  img {
    transition: all 0.5s ease;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    right: 68px;
    &:hover {
      ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        color: white;
      `}
      img {
        filter: invert(1);
      }
    }
  }
`;
