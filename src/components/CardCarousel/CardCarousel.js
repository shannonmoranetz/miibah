import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card.js';

class CardCarousel extends Component {
  render() {
    return (
      <div className="CardCarousel">
        {
          this.props.amiibos.map((amiibo, i) => {
            return <Card name={amiibo.name}
                         amiiboSeries={amiibo.amiiboSeries}
                         gameSeries = {amiibo.gameSeries}
                         image = {amiibo.image}
                         release = {amiibo.release.na}
                         id={amiibo.id}
                         key={i} />
          })
        }
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos
});

export default connect(mapStateToProps)(CardCarousel);
