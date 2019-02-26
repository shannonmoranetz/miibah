import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card.js';

export class CardCarousel extends Component {

  returnAmiibos = (amiibos) => {
      return amiibos.map((amiibo, i) => {
      return <Card name = {amiibo.name}
                   amiiboSeries = {amiibo.amiiboSeries}
                   gameSeries = {amiibo.gameSeries}
                   image = {amiibo.image}
                   release = {amiibo.release.na}
                   id = {amiibo.id}
                   key = {i} />
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="CardCarousel">
        { this.props.match.path === '/' && this.returnAmiibos(this.props.amiibos) }
        { this.props.match.path === '/amiibo/:id' && this.returnAmiibos(this.props.amiibos) }
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos
});

export default connect(mapStateToProps)(CardCarousel);
