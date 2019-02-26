import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ErrorMessage extends Component {
  render() {
    return (
      <div className="ErrorMessage">
        <h2>error</h2>
        <p>
          the search returned no results. 
          please try again with a different query.
        </p>
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error
});

export default (connect(mapStateToProps)(ErrorMessage));

ErrorMessage.propTypes = {
  error: PropTypes.string
}