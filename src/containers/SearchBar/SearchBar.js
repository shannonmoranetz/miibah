import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <form className="search-form">
          <input className="search-input" placeholder="search for an amiibo..."/>
          <input className="submit-form" type="submit"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {}