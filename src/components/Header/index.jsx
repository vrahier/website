import './index.css'

function Header({currentSection, setCurrentSection}) {

  const menuItems = [
    ["home", "Home"],
    ["about", "About"],
    ["resume", "Resume"],
    ["contact", "Contact"]
  ];
  const className = (id) => {
    let cn = "menuItem";
    cn += currentSection === id ? " activeItem": "";
    return cn;
  };

  return (
    <header>
        <ul className="menuList">
        { menuItems.map((item, index) => (
          <li
            key={index}
            id={item[0]}
            className={className(item[0])}
            onClick={() => setCurrentSection(item[0])}
          >{item[1]}</li>
        ))}
        </ul>
    </header>
  )
}
export default Header;
