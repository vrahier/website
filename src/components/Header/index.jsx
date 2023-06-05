import {useEffect} from 'react';
import './index.css'
import {scrollToDiv} from '../../utils';
function Header({currentSection}) {

  const menuItems = [
    ["home", "Home"],
    ["about", "About"],
    ["resume", "Resume"],
    ["contact", "Contact"]
  ];

  useEffect(() => {
    let menuItems = document.getElementsByClassName('menuItem');
    for (let i=0; i<menuItems.length; i++) {
      if (menuItems[i].id === currentSection) {
        menuItems[i].classList.add("activeItem");
      } else {
        menuItems[i].classList.remove("activeItem");
      }
    }
  }, [currentSection]);

  const handleClick = (e) => {
    /**
     * On menu item click, scroll to corresponding section.
     * scrolling will update the current section state and
     * consequently the active menu item.
    **/
    scrollToDiv(e.target.id.replace("#", ""));
  };

  return (
    <header>
        <ul className="menuList">
        { menuItems.map((item, index) => (
          <li
            key={index}
            id={"#" + item[0]}
            className="menuItem"
            onClick={handleClick}
          >{item[1]}</li>
        ))}
        </ul>
    </header>
  )
}
export default Header;
