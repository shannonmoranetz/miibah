import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardExpanded extends Component {

  findExpanded = () => {
    const { amiibos } = this.props
    const { id } = this.props.match.params
    return amiibos.find(amiibo => {
      return amiibo.id === id
    })
  }

  render() {
    const amiibo = this.findExpanded();
    return (
      <div className="CardExpanded">
        <h2>{amiibo.name}</h2>
        <p>amiibo series: {amiibo.amiiboSeries}</p>
        <p>game series: {amiibo.gameSeries}</p>
        <p>release date: {amiibo.release.na}</p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  amiibos: state.amiibos
});

export default connect(mapStateToProps)(CardExpanded);
