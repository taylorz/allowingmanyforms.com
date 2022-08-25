import { createGlobalStyle } from "styled-components";
import fannGrotesqueRegularWoff from "../public/assets/fonts/fann-grotesque/regular/fann-grotesque-regular-pro.woff";
import fannGrotesqueRegularWoff2 from "../public/assets/fonts/fann-grotesque/regular/fann-grotesque-regular-pro.woff2";
import fannGrotesqueRegularEot from "../public/assets/fonts/fann-grotesque/regular/fann-grotesque-regular-pro.eot";
import fannGrotesqueSemiboldWoff from "../public/assets/fonts/fann-grotesque/semibold/fann-grotesque-semibold-pro.woff";
import fannGrotesqueSemiboldWoff2 from "../public/assets/fonts/fann-grotesque/semibold/fann-grotesque-semibold-pro.woff2";
import fannGrotesqueSemiboldEot from "../public/assets/fonts/fann-grotesque/semibold/fann-grotesque-semibold-pro.eot";

const buffer = 4;
const timing = ".25s";
const easing = "ease-in-out";

export const theme = {
  util: {
    buffer,
    timing,
    transition: `all ${timing} ${easing}`,
  },
  breakpoint: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1440,
  },
  color: {
    text: {
      dark: "#22222A",
    },
  },
  text: {
    family: {
      regular: "Fann Grotesque Regular, Helvetica Neue, Helvetica, sans-serif",
    },
    weight: {
      body: {
        regular: 400,
      },
      title: {
        regular: 400,
      },
    },
    size: {
      body: {
        regular: 18,
      },
      title: {
        regular: 26,
      },
    },
    lineHeight: {
      body: {
        regular: 22,
      },
      title: {
        regular: 32,
      },
    },
  },
};

// Global styles:
export const GlobalStyle = createGlobalStyle`

@font-face {
      font-family: 'Fann Grotesque Regular';
      font-display: block; /* No longer causing FOUT */
      src: local('Fann Grotesque Regular'), local('fannGrotesqueRegular'),
      url(${fannGrotesqueRegularEot}) format('eot'),
      url(${fannGrotesqueRegularWoff2}) format('woff2'),
      url(${fannGrotesqueRegularWoff}) format('woff');
  }
  @font-face {
      font-family: 'Fann Grotesque Semibold';
      font-display: block; /* No longer causing FOUT */
      src: local('Fann Grotesque Semibold'), local('fannGrotesqueSemibold'),
      url(${fannGrotesqueSemiboldEot}) format('eot'),
      url(${fannGrotesqueSemiboldWoff2}) format('woff2'),
      url(${fannGrotesqueSemiboldWoff}) format('woff');
  }

  body, html {
    margin: 0 !important;
    -webkit-overflow-scrolling: touch;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
