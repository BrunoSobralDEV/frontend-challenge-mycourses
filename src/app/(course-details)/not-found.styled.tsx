"use client";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  padding: 20px 60px;
  height: calc(100vh - (230px));

  h1 {
    font-size: 4rem;
    color: #792bf9;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 24px;
    color: #090909;
  }

  a {
    padding: 10px 20px;
    background-color: #792bf9;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #5519b7;
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NotFoundImage = styled.div`
  position: relative;
  display: none;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 400px;
    width: auto;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
