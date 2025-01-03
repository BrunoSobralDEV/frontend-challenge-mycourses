import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  color: white;
  padding: 10px;
  text-align: center;
`;

export { StyledHeader };