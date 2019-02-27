import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ErrorMessage = (props) => {
  return (
    <div className="ErrorMessage">
      <h2>error</h2>
      <p>
        uh oh, encountered an error... please try again!
      </p>
      <Link to='/'>go back</Link>
    </div>
  );
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}