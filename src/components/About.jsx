import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

const About = ({ data }) => {
  
  return (
    <div className='about'>
      <img
        className='picture'
        src="picture.png"
        alt={'Picture of ' + data.firstName + ' ' + data.name}
      />
      <div className='about-text'>{data.about}</div>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  }).isRequired
};

export default About;