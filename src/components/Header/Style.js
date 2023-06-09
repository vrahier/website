import {colors} from '../../utils/style/colors';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  z-index: 100;
  color: ${colors.menu};
`

export const MenuBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 6rem);
  z-index: -1;
  opacity: 1;
  background: linear-gradient(to bottom, rgb(255, 250, 245) 0%, rgba(255, 250, 245, 0.737) 19%, rgba(255, 250, 245, 0.54) 34%, rgba(255, 250, 245, 0.38) 47%, rgba(255, 250, 245, 0.28) 56.5%, rgba(255, 250, 245, 0.192) 65%, rgba(255, 250, 245, 0.125) 73%, rgba(255, 250, 245, 0.075) 80.2%, rgba(255, 250, 245, 0.043) 86.1%, rgba(255, 250, 245, 0.02) 91%, rgba(255, 250, 245, 0.008) 95.2%, rgba(255, 250, 245, 0.004) 98.2%, rgba(255, 250, 245, 0) 100%);
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
`

export const MenuItem = styled.li`
  font-family: 'SparkyStonesRegular';
  display: inline-block;
  margin: 8px 5vw 0 5vw;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: ${props => props.active ? '100%': 0};
    height: 3px;
    background: ${colors.menu};
    margin-top: 5px;
    transition: width .4s ease-in;
  }

  &:hover:after {
    width: 100%;
  }
`
