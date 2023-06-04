import { PropTypes } from 'prop-types';
import './index.css';
import Contact from '../Contact';
import { Education, WorkExperience } from '../Experience';
import Section from '../Section';
import Skill from '../Skill';

function Content({ data, currentSection, setCurrentSection}) {
  return (
    <div className="contentDiv">
      <Section id="home" currentSection={currentSection} setCurrentSection={setCurrentSection}>
        <h1>{data.firstName} {data.name}</h1>
        <h2>{data.jobTitle}</h2>
        <img className="picture" src="/picture.png"/>
      </Section>
      <Section id="about" currentSection={currentSection} setCurrentSection={setCurrentSection}>
        <h2>About me</h2>
        {data.presentation}
      </Section>
      <Section id="resume" currentSection={currentSection} setCurrentSection={setCurrentSection}>
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
      </Section>
      <Section id="contact" currentSection={currentSection} setCurrentSection={setCurrentSection}>
        <h2>Contact</h2>
        {data.contact.map((contact, index) => (
          <Contact key={index} contact={contact}/>
        ))}
      </Section>
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
