"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3e8ff;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const ErrorCode = styled.h1`
  font-size: 10rem;
  font-weight: bold;
  margin: 0;
  color: #792BF9;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    position: relative;
  }

  span::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6rem;
    height: 6rem;
    background-color: #e2c8ff;
    border-radius: 50%;
    z-index: -1;
  }

  span::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 8rem;
    height: 0.5rem;
    background-color: #f3e8ff;
    border-radius: 50%;
    z-index: -1;
  }
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #5a189a;
  margin: 1rem 0;
`;

export const RetryButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #792BF9;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #5f22c7;
  }
`;

export default function ErrorPage({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <Container>
      <ErrorCode>
        5<span>0</span>0
      </ErrorCode>
      <Message>Oops! Ocorreu um erro!</Message>
      <Message>
        Fique tranquilo, estamos cientes e trabalhando na correção.
      </Message>
      <RetryButton onClick={() => reset()}>Tentar novamente</RetryButton>
    </Container>
  );
}
