import React, { Component } from 'react';

class CardExpanded extends Component {
  render() {
    return (
      <div className="CardExpanded">
        <h2 className="cardName">{this.props.name}</h2>
        <p className="cardAmiiboSeries"> amiibo series: {this.props.amiiboSeries}</p>
        <p className="cardGameSeries">game series: {this.props.gameSeries}</p>
        <p className="cardDate">release date: {this.props.release.na}</p>
      </div>
    );
  }
}

export default CardExpanded;
