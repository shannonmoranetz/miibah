import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToWishlist, addToCollected, removeFromCollected, removeFromWishlist }  from '../../actions';
import { Link } from 'react-router-dom';

export class CardExpanded extends Component {

  checkExistingList = () => {
    let amiibo = this.props;
    let index = this.props.wishlist.findIndex(wishlistItem => wishlistItem.name == amiibo.name);
    if (index == -1) {
      return true;
    } else {
      return false;
    }
  }

  addAmiiboToWishlist = async () => {
    let amiibo = this.props;
    let index = this.props.wishlist.findIndex(wishlistItem => wishlistItem.name == amiibo.name);
    if (index == -1) {
      await this.props.addToWishlist(amiibo);
      localStorage.setItem('wishlist', JSON.stringify(this.props.wishlist));
    } else {
      await this.props.removeFromWishlist(amiibo);
      localStorage.setItem('wishlist', JSON.stringify(this.props.wishlist));
    }
  }

  addAmiiboToCollected = async () => {
    let amiibo = this.props;
    let index = this.props.collected.findIndex(collectedItem => collectedItem.name == amiibo.name);
    if (index == -1) {
      await this.props.addToCollected(amiibo);
      localStorage.setItem('collected', JSON.stringify(this.props.collected));
    } else {
      await this.props.removeFromCollected(amiibo);
      localStorage.setItem('collected', JSON.stringify(this.props.collected));
    }
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
            <button onClick={this.addAmiiboToWishlist} className="wish-button">{ this.checkExistingList() ? 'add to wishlist' : 'remove from wishlist' }</button>
            <button onClick={this.addAmiiboToCollected} className="collect-button">{ this.checkExistingList() ? 'add to collection' : 'remove from collection' }</button>
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
  addToCollected: (amiibo) => dispatch(addToCollected(amiibo)),
  removeFromCollected: (amiibo) => dispatch(removeFromCollected(amiibo)),
  removeFromWishlist: (amiibo) => dispatch(removeFromWishlist(amiibo))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardExpanded);
