import {SvgButton} from '../../utils/style/Atoms';
import {colors} from '../../utils/style/colors';
import styled from 'styled-components';
export const AboutText = styled.div`
  text-align: justify;
`
export const Container = styled.div`
  position: relative;
  top: 56px;
  padding: 0 10vw 10vh 10vw;
  text-align: center;
  max-width: 80vw;

  @media only screen and (min-width: 1008px) {
    padding: 0 25vw 0 25vw;
  }
`

export const Picture = styled.img`
  border-radius: 50%;
  margin: 2vh 0 2vh 0;
  max-width: 178px;
  border: 1px solid ${colors.picture};
`

export const Separator = styled.hr`
  margin: 5vh 20vw 5vh 20vw;
  opacity: 0.5;

  @media only screen and (min-width: 1008px) {
    margin: 5vh 10vw 5vh 10vw;
  }
`

export const Section = styled.div`
  text-align: center;
  padding: 10vh 10vw 0 10vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

export const SectionsContainer = styled.div`
  width: 100%;
  background: #00000085;
`

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
`
