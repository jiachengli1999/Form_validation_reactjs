import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css'

function Nav(props) {
  const logged_out_nav = (
    <div className='header'>
      <label onClick={() => props.display_form('login')}>login</label>
      <label onClick={() => props.display_form('signup')}>signup</label>
      <label onClick={() => props.display_form('gallery')}>Gallery</label>
      <label onClick={() => props.display_form('about')}>About</label>
    </div>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};