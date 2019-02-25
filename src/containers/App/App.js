import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import { withRouter, Route, Switch } from 'react-router-dom';
import { setWishlist }  from '../../thunks/setWishlist.js';
import CardCarousel from '../../components/CardCarousel/CardCarousel.js';
import Header from '../../components/Header/Header.js';
import Menu from '../../containers/Menu/Menu.js';
import ErrorMessage from '../../containers/ErrorMessage/ErrorMessage.js';
import SearchBar from '../../containers/SearchBar/SearchBar.js';
import CardExpanded from '../../containers/CardExpanded/CardExpanded.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount = () => {
    this.props.getAmiibos();
    const wishlist = localStorage.getItem('wishlist');
    const parsedList = JSON.parse(wishlist);
    if (localStorage.getItem('wishlist') !== null) {
      this.props.setWishlist(parsedList);
    }
  }
  
  findAmiibo = ({ match }) => {
    const { amiibos } = this.props;
    const amiibo = amiibos.find(amiibo => amiibo.id === match.params.id);
    return amiibo ? ([
      <CardCarousel />,
      <CardExpanded {...amiibo} match={match} />
    ]) : <ErrorMessage />
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.props.isLoading && <h2 className="load-text">loading...</h2> }
          <div className="inner-app">
            <Menu />
            <SearchBar />
            <Switch>
              <Route exact path='/' component={CardCarousel} />
              <Route path='/amiibo/:id' render={this.findAmiibo} />
              <Route component={ErrorMessage} />
            </Switch>
          </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos,
  isLoading: state.isLoading,
  wishlist: state.wishlist
});

export const mapDispatchToProps = dispatch => ({
  getAmiibos: () => dispatch(getAmiibos()),
  setWishlist: (wishlist) => dispatch(setWishlist(wishlist))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));