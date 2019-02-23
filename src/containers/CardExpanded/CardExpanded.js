import React, { Component } from 'react';

class CardExpanded extends Component {
  render() {
    return (
      <div className="CardExpanded">
        <h2>{this.props.name}</h2>
        <p>amiibo series: {this.props.amiiboSeries}</p>
        <p>game series: {this.props.gameSeries}</p>
        <p>release date: {this.props.release.na}</p>
      </div>
    );
  }
}

export default CardExpanded;
