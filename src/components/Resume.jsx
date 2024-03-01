import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Education, WorkExperience } from './Experience';
import Skill from './Skill';
import './Resume.css';

const Resume = React.forwardRef(function Resume({ data }, ref) {
  const { t } = useTranslation();
  const [titleClasses, setTitleClasses] = useState(['title']);

  const onClick = () => {
    if (!titleClasses.includes('title-hidden')) {
      setTitleClasses(['title-hidden']);
    } else {
      setTitleClasses(['title']);
    }
  };
  
  return (
    <div className='resume' ref={ref}>
      <div className='sub-section'>
        <h1 className='title title-left'>{t('skills')}</h1>
        <div className='content'>
          {data.skills.map((skill, index) => (
            <Skill key={index} skill={skill}/>
          ))}
        </div>
      </div>

      <div className='sub-section reverse'>
        <h1 className={titleClasses.join(' ')}>{t('workExperience')}</h1>
        <div className='content content-left'>
          {data.experiences.map((exp, index) => (
            <div className='exp-content' key={index}>
              <WorkExperience id={index} experience={exp} />
              <svg onClick={onClick} className='svg-button' viewBox="0 0 17 17">
                <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 	transform="matrix(0 1 -1 0 17 0)">
                  <circle cx="8.5" cy="8.5" r="8"/>
                  <path d="m8.5 4.5v8" />
                  <path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)"/>
                </g>
              </svg>
            </div>
          ))
          }
        </div>
      </div>

      <div className='sub-section'>
        <h1 className='title title-left'>{t('education')}</h1>
        <div className='content'>
          {data.education.map((edu, index) => (
            <Education key={index} id={index} education={edu} />
          ))}
        </div>
      </div>
    </div>
  );
});

Resume.propTypes = {
  data: PropTypes.shape({
    skills: PropTypes.string.isRequired,
    experiences: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired
  }).isRequired
};
export default Resume;