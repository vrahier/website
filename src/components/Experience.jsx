import React from 'react';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Experience.css';

function Experience({ id, title, company, fromDate, toDate, location, description }) {
  const { t } = useTranslation();

  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (!description) {
      return;
    }
    document.getElementById(id).innerHTML = description;
  }, [description, id]);

  const handleClick = () => setShowDescription(!showDescription);

  return <div>
    <h3>{title}</h3>
    <div>{company}</div>
    <div>{fromDate}{ toDate && '-' + toDate }</div>
    <div>{location}</div>
    { description && (
      <>
        <button className='exp-more' onClick={handleClick}>{t('seeMore')} ⏷</button>
        <div className='description' id={id}>
          {description}
        </div>
      </>
    )
    }
  </div>;
}

Experience.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string
};

export function WorkExperience({ id, experience }) {
  return <Experience
    id={`exp${id}`}
    title={experience.title}
    fromDate={experience.fromDate}
    toDate={experience.toDate}
    company={experience.employer}
    location={experience.location}
    description={experience.description}
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
    description: PropTypes.string
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
    description={education.description}
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
    description: PropTypes.string
  }).isRequired
};
