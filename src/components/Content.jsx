import { PropTypes } from 'prop-types';
import './Content.css';

function Content({ data }) {
  return (
    <div className="contentDiv">
      <div>
        <h1>{data.firstName} {data.name}</h1>
        <h2>{data.jobTitle}</h2>
        <img className="picture" src="/picture.png"/>
      </div>
      <div id="presentation">
        {data.presentation}
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
