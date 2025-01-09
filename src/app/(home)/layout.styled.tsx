"use client";
import styled from "styled-components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 20px;
  font-family: var(--font-roboto_condensed);

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 20px 60px;
  }
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  outline: revert;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: var(--font-quattrocento);
  color: ${({ theme }) => theme.colors["text-footer"]};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .social-media {
    display: flex;
    gap: 1.25rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .languages {
    display: flex;
    gap: 1.25rem;
  }

  .languages span:first-child {
    position: relative;
  }

  .languages span:first-child::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 1.125rem;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 63px 60px;

    .details {
      flex-direction: row;
      gap: 60px;
    }
  }
`;

export { Header, Button, Footer };
