import { PropTypes } from 'prop-types';
import {useRef} from 'react';
import Contact from '../Contact';
import Home from '../Home';
import './index.css';
import About from '../About';
import Resume from '../Resume';

function Content({ data, currentSection, setCurrentSection}) {

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

  window.addEventListener('scroll', handleScroll);

  return (
    <div onScroll={handleScroll}>
      <Home data={data} ref={secHome} id="home"/>

      <div className='sections'>
        <About data={data} ref={secAbout} id="about"/>
        <Resume data={data} ref={secResume} id="resume"/>
        <Contact
          firstName={data.firstName}
          name={data.name}
          email={data.email}
          links={data.links}
          id="contact"
          ref={secContact}
        />
      </div>
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
