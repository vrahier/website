import { createGlobalStyle } from 'styled-components';
import {colors} from './colors';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    background: url('background.jpg');
    background-size: cover;
    background-attachment: fixed;
    color: ${colors.primary};
    font-size: 18px;
    @media only screen and (min-width: 769px) {
      font-size: 20px;
    }
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 25px;
  }

  a {
    color: ${colors.text};
  }
  a:hover {
    color: ${colors.accent};
  }
`
