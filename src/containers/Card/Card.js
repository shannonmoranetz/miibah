import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h3>{this.props.name}</h3>
        <img src={this.props.image} alt={`${this.props.name} amiibo`}/>
        <p>amiibo series: {this.props.amiiboSeries}</p>
        <p>game series: {this.props.gameSeries}</p>
        <p>release date: {this.props.release}</p>
      </div>
    ); 
  }
}

export default Card;
