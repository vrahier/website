import { createGlobalStyle } from 'styled-components';
import Draftside from '../../assets/Draftside.otf';
import DraftsideBold from '../../assets/DraftsideBold.otf';
import SparkyStonesRegular from '../../assets/SparkyStonesRegular.ttf';
import {colors} from './colors';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Draftside';
    src: local('Draftside'), url(${Draftside}) format('opentype');
  }
  @font-face {
    font-family: 'Draftside';
    src: local('Draftside'), url(${DraftsideBold}) format('opentype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'SparkyStonesRegular';
    src: local('SparkyStonesRegular'), url(${SparkyStonesRegular}) format('opentype');
  }

  body {
    margin: 0;
    font-family: 'Draftside';
    background: ${colors.backgroundBottom};
    background: linear-gradient(0deg, ${colors.backgroundBottom} 0%, ${colors.backgroundTop} 100%);
    color: ${colors.primary};

  }

  h1 {
    font-size: 60px;
  }

  h1, h2 {
  font-family: 'SparkyStonesRegular';
  }

  a {
    color: ${colors.primary};
  }
  a:hover {
    color: ${colors.accent};
  }
`
