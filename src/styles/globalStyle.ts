import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Arial', sans-serif;
  }

  .container {
    display: grid;
    grid-template-rows: auto 1fr 1fr auto;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
  `

export default GlobalStyle;