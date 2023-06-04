import {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import './Experience.css';

function Experience({id, title, company, fromDate, toDate, location, description}) {

  useEffect(() => {
    document.getElementById(id).innerHTML = description;
  }, [])

  return <div className="container">
      <div className="expTitle">
        <h3>{title}</h3>
      </div>
      <div>
        {company}
      </div>
      <div className="expDates">
        {fromDate}-{toDate}
      </div>
      <div>
        {location}
      </div>
      <div id={id} className="expDesc">
        {description}
      </div>
    </div>
}

Experience.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string
}

export function WorkExperience({id, experience}) {
  return <Experience
    id={`exp${id}`}
    title={experience.title}
    fromDate={experience.fromDate}
    toDate={experience.toDate}
    company={experience.employer}
    location={experience.location}
    description={experience.description}
  />
}

WorkExperience.propTypes = {
  id: PropTypes.number.isRequired,
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    employer: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string
  }).isRequired
}

export function Education({id, education}) {
  return <Experience
    id={`edu${id}`}
    title={education.title}
    fromDate={education.fromDate}
    toDate={education.toDate}
    company={education.school}
    location={education.location}
    description={education.description}
  />
}

Education.propTypes = {
  id: PropTypes.number.isRequired,
  education: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    school: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired
}
