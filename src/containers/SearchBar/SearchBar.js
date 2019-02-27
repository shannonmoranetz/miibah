import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { search } = this.state;
    if (search) {
      let url = 'http://www.amiiboapi.com/api/amiibo/?name=';
      let newUrl = url + this.state.search;
      await this.props.getAmiibos(newUrl);
      this.props.history.push(`/search/:${this.state.search}`);
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit} className="search-form">
          <input onChange={this.handleChange} className="search-input" placeholder="search for an amiibo..."/>
          <Link to='/search/:name' className="submit-form" type="submit"></Link>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getAmiibos: (url) => dispatch(getAmiibos(url))
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));

SearchBar.propTypes = {
  getAmiibos: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}