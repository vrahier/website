import {useEffect} from 'react';
import './index.css'

function Header({currentSection, setCurrentSection}) {

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

  return (
    <header>
        <ul className="menuList">
        { menuItems.map((item, index) => (
          <li
            key={index}
            id={item[0]}
            className="menuItem"
            onClick={() => setCurrentSection(item[0])}
          >{item[1]}</li>
        ))}
        </ul>
    </header>
  )
}
export default Header;
