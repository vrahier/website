import {useEffect} from 'react';
import { PropTypes } from 'prop-types';
import './index.css';
import Contact from '../Contact';
import { Education, WorkExperience } from '../Experience';
import Skill from '../Skill';

function Content({ data, currentSection, setCurrentSection}) {
  const handleScroll = (e) => {
    /**
     * Detects which is current section.
    **/
    var sections = [...document.getElementsByClassName("section")];
    var scrolled;
    // Check if bottom is reached
    // If reached, all the sections have been scrolled
    // Else search for sections which are on the upper side
    // on the screen
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        scrolled = sections;
    } else {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      scrolled = sections.filter((sec) => {
        return (sec.offsetTop < scrollTop + window.innerHeight / 2)
      })
    }

    var cur = scrolled.slice(-1)[0];
    var id = cur ? "#" + cur.id : "#home";
    if(id && id !== currentSection) {
      setCurrentSection(id)
    }

  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="contentDiv" onScroll={handleScroll}>
      <div id="home" className="section">
        <h1>{data.firstName} {data.name}</h1>
        <h2>{data.jobTitle}</h2>
        <img className="picture" src="/picture.png"/>
      </div>
      <div id="about" className="section">
        <h2>About me</h2>
        {data.presentation}
      </div>
      <div id="resume" className="section">
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
      <div id="contact" className="section">
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
