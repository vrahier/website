import {colors} from '../../utils/style/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.div`
  display: ${props => props.show ? "block": "none"};
  text-align: justify;

  @media only screen and (min-width: 641px) {
    display: block;
  }
`;

export const MoreButton = styled.button`
  background: transparent;
  border: 0;
  width: fit-content;
  align-self: center;
  color: ${colors.text};

  &:hover {
    color: ${colors.accent}
  }

  @media only screen and (min-width: 641px) {
    display: none;
  }
`;
