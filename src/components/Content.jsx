import React from 'react';
import { PropTypes } from 'prop-types';
import { useRef } from 'react';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import './Content.css';
import { useTranslation } from 'react-i18next';

function Content({ data }) {

  const { t } = useTranslation();

  const secHome = useRef();
  const secAbout = useRef();
  const secResume = useRef();
  const secContact = useRef();

  const menuItems = [
    ['home', t('home'), secHome],
    ['about', t('about'), secAbout],
    ['resume', t('resume'), secResume],
    ['contact', t('contact'), secContact]
  ];

  const handleClick = (e) => {
    const item = menuItems.find((i) => i[0] === e.target.id);
    item[2].current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <div className='header-menu'>
            { menuItems.map((item, index) => (
              <div className={'header-menu-item'}
                key={index}
                id={item[0]}
                onClick={handleClick}
              >
                {item[1]}
              </div>
            ))}
          </div>
        </div>
      </header>
      <div>
        <Home data={data} aboutRef={secAbout} ref={secHome} id="home"/>

        <div className='sections'>
          <About data={data} ref={secAbout} id="about"/>
          <Resume data={data} ref={secResume} id="resume"/>
          <Contact
            firstName={data.firstName}
            name={data.name}
            email={data.email}
            links={data.links}
            id="contact"
            ref={secContact}
          />
        </div>
      </div>
    </>
  );
}

Content.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    email: PropTypes.string,
    links: PropTypes.array.isRequired,
  }).isRequired,
};
export default Content;
