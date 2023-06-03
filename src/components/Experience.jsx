import {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import './Experience.css';

function Experience({id, experience}) {

  useEffect(() => {
    document.getElementById(`expDescription${id}`).innerHTML = experience.description;
  }, [])

  return <div className="container">
      <div className="expTitle">
        <h3>{experience.title}</h3>
      </div>
      <div>
        {experience.employer}
      </div>
      <div className="expDates">
        {experience.fromDate}-{experience.toDate}
      </div>
      <div>
        {experience.location}
      </div>
      <div id={`expDescription${id}`} className="expDescription">
        {experience.description}
      </div>
    </div>
}

Experience.propTypes = {
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
export default Experience;
