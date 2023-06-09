import { PropTypes } from 'prop-types';
import {useRef} from 'react';
import Contact from '../Contact';
import { Education, WorkExperience } from '../Experience';
import Skill from '../Skill';
import {scrollToDiv} from '../../utils/scroll';
import {useTranslation} from 'react-i18next';
import {AboutText, Container, Picture, ScrollDown, Section, Separator} from './Style';

function Content({ data, currentSection, setCurrentSection}) {

  const {t} = useTranslation();
  const secHome = useRef();
  const secAbout = useRef();
  const secResume = useRef();
  const secContact = useRef();

  const handleScroll = (e) => {
    /**
     * Detects which is current section.
    **/
    var sections = [secHome.current, secAbout.current, secResume.current, secContact.current];
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
        return sec !== undefined && (sec.offsetTop < scrollTop + window.innerHeight / 2)
      })
    }

    var cur = scrolled.slice(-1)[0];
    var id = "#" + (cur ? cur.id : "home");
    if(id && id !== currentSection) {
      setCurrentSection(id)
    }

  };

  const handleClick = () => {
    scrollToDiv("about");
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div onScroll={handleScroll}>

      <Section ref={secHome} isFirst={true} id="home">
        <h1>{data.firstName} {data.name}</h1>
        <h3>{data.jobTitle}</h3>
        <div>{data.shortPresentation}</div>
        <div id="scrollContainer">
          <ScrollDown onClick={handleClick} viewBox="0 0 17 17">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 	transform="matrix(0 1 -1 0 17 0)">
              <circle cx="8.5" cy="8.5" r="8"/>
              <path d="m11.621 6.379v4.242h-4.242" transform="matrix(.70710678 .70710678 .70710678 -.70710678 	-3.227683 7.792317)"/>
              <path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)"/>
            </g>
          </ScrollDown>
        </div>
      </Section>

      <SectionsContainer>
        <Section id="about" ref={secAbout} color="#93BDD5">
          <h2>{t("about")}</h2>
          <Picture src="picture.png" alt={"Picture of " + data.firstName + " " + data.name}/>
          <AboutText>{data.about}</AboutText>
        </Section>

        <Section id="resume" ref={secResume} color="#B15235">
          <h2>{t("resume")}</h2>
          <h3>{t("skills")}</h3>
          {data.skills.map((skill, index) => (
            <Skill key={index} skill={skill}/>
          ))}
          <Separator/>
          <h3>{t("workExperience")}</h3>
          {data.experiences.map((exp, index) => (
            <WorkExperience key={index} id={index} experience={exp} />
          ))
          }
          <Separator/>
          <h3>{t("education")}</h3>
          {data.education.map((edu, index) => (
            <Education key={index} id={index} education={edu} />
          ))}
        </Section>

        <Section id="contact" ref={secContact} color="#D6B4B9">
          <h2>{t("contact")}</h2>
          <Contact
            firstName={data.firstName}
            name={data.name}
            email={data.email}
            links={data.links}
          />
        </Section>
      </SectionsContainer>
    </div>
  )
}

Content.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    email: PropTypes.string,
    shortPresentation: PropTypes.string,
    about: PropTypes.string,
    experiences: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
    links: PropTypes.array.isRequired
  }).isRequired
}
Content.defaultProps = {
  data: {
    shortPresentation: "",
    about: "",
    experiences: [],
    skills: [],
    education: [],
    links: []
  }
}
export default Content;
