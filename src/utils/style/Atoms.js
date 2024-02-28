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

export const Loading = styled.div`
  background:linear-gradient(${colors.loader1}, ${colors.loader2});
  mask:radial-gradient(farthest-side,#0000 calc(100% - 5px),#fff 0);
  border-radius: 50%;
  position: fixed;
  inset : calc(50% - 30px);
  animation: rot 2s linear infinite;

  @keyframes rot {
    100% { transform: rotate(360deg); }
  }
`