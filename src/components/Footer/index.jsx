import { PropTypes } from 'prop-types';
import {StyledFooter} from './Style';

function Footer({data}) {
  return <StyledFooter>
    © {new Date().getFullYear()} {data.firstName} {data.name}
  </StyledFooter>
}

Footer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired
  }).isRequired
}
export default Footer;
