import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {

  render() {
    return (
      <div className="Card">
        <Link className="card-link" to={`/amiibo/${this.props.name}`}>
          <h3 className="preview-name">{this.props.name}</h3>
          <img className="preview-image" src={this.props.image} alt={`${this.props.name} amiibo`}/>
        </Link>
      </div>
    );
  }
}

export default Card;
