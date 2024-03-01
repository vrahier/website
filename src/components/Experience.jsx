import React from 'react';
import { PropTypes } from 'prop-types';
import './Experience.css';

function Experience({ title, company, fromDate, toDate, location }) {

  return <div>
    <h3>{title}</h3>
    <div>{company}</div>
    <div>{fromDate}{ toDate && '-' + toDate }</div>
    <div>{location}</div>
  </div>;
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
};

export function WorkExperience({ id, experience }) {
  return <Experience
    id={`exp${id}`}
    title={experience.title}
    fromDate={experience.fromDate}
    toDate={experience.toDate}
    company={experience.employer}
    location={experience.location}
  />;
}

WorkExperience.propTypes = {
  id: PropTypes.number.isRequired,
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    employer: PropTypes.string,
    location: PropTypes.string,
  }).isRequired
};

export function Education({ id, education }) {
  return <Experience
    id={`edu${id}`}
    title={education.title}
    fromDate={education.fromDate}
    toDate={education.toDate}
    company={education.school}
    location={education.location}
  />;
}

Education.propTypes = {
  id: PropTypes.number.isRequired,
  education: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    school: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired
};
