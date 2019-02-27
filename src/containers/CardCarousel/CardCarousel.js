import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card.js';
import PropTypes from 'prop-types';

export class CardCarousel extends Component {

  returnAmiibos = (amiibos) => {
      return amiibos.map((amiibo, i) => {
        return <Card  name = {amiibo.name}
                      amiiboSeries = {amiibo.amiiboSeries}
                      gameSeries = {amiibo.gameSeries}
                      image = {amiibo.image}
                      release = {amiibo.release.na}
                      key = {i}
                      match={this.props.match} />
    })
  }

  render() {
    if (this.props.match.path === '/wishlist' && this.props.wishlist.length === 0) {
      return (
        <h3 className="empty-message">add some amiibos to your wishlist to view them here!</h3>
      )
    } else if (this.props.match.path === '/collected' && this.props.collected.length === 0) {
      return (
        <h3 className="empty-message">mark your amiibos to your collection to keep track of them here!</h3>
        )
    } else {
      return (
        <div className="CardCarousel">
          { this.props.match.path === '/' && this.returnAmiibos(this.props.amiibos) }
          { this.props.match.path === '/amiibo/:name' && this.returnAmiibos(this.props.amiibos) }
          { this.props.match.path === '/wishlist' && this.returnAmiibos(this.props.wishlist) }
          { this.props.match.path === '/wishlist/:name' && this.returnAmiibos(this.props.wishlist) }
          { this.props.match.path === '/collected' && this.returnAmiibos(this.props.collected) }
          { this.props.match.path === '/collected/:name' && this.returnAmiibos(this.props.collected) }
        </div>
      )
    }
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos,
  wishlist: state.wishlist,
  collected: state.collected
});

export default connect(mapStateToProps)(CardCarousel);

CardCarousel.propTypes = {
  amiibos: PropTypes.array,
  collected: PropTypes.array,
  wishlist: PropTypes.array,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}