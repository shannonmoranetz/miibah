import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card.js';

export class CardCarousel extends Component {

  returnAmiibos = (amiibos) => {
      return amiibos.map((amiibo, i) => {
        return <Card  name = {amiibo.name}
                      amiiboSeries = {amiibo.amiiboSeries}
                      gameSeries = {amiibo.gameSeries}
                      image = {amiibo.image}
                      release = {amiibo.release.na}
                      key = {i} />
    })
  }

  render() {
    return (
      <div className="CardCarousel">
        { this.props.match.path === '/' && this.returnAmiibos(this.props.amiibos) }
        { this.props.match.path === '/wishlist' && this.returnAmiibos(this.props.wishlist) }
        { this.props.match.path === '/collected' && this.returnAmiibos(this.props.collected) }
        { this.props.match.path === '/amiibo/:name' && this.returnAmiibos(this.props.amiibos) }
        { this.props.match.path === '/search/:name' && this.returnAmiibos(this.props.searchedAmiibo) }
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos,
  searchedAmiibo: state.searchedAmiibo,
  wishlist: state.wishlist,
  collected: state.collected
});

export default connect(mapStateToProps)(CardCarousel);
