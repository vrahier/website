import {colors} from './colors';
import styled from 'styled-components';

export const SvgButton = styled.svg`
  height: 30px;
  width: 30px;
  cursor: pointer;

  &:hover {
    color: ${colors.accent};
  }
`

