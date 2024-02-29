import React from 'react';
import PropTypes from 'prop-types';
import { scrollToDiv } from '../utils/scroll';
import './Home.css';

const Home = ({ data }) => {
    
  const handleClick = () => {
    scrollToDiv('about');
  };
  
  return (
    <div className='home'>
      <h1>{data.firstName} {data.name}</h1>
      <h2>{data.jobTitle}</h2>
      <div>{data.shortPresentation}</div>
      <div id="scrollContainer">
        <svg className='svg-button scroll-down' onClick={handleClick} viewBox="0 0 17 17">
          <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 	transform="matrix(0 1 -1 0 17 0)">
            <circle cx="8.5" cy="8.5" r="8"/>
            <path d="m11.621 6.379v4.242h-4.242" transform="matrix(.70710678 .70710678 .70710678 -.70710678 	-3.227683 7.792317)"/>
            <path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    shortPresentation: PropTypes.string.isRequired,
  }).isRequired
};
export default Home;