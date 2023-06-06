import {colors} from '../../utils/style/colors';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10vw 0 10vw;
  margin: 5% 5% 5% 5%;
  text-align: center;
  max-width: 80vw;
`

export const Picture = styled.img`
  border-radius: 50%;
  margin: 2vh 0 2vh 0;
  max-width: 178px;
`

export const Section = styled.div`
  padding-bottom: 25vh;
  padding-top: ${props => props.isFirst ? "15vh" : 0};
  height: ${props => props.isFirst && "100vh"};
`

export const ScrollDown = styled.svg`
  animation: MoveUpDown 1s linear infinite;
  padding-top: 25vh;
  height: 30px;
  width: 30px;
  cursor: pointer;

  &:hover {
    color: ${colors.accent};
  }

  @keyframes MoveUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`
