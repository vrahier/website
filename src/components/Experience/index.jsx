import {useEffect, useState} from 'react';
import {PropTypes} from 'prop-types';
import { Description, MoreButton} from './Style';
import {useTranslation} from 'react-i18next';

function Experience({id, title, company, fromDate, toDate, location, description}) {
  const {t} = useTranslation();

  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (!description) {
      return;
    }
    document.getElementById(id).innerHTML = description;
  }, [description, id])

  const handleClick = () => setShowDescription(!showDescription);

  return <div>
        <h3>{title}</h3>
        <div>{company}</div>
        <div>{fromDate}{ toDate && "-" + toDate }</div>
        <div>{location}</div>
        { description && (
          <>
            <MoreButton onClick={handleClick}>{t("seeMore")} ⏷</MoreButton>
            <Description id={id} show={showDescription}>
              {description}
            </Description>
          </>
         )
       }
    </div>
}

Experience.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
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
