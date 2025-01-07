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
  color: ${({ theme}) => theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .social-media {
    display: flex;
    gap: 1.25rem;
  }
  
  .links {
    display: flex;
    gap: 1.25rem;
  }

  .links span:first-child {
    position: relative;
  }

  .links span:first-child::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 1.125rem;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

`

export { Header, Button, Footer };
