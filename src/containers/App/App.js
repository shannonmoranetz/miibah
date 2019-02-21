import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import CardCarousel from '../../components/CardCarousel/CardCarousel.js';
import Header from '../../components/Header/Header.js';
import Menu from '../../containers/Menu/Menu.js';

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
        <Menu />
        <CardCarousel />
      </div>
    ); 
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos
});

export const mapDispatchToProps = dispatch => ({
  getAmiibos: () => dispatch(getAmiibos())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);