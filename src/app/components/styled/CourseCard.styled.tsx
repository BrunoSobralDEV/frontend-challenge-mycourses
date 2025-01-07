"use client";
import styled from "styled-components";

export const CourseCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  position: relative;

  img {
    width: 100%;
    height: 157px;
    object-fit: cover;
  }

  .content {
    padding: 16px;

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
      color: gray;
      margin-bottom: 56px;
    }

    button {
      width: 100%;
      height: 48px;
      padding: 14px 16px;

      background-color: #7b3fe4;
      color: white;
      border: none;
      cursor: pointer;

      font-size: ${({ theme }) => theme.fontSizes.md};
      font-weight: 700;

      @media screen {
        &:hover {
          background-color: #692ac3;
        }
      }
    }
  }
`;

export const FireOnline = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  position: absolute;

  span {
    padding: 4px 12px;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;

    font-size: 12px;
    font-weight: 700;
  }
`