import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: var(--font-inter);
    `}
  }

  .container {
    display: grid;
    grid-template-rows: auto 1fr auto auto;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes['xl']};
      font-weight: normal;

      @media screen and (min-width:${theme.screen.md}){
        font-size: ${theme.fontSizes['3xl']};
      }
    `}
  }

  input {
    font-family: var(--font-inter);
    font-size: 14px;
    
    color: ${({ theme }) => theme.colors['text-modal-title']}
;  }
`

export default GlobalStyle;