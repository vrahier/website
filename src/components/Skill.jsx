import React from 'react';
import PropTypes from 'prop-types';
import './Skill.css';

function Skill({ skill }) {
  return <>
    <div className='skill-name'>{skill.name}</div>
    <div className='skill-value'>{skill.value}</div>
  </>;
}

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
};
export default Skill;
