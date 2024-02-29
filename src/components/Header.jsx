import React from 'react';
import PropTypes from 'prop-types';
import { scrollToDiv } from '../utils/scroll';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header({ currentSection }) {

  const { t } = useTranslation();

  const menuItems = [
    ['home', t('home')],
    ['about', t('about')],
    ['resume', t('resume')],
    ['contact', t('contact')]
  ];


  const handleClick = (e) => {
    /**
     * On menu item click, scroll to corresponding section.
     * scrolling will update the current section state and
     * consequently the active menu item.
    **/
    scrollToDiv(e.target.id.replace('#', ''));
  };

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-menu'>
          { menuItems.map((item, index) => (
            <div className={`header-menu-item ${'#' + item[0] === currentSection}`}
              key={index}
              id={'#' + item[0]}
              onClick={handleClick}
            >
              {item[1]}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  currentSection: PropTypes.string.isRequired,
};
export default Header;
