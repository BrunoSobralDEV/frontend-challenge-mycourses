import Link from "next/link";
import styled, { css } from "styled-components";

export const ShareButton = styled.span`
  background-color: ${({ theme }) => theme.colors["bg-button-share"]};
  width: 56px;
  height: auto;
  padding: 16px;
  border-radius: 50%;
  cursor: pointer;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;

  position: absolute;
  bottom: -24px;
  right: 20px;

  img {
    transition: all 0.5s ease;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    right: 68px;
    &:hover {
      ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        color: white;
      `}
      img {
        filter: invert(1);
      }
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  padding: 12px 16px;
  width: 90%;
  max-width: 405px;
  max-height: 234px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 54px;
    width: 100%;
    margin-bottom: 16px;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors["border-button-close-modal"]};

    img {
      position: absolute;
      right: 12px;
      cursor: pointer;
    }

    h2 {
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
    }
  `}
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 16px;

  user-select: none;
  input {
    width: 100%;
    padding: 9px 40px 9px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    pointer-events: none;
    span {
      width: 300px;
    }

    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }

  img {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 0.5s ease;

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
      &:hover {
        color: #932020;
      }
    }
  }
`;

export const ButtonWhatsApp = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 16px;

  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #25d366;
  color: #fff;
  margin-right: 8px;
  width: 100%;

  transition: all 0.3s ease;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    &:hover {
      opacity: 0.9;
    }
  }

  img {
    filter: invert(1);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  height: 60px;
  text-align: right;
  border-top: 1px solid
    ${({ theme }) => theme.colors["border-button-close-modal"]};

  button {
    font-size: 12px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors["bg-button-close-modal"]};
    border: 1px solid
      ${({ theme }) => theme.colors["border-button-close-modal"]};
    width: 76px;
    height: 36px;
    cursor: pointer;
  }
`;
