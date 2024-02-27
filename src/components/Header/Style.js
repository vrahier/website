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

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Menu = styled.div`
  background: linear-gradient(to bottom, rgb(255, 250, 245) 0%, rgba(255, 250, 245, 0.737) 19%, rgba(255, 250, 245, 0.54) 34%, rgba(255, 250, 245, 0.38) 47%, rgba(255, 250, 245, 0.28) 56.5%, rgba(255, 250, 245, 0.192) 65%, rgba(255, 250, 245, 0.125) 73%, rgba(255, 250, 245, 0.075) 80.2%, rgba(255, 250, 245, 0.043) 86.1%, rgba(255, 250, 245, 0.02) 91%, rgba(255, 250, 245, 0.008) 95.2%, rgba(255, 250, 245, 0.004) 98.2%, rgba(255, 250, 245, 0) 100%);
  padding-top: 35px;
  padding-bottom: 35px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  width: 100vw;
`

export const MenuItem = styled.div`
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
