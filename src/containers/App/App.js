import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import { withRouter, Route, Switch } from 'react-router-dom';
import CardCarousel from '../../components/CardCarousel/CardCarousel.js';
import Header from '../../components/Header/Header.js';
import Menu from '../../containers/Menu/Menu.js';
import ErrorMessage from '../../containers/ErrorMessage/ErrorMessage.js';
import SearchBar from '../../containers/SearchBar/SearchBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount = () => {
    this.props.getAmiibos();
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.props.isLoading && <h2>loading...</h2> }
          <div>
            <Menu />
            <Switch>
              <Route exact path='/' component={CardCarousel} />
              <Route component={ErrorMessage} />
            </Switch>
          </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  getAmiibos: () => dispatch(getAmiibos())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));