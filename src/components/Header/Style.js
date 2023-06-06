import {colors} from '../../utils/style/colors';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 56px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundBottom};
  color: ${colors.primary};
  border-bottom: 1px solid ${colors.primary};
`

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
`

export const MenuItem = styled.li`
  display: inline-block;
  margin: 8px 5vw 0 5vw;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: ${props => props.active ? '100%': 0};
    height: 3px;
    background: ${colors.primary};
    margin-top: 5px;
    transition: width .4s ease-in;
  }

  &:hover:after {
    width: 100%;
  }
`
