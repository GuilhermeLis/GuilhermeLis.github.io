import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Bold.ttf");
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 400 ${({ theme }) => theme.fonts.regular}, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
  }
`;
