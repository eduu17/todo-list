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
    font-size: 'Lato', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  
  body,
  html {
    background-color: #2b2d42;
    color: #fff;
  }
  
  ul,
  li {
    list-style: none;
  }
`;
