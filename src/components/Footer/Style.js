import {colors} from '../../utils/style/colors';
import styled from 'styled-components';

export const ChangeLanguageButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 1vw;
  color: ${colors.text};

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${colors.text};
    margin-top: 5px;
    transition: width .4s ease-in;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  padding: 2vh 0 2vh 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  background: ${colors.footerBackground};
`
