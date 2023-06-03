import './Header.css'

function Header() {

  const menuItems = ["Home", "About", "Resume", "Contact"];

  return (
    <header>
        <ul className="menuList">
        { menuItems.map((item, index) => (
          <li key={index} className="menuItem">{item}</li>
        ))}
        </ul>
    </header>
  )
}
export default Header;
