import PropTypes from 'prop-types';

function Skill({skill}) {
  return <div className="rowContainer">
    <div className="rowName">{skill.name}</div>
    <div className="rowValue">{skill.value}</div>
  </div>
}

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
}
export default Skill;
