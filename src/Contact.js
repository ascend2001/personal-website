import React from 'react';
import propTypes from 'prop-types';
import {
  AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillFacebook,
} from 'react-icons/ai';

function Contact({ color, gapLength }) {
  return (
    <div className={`flex flex-row justify-center gap-x-${gapLength} mt-12`}>
      <a href="https://www.instagram.com/asengupta2001/">
        <AiFillInstagram size="2.5em" color={color} />
      </a>
      <a href="https://github.com/ascend2001">
        <AiFillGithub size="2.5em" color={color} />
      </a>
      <a href="https://www.linkedin.com/in/avnish-sengupta/">
        <AiFillLinkedin size="2.5em" color={color} />
      </a>
      <a href="https://www.facebook.com/avnish.sengupta/">
        <AiFillFacebook size="2.5em" color={color} />
      </a>
    </div>
  );
}
Contact.defaultProps = {
  color: '',
  gapLength: '4',
};

Contact.propTypes = {
  color: propTypes.string,
  gapLength: propTypes.string,
};

export default Contact;
