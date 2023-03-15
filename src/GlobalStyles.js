import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  

  
`;
