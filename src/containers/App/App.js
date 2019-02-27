import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAmiibos } from '../../thunks/getAmiibos.js';
import { withRouter, Route, Switch } from 'react-router-dom';
import { getWishlist, getCollected }  from '../../actions/';
import CardCarousel from '../../containers/CardCarousel/CardCarousel.js';
import Header from '../../components/Header/Header.js';
import Menu from '../../components/Menu/Menu.js';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.js';
import NoResultsMessage from '../../components/NoResultsMessage/NoResultsMessage.js';
import SearchBar from '../../containers/SearchBar/SearchBar.js';
import CardExpanded from '../../containers/CardExpanded/CardExpanded.js';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount = () => {
    const url = 'http://www.amiiboapi.com/api/amiibo/';
    this.props.getAmiibos(url);
    this.populateWishlist();
    this.populateCollected();
    this.props.history.push('/');
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
    const amiibo = amiibos.find(amiibo => amiibo.name === match.params.name);
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
        { !this.props.error ? (
            <div className="inner-app">
              <Menu />
              <SearchBar />
                <Switch>
                  <Route path='/amiibo/:name' render={this.findAmiibo} />
                  <Route path='/wishlist/:name' render={this.findAmiibo} />
                  <Route path='/collected/:name' render={this.findAmiibo} />
                  <Route path='/search/:name' render={() => <CardExpanded amiibo={this.props.searchedAmiibo[0]} history={this.props.history}/>} />
                  <Route path='/wishlist' component={CardCarousel} />
                  <Route path='/collected' component={CardCarousel} />
                  <Route exact path='/' component={CardCarousel} />
                  <Route component={ErrorMessage} />
                </Switch>
            </div>
        ) : (
          <Route component={NoResultsMessage} />
        )}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos,
  searchedAmiibo: state.searchedAmiibo,
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  getAmiibos: (url) => dispatch(getAmiibos(url)),
  getWishlist: (wishlist) => dispatch(getWishlist(wishlist)),
  getCollected: (collected) => dispatch(getCollected(collected))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  isLoading: PropTypes.bool,
  getAmiibos: PropTypes.func,
  getWishlist: PropTypes.func,
  getCollected: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  amiibos: PropTypes.array
}