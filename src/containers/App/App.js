import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import { withRouter, Route, Switch } from 'react-router-dom';
import { getWishlist, getCollected }  from '../../actions/';
import CardCarousel from '../../components/CardCarousel/CardCarousel.js';
import Header from '../../components/Header/Header.js';
import Menu from '../../containers/Menu/Menu.js';
import ErrorMessage from '../../containers/ErrorMessage/ErrorMessage.js';
import SearchBar from '../../containers/SearchBar/SearchBar.js';
import CardExpanded from '../../containers/CardExpanded/CardExpanded.js';

export class App extends Component {

  componentDidMount = () => {
    this.props.getAmiibos();
    this.populateWishlist();
    this.populateCollected();
  }

  populateWishlist = () => {
    const wishlist = localStorage.getItem('wishlist');
    const parsedWishlist = JSON.parse(wishlist);
    if (localStorage.getItem('wishlist') !== null) {
      this.props.getWishlist(parsedWishlist);
    }
  }

  populateCollected = () => {
    const collected = localStorage.getItem('collected');
    const parsedCollected = JSON.parse(collected);
    if (localStorage.getItem('collected') !== null) {
      this.props.getCollected(parsedCollected);
    }
  }
  
  findAmiibo = ({ match, history }) => {
    const { amiibos } = this.props;
    const amiibo = amiibos.find(amiibo => amiibo.id === match.params.id);
    return amiibo ? ([
      <CardCarousel match={match} history={history} />,
      <CardExpanded amiibo={amiibo} match={match} history={history} />
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
              <Route path='/wishlist' component={CardCarousel} />
              <Route path='/collected' component={CardCarousel} />
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
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  getAmiibos: () => dispatch(getAmiibos()),
  getWishlist: (wishlist) => dispatch(getWishlist(wishlist)),
  getCollected: (collected) => dispatch(getCollected(collected))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));