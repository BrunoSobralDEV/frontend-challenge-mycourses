'use client'
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  padding: 20px;

  h1 {
    font-size: 4rem;
    color: #792BF9;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 24px;
    color: #090909;
  }

  a {
    padding: 10px 20px;
    background-color: #792BF9;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #5519b7;
    }
  }
`;

export const NotFoundImage = styled.div`
  position: relative;
  display: none;
  
  img {
    object-fit: contain;
  }

  @media screen and (min-width: 768px){
    display: block;
  }
`;