import {useEffect, useState} from 'react';
import { PropTypes } from 'prop-types';
import {ChangeLanguageButton, StyledFooter} from './Style';
import {useTranslation} from 'react-i18next';
import {scrollToDiv} from '../../utils/scroll';

function Footer({data}) {
  const {i18n,} = useTranslation();
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
    })
  }, []);

  return <StyledFooter>
    <div>
    {
      availableLng
        .filter((l) => l.locale !== i18n.language)
        .map((l, index) => (
        <ChangeLanguageButton key={index} onClick={handleClick} value={l.locale}>{l.name}</ChangeLanguageButton>
      ))}
    </div>
    <div>© {new Date().getFullYear()} {data.firstName} {data.name}</div>
  </StyledFooter>
}

Footer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired
  }).isRequired
}
export default Footer;
