'use client'
import styled from "styled-components";

export const FavoriteWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px; 
  height: 36px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.35);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  
  img {
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    &:hover {
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }
  }
`;