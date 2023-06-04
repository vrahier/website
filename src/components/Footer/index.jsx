import './index.css';
import { PropTypes } from 'prop-types';

function Footer({data}) {
  return <footer>
    © {new Date().getFullYear()} {data.firstName} {data.name}
  </footer>
}

Footer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired
  }).isRequired
}
export default Footer;
