import PropTypes from 'prop-types';

function Contact({firstName, name, email, links}){
  return <>
    <h3>{firstName} {name}</h3>
    <p><a href={"mailto:" + email}>{email}</a></p>
    <div>
      {links
        .map((l, index) => <a key={index} href={l.url} target="_blank" rel="noreferrer">{l.name}</a>)
        .reduce((prev, curr) => [prev, " / ", curr])
      }
    </div>
  </>
}

Contact.propTypes = {
  firstName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  links: PropTypes.array
};
export default Contact;
