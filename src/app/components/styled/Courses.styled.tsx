"use client";
import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
`;

