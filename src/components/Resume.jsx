import { useTranslation } from 'react-i18next';
import { SvgButton } from '../utils/style/Atoms';
import { Education, WorkExperience } from './Experience';
import './Resume.css';
import Skill from './Skill';

const Resume = ({ data }) => {
  const {t} = useTranslation();
  
  return (
    <div className='resume'>
      <div className='sub-section'>
        <h1 className='title title-left'>{t("skills")}</h1>
        <div className='content'>
          {data.skills.map((skill, index) => (
            <Skill key={index} skill={skill}/>
          ))}
        </div>
      </div>

      <div className='sub-section reverse'>
        <h1 className='title'>{t("workExperience")}</h1>
        <div className='content content-left'>
          {data.experiences.map((exp, index) => (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'right', gap: '1vw'}}>
              <WorkExperience key={index} id={index} experience={exp} />
              <SvgButton viewBox="0 0 17 17">
                <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 	transform="matrix(0 1 -1 0 17 0)">
                  <circle cx="8.5" cy="8.5" r="8"/>
                  <path d="m8.5 4.5v8" />
                  <path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)"/>
                </g>
              </SvgButton>
            </div>
          ))
          }
        </div>
      </div>

      <div className='sub-section'>
        <h1 className='title title-left'>{t("education")}</h1>
        <div className='content'>
          {data.education.map((edu, index) => (
            <Education key={index} id={index} education={edu} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume;