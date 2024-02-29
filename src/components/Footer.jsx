import React from 'react';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { scrollToDiv } from '../utils/scroll';
import './Footer.css';

function Footer({ data }) {
  const { i18n, } = useTranslation();
  const [availableLng, setAvailableLng] = useState([]);

  const handleClick = (e) => {
    i18n.changeLanguage(e.target.value);
    scrollToDiv('home');
  };

  useEffect(() => {
    fetch('i18n/available.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((json) => {
      setAvailableLng(json);
    });
  }, []);

  return <footer className='footer'>
    {
      data.extraFooter.map((e, index) => <div key={index}>{e}</div>)
    }
    <div>
      {
        availableLng
          .filter((l) => l.locale !== i18n.language)
          .map((l, index) => (
            <button className='footer-language' key={index} onClick={handleClick} value={l.locale}>{l.name}</button>
          ))}
    </div>
    <div>© {new Date().getFullYear()} {data.firstName} {data.name}</div>
  </footer>;
}

Footer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    extraFooter: PropTypes.array.isRequired
  }).isRequired
};
Footer.defaultProps = {
  data: {
    extraFooter: []
  }
};
export default Footer;
