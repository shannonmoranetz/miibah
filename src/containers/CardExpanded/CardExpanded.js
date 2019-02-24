import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardExpanded extends Component {
  render() {
    return (
      <div className="CardExpanded">
        <div className="inner-card">
        <Link to="/" className="exit-button">x</Link>
          <div className="card-image-container">
            <img className="image-expanded" src={this.props.image} alt={`${this.props.name} amiibo`}/>
          </div>
          <div className="card-info">
            <h2 className="card-name">{this.props.name}</h2>
            <p className="card-amiibo-series"> amiibo series: {this.props.amiiboSeries}</p>
            <p className="card-game-series">game series: {this.props.gameSeries}</p>
            <p className="card-date">release date: {this.props.release.na}</p>
          </div>
      </div>
    </div>
    );
  }
}

export default CardExpanded;
