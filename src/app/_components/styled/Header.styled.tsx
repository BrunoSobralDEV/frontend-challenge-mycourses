"use client";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 20px;
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: 16px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 20px 60px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    img {
      width: 76px;
      height: 30px;
    }
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchLink = styled(Link)`
  all: unset;
  cursor: pointer;
  outline: revert;

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  img {
    cursor: pointer;
  }
`;

export const LinksWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const SignUpLink = styled(SearchLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`;

export const LoginLink = styled(SignUpLink)`
  ${({ theme }) => css`
    @media screen and (min-width: ${theme.screen.md}) {
      background-color: ${theme.colors.primary};
      color: #fff;
      padding: 3px 20px;
    }
  `};
`;