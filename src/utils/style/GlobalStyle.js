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
  h1, h2 {
  font-family: 'SparkyStonesRegular';
  }
  .text {
    text-align: justify;
  }

  a {
    color: ${colors.primary};
  }
  a:hover {
    color: ${colors.accent};
  }
  /*
   * Rows
  */
  .rowContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
  }
  .rowName {
    flex: 1;
    display: flex;
    max-width: 30vw;
    font-weight: bold;
    margin-bottom: 1vh;
  }
  .rowValue {
    flex: 1;
    display: flex;
    text-align: left;
}
`
