"use client"
import styled from "styled-components";

export const LoadingContainer = styled.div`
  max-width: 220px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  #loader path:nth-child(2) {
    stroke-dasharray: 200%;
    stroke-dashoffset: 200%;
    animation: strokeAnimate 2s 0s ease forwards;
  }

  #loader path:nth-child(3) {
    stroke-dasharray: 100%;
    stroke-dashoffset: 100%;
    animation: strokeAnimate 2s 0.3s ease forwards;
  }

  #loader path:nth-child(4) {
    stroke-dasharray: 100%;
    stroke-dashoffset: 100%;
    animation: strokeAnimate 2s 0.9s ease forwards;
  }

  #loader path:nth-child(5) {
    stroke-dasharray: 100%;
    stroke-dashoffset: 100%;
    animation: strokeAnimate 2s 1.2s ease forwards;
  }

  #loader path:nth-child(6) {
    stroke-dasharray: 100%;
    stroke-dashoffset: 100%;
    animation: strokeAnimate 2s 1.5s ease forwards;
  }

  #loader path:nth-child(7) {
    stroke-dasharray: 100%;
    stroke-dashoffset: 100%;
    animation: strokeAnimate 2s 1.8s ease forwards;
  }

  #loader path:nth-child(8) {
    stroke-dasharray: 100%;
    stroke-dashoffset: 100%;
    animation: strokeAnimate 2s 2.1s ease forwards;
  }

  @keyframes strokeAnimate {
    to {
      stroke-dashoffset: 0;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 150px;
    #loader {
      width: 150px;
    }
  }

  @media screen and (max-width: 650px) {
    max-width: 100px;
    #loader {
      width: 100px;
    }
  }
`;
