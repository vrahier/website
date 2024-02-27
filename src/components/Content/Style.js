import {SvgButton} from '../../utils/style/Atoms';
import {colors} from '../../utils/style/colors';
import styled from 'styled-components';

export const AboutText = styled.div`
  text-align: justify;
`

export const Picture = styled.img`
  margin-bottom: 10vh;
  border-radius: 50%;
  max-width: 178px;
  border: 1px solid ${colors.pictureBorder};
`

export const HomeSection = styled.div`
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

export const Section = styled.div`
  text-align: center;
  padding: 20vh 10vw 0 10vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.text};

  @media only screen and (min-width: 769px) {
    padding: 20vh 25vw 0 25vw;
    min-height: 80vh;
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
