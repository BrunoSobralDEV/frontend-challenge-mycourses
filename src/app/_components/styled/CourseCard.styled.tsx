"use client";
import styled from "styled-components";

export const CourseCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardHeader = styled.header`
  position: relative;

  .img-banner {
    width: 100%;
    height: 157px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    color: gray;
  }

  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 46px;
  }

  button {
    width: 100%;
    height: 48px;
    padding: 14px 16px;

    background-color: #7b3fe4;
    color: white;
    border: none;
    cursor: pointer;

    font-family: var(--font-inter);
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 700;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    height: 260px;

    button {
      &:hover {
        background-color: #692ac3;
      }
    }
  }
`;

export const Favorite = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const FireOnline = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  position: absolute;
  bottom: 16px;
  left: 16px;

  span {
    padding: 4px 12px;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;

    font-size: 12px;
    font-weight: 700;
  }
`;
