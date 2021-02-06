import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    --light-blue: #bbf1fa;
    --main: #0f3460;
    --dark-blue: #1a1a2e;
    --blue: #51c2d5;
    --brown: #663f3f;
    --red: #ec4646;
    --dark-square: rgb(184,139,74);
    --white-square: rgb(227,193,111);
    --white: #eeeeee;
    --light-gray: #e8e8e8;
    --gray: #bbbfca;
    --dark-gray: #495464;
    --black: #000000;
    --rgba-dark-blue: rgba(26, 26, 46, 0.5);
    --rgba-blue:  rgba(22, 33, 62, 0.2);
    --rgba-red: rgba(233, 69, 96, 0.5);
    --shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  a {
    text-decoration: none;
  }
  
  body {
    background-color: var(--light-gray);
    height: 100vh;
    margin: 0 auto;
    max-width: 100vw;
    overscroll-behavior: none;
    overflow-x: hidden;
    width: 100%; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
