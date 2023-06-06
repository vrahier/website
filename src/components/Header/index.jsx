import {scrollToDiv} from '../../utils/scroll';
import { Menu, MenuItem, StyledHeader } from './Style';
function Header({currentSection}) {

  const menuItems = [
    ["home", "Home"],
    ["about", "About"],
    ["resume", "Resume"],
    ["contact", "Contact"]
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
    </StyledHeader>
  )
}
export default Header;
