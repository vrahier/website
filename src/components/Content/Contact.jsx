import PropTypes from 'prop-types';

const CONTACT_CONF = {
  "email": ["Email", ""],
  "github": ["Github", "https://github.com/"],
  "linkedin": ["Linkedin", "https://linkedin.com/in/"],
}

function Contact({contact}) {
  const [contactName, contactBase] = CONTACT_CONF[contact.type];
  const getHref = () => {
    let contactValue = contactBase + contact.value;
    return `${contact.type === 'email' ? "mailto:" : ""}${contactValue}`;
  };

  return <div className="rowContainer">
    <div className="rowName">{contactName}</div>
    <a className="rowValue" href={getHref()} target="_blank">{contact.value}</a>
  </div>
}

Contact.propTypes = {
  contact: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
}
export default Contact;
