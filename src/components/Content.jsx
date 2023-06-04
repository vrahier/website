import { PropTypes } from 'prop-types';
import './Content.css';
import Contact from './Contact';
import { Education, WorkExperience } from './Experience';
import Skill from './Skill';

function Content({ data }) {
  return (
    <div className="contentDiv">
      <div>
        <h1>{data.firstName} {data.name}</h1>
        <h2>{data.jobTitle}</h2>
        <img className="picture" src="/picture.png"/>
      </div>
      <div id="presentation">
        <h2>About me</h2>
        {data.presentation}
      </div>
      <div id="resume">
        <h2>Resume</h2>
        <h3>Work experience</h3>
        {data.experiences.map((exp, index) => (
          <WorkExperience key={index} id={index} experience={exp} />
        ))
        }
        <h3>Skills</h3>
        {data.skills.map((skill, index) => (
          <Skill key={index} skill={skill}/>
        ))}
        <h3>Education</h3>
        {data.education.map((edu, index) => (
          <Education key={index} id={index} education={edu} />
        ))}
      </div>
      <div id="contact">
        <h2>Contact</h2>
        {data.contact.map((contact, index) => (
          <Contact key={index} contact={contact}/>
        ))}
      </div>
    </div>
  )
}

Content.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    presentation: PropTypes.string,
    experiences: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
    contact: PropTypes.array.isRequired
  }).isRequired
}
Content.defaultProps = {
  data: {
    presentation: "",
    experiences: [],
    skills: [],
    education: [],
    contact: []
  }
}
export default Content;
