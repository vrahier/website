import { SvgButton } from '../../utils/style/Atoms';
import styled from 'styled-components';

export const ScrollDown = styled(SvgButton)`
  animation: MoveUpDown 1s linear infinite;
  margin-top: 30vh;

  @keyframes MoveUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
