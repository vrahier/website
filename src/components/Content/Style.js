import {SvgButton} from '../../utils/style/Atoms';
import {colors} from '../../utils/style/colors';
import styled from 'styled-components';
export const AboutText = styled.div`
  text-align: justify;
`

export const Picture = styled.img`
  border-radius: 50%;
  margin: 2vh 0 2vh 0;
  max-width: 178px;
  border: 1px solid ${colors.pictureBorder};
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
  color: ${colors.text};

  @media only screen and (min-width: 1008px) {
    padding: 6vh 25vw 0 25vw;
    min-height: 94vh;
  }
`

export const SectionsContainer = styled.div`
  width: 100%;
  background: ${colors.sectionsBackground};
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
