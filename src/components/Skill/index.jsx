import PropTypes from 'prop-types';
import {SkillName, SkillValue} from './Style';

function Skill({skill}) {
  return <>
    <SkillName>{skill.name}</SkillName>
    <SkillValue>{skill.value}</SkillValue>
  </>
}

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
}
export default Skill;
