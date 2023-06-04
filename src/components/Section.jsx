import {useEffect} from 'react';

function Section({id, currentSection, setCurrentSection, children}) {
  useEffect(() => {
    if (currentSection === id) {
      let header = document.getElementsByTagName('header')[0];
      let div = document.getElementById("section" + id);
      window.scrollTo({
        top: div.offsetTop - header.offsetHeight + 1,
        behavior: "smooth"
      });
    }
  }, [currentSection]);
  return <div id={"section" + id}>{children}</div>
}
export default Section;
