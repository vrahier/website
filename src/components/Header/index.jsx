import {scrollToDiv} from '../../utils/scroll';
import { Menu, MenuBackground, MenuContainer, MenuItem, StyledHeader } from './Style';
import {useTranslation} from 'react-i18next';

function Header({currentSection}) {

  const {t} = useTranslation();

  const menuItems = [
    ["home", t("home")],
    ["about", t("about")],
    ["resume", t("resume")],
    ["contact", t("contact")]
  ];


  const handleClick = (e) => {
    /**
     * On menu item click, scroll to corresponding section.
     * scrolling will update the current section state and
     * consequently the active menu item.
    **/
    scrollToDiv(e.target.id.replace("#", ""));
  };

  return (
    <StyledHeader>
        <MenuContainer>
          <MenuBackground/>
          <Menu>
          { menuItems.map((item, index) => (
            <MenuItem
              key={index}
              id={"#" + item[0]}
              active={"#" + item[0] === currentSection}
              onClick={handleClick}
            >{item[1]}</MenuItem>
          ))}
          </Menu>
        </MenuContainer>
    </StyledHeader>
  )
}
export default Header;
