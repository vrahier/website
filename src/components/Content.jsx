import { PropTypes } from 'prop-types';

function Content({ data }) {
  return <></>
}

Content.propTypes = {
  data: PropTypes.shape({
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
