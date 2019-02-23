import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {

  render() {
    return (
      <div className="Card">
        <Link to={`/amiibo/${this.props.id}`}>
          <h3>{this.props.name}</h3>
          <img src={this.props.image} alt={`${this.props.name} amiibo`}/>
        </Link>
      </div>
    ); 
  }
}



export default Card;
