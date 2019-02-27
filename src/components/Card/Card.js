import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {

  getPath = () => {
    const { match } = this.props
    if(match.path.includes('wishlist')) {
      return '/wishlist/'
    } else if (match.path.includes('collected')) {
      return '/collected/'
    } else {
      return '/amiibo/'
    }
  }

  render() {
    return (
      <div className="Card">
        <Link className="card-link" to={this.getPath() + this.props.name}>
          <h3 className="preview-name">{this.props.name}</h3>
          <img className="preview-image" src={this.props.image} alt={`${this.props.name} amiibo`}/>
        </Link>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
}