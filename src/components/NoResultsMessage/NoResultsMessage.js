import React from 'react';

export const NoResultsMessage = () => {
  return (
    <div className="NoResultsMessage">
      <h2>sorry!</h2>
      <p>
        the search returned no results.
        please try again with a different query.
      </p>
      <button onClick={() => window.location.reload()}>back home</button>
    </div>
  );
}

export default NoResultsMessage;