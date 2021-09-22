import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  
  ${normalize}

  /* @font-face {
    font-family: "Poppins";
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap') format("woff2");
    font-weight: normal;
    font-stretch: normal;
  } */

  html {
    // CSS VARIABLES
    --max-width: 1000px;
    --nav-drop-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
    --shadow-1: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.13);
    --content-z-index: 1;
    --modal-z-index: 1000;
    --nav-container-z-index: 950;
    --nav-sheet-z-index: 900;
    --color-white: hsla(206, 67%, 99%, 1);
    --color-transparent: rgba(0, 0, 0, 0.05);
    --color-transparent2: rgba(0, 0, 0, 0.1);
    font-size: 8px;

    // Colors
    --primary: #5956E9;
    --primary-light: hsla(242, 76%, 92%, 0.7);
    --secondary: #F9B8C3;
    --secondary-light: #FDECEF;
    --tertiary: #FFDD60;
    --tertiary-light: #FFF6D6;
    --success: #41D3BD;
    --success-light: #DEF8F4;
    --dark: #0E0E2C;
    --white: #FBFCFE;
    --off-white: #EEF2F5;

  }

  body {
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 2rem;
    letter-spacing: 0.5px;
    line-height: 2;
    background: var(--color-background);
    color: var(--dark);
  }

  body.modal-open {
    overflow: hidden;
    position:fixed;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--color-secondary);
  }

  a:hover {
    text-decoration: none;
  }

  button {
    font-family:'Poppins', ---apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .icon {
    height: 24px;
    width: 24px;
  }

  .container-full-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .container {
    max-width: var(--max-width);
    margin: auto 0;
  }

  .text-gradient {
    transition: background-position 0.5s ease-out, color 0.5s ease-out;
    text-decoration: none;
    color: var(--color-gradientSecond);
    background-color: var(--color-gradientSecond);
    background-image: linear-gradient(
      90deg,
      var(--color-gradientSecond),
      var(--color-gradientFirst),
      var(--color-gradientSecond)
    );
    background-position: 100% 0%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    background-size: 200% 100%;
    font-size: 2.5rem;
    font-weight: bold;
    -webkit-text-fill-color: transparent;

    :hover {
      color: var(--color-gradientFirst);
      background-position: 0% 0%;
    }
  }

`

export default GlobalStyles
