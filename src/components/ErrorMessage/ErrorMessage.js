import React from 'react';
import PropTypes from 'prop-types';

export const ErrorMessage = (props) => {
  return (
    <div className="ErrorMessage">
      <h2>error</h2>
      <p>
        the search returned no results.
        please try again with a different query.
      </p>
      {/* <Link to='/'>back</Link> */}
      <button onClick={() => props.history.goBack()}>BACKKKKKK</button>
    </div>
  );
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}