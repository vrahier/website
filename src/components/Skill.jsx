import PropTypes from 'prop-types';
import './Skill.css';

function Skill({skill}) {
  return <div className="skillContainer">
    <div className="skillName">{skill.name}</div>
    <div className="skillValue">{skill.value}</div>
  </div>
}

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
}
export default Skill;
