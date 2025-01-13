"use client";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${theme.colors.background};
    user-select: none;
  `};
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #5a189a;
  margin: 1rem 0;
`;

export const Message = styled.p`
  font-size: 1.3rem;
  color: #5a189a;
  margin: 1rem 0;
`;

export const RetryButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors["primary-dark"]};
  }
`;
