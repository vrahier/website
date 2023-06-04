import {useEffect} from 'react';
import PropTypes from 'prop-types';

import './Education';

function Education({id, education}) {

  useEffect(() => {
    document.getElementById(`eduDescription${id}`).innerHTML = education.description;
  }, [])

  return <div class="container">
      <div className="expTitle">
        <h3>{education.title}</h3>
      </div>
      <div>
        {education.school}
      </div>
      <div className="expDates">
        {education.fromDate}-{education.toDate}
      </div>
      <div>
        {education.location}
      </div>
      <div id={`eduDescription${id}`} className="expDescription">
        {education.description}
      </div>
    </div>
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
export default Education;
