"use client";
import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 20px;

  h1 {
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 48px 60px;
  }
`;

export const CoursesCourses = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;
