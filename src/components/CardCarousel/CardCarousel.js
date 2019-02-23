import React from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card.js';

const CardCarousel = (props) => {
  return (
    <div className="CardCarousel">
      {
        props.amiibos.map((amiibo, i) => {
          return <Card name={amiibo.name.toLowerCase()}
                       amiiboSeries={amiibo.amiiboSeries.toLowerCase()}
                       gameSeries = {amiibo.gameSeries.toLowerCase()}
                       image = {amiibo.image}
                       release = {amiibo.release.na}
                       key={i} />
        })
      }
    </div>
  );
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos
});

export default connect(mapStateToProps)(CardCarousel);
