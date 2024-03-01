import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = React.forwardRef(function Conact({ firstName, name, email, links }, ref){
  return <div className='contact' ref={ref}>
    <h3>{firstName} {name}</h3>
    <p><a href={'mailto:' + email}>{email}</a></p>
    <div>
      {links
        .map((l, index) => <a key={index} href={l.url} target="_blank" rel="noreferrer">{l.name}</a>)
        .reduce((prev, curr) => [prev, ' / ', curr])
      }
    </div>
  </div>;
});

Contact.propTypes = {
  firstName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  links: PropTypes.array
};
export default Contact;
