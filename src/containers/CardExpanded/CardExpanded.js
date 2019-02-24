import React, { Component } from 'react';

class CardExpanded extends Component {
  render() {
    return (
      <div className="CardExpanded">
        <div className="innerCard">
          <div className="cardImageContainer">
            <img className="previewImageExpanded" src={this.props.image} alt={`${this.props.name} amiibo`}/>
          </div>
          <div className="cardInfo">
            <h2 className="cardName">{this.props.name}</h2>
            <p className="cardAmiiboSeries"> amiibo series: {this.props.amiiboSeries}</p>
            <p className="cardGameSeries">game series: {this.props.gameSeries}</p>
            <p className="cardDate">release date: {this.props.release.na}</p>
          </div>
      </div>
    </div>
    );
  }
}

export default CardExpanded;
