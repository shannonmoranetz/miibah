import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToWishlist, addToCollected }  from '../../actions';
import { Link } from 'react-router-dom';

export class CardExpanded extends Component {

  addAmiiboToWishlist = async () => {
    let amiibo = this.props;
    await this.props.addToWishlist(amiibo);
    localStorage.setItem('wishlist', JSON.stringify(this.props.wishlist));
  }

  addAmiiboToCollected = async () => {
    let amiibo = this.props;
    await this.props.addToCollected(amiibo);
    localStorage.setItem('collected', JSON.stringify(this.props.collected));
  }

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
          <div className="expanded-buttons">
            <button onClick={this.addAmiiboToWishlist} className="wish-button">wish</button>
            <button onClick={this.addAmiiboToCollected} className="collect-button">collect</button>
          </div>
      </div>
    </div>
    );
  }
}

export const mapStateToProps = state => ({
  wishlist: state.wishlist,
  collected: state.collected
});

export const mapDispatchToProps = dispatch => ({
  addToWishlist: (amiibo) => dispatch(addToWishlist(amiibo)),
  addToCollected: (amiibo) => dispatch(addToCollected(amiibo))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardExpanded);
