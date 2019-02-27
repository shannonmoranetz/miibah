import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToWishlist, addToCollected, removeFromCollected, removeFromWishlist }  from '../../actions';
import PropTypes from 'prop-types';

export class CardExpanded extends Component {

  checkExistingList = (list) => {
    let { name } = this.props.amiibo;
    let index = list.findIndex(listItem => listItem.name == name);
    if (index == -1) {
      return true;
    } else {
      return false;
    }
  }

  addAmiiboToWishlist = async () => {
    let { name, amiiboSeries, gameSeries, release, image, id } = this.props.amiibo;
    let amiibo = { name: name, amiiboSeries: amiiboSeries, gameSeries: gameSeries, release: release, image: image, id: id }
    if (this.checkExistingList(this.props.wishlist)) {
      await this.props.addToWishlist(amiibo);
      localStorage.setItem('wishlist', JSON.stringify(this.props.wishlist));
    } else {
      await this.props.removeFromWishlist(amiibo);
      localStorage.setItem('wishlist', JSON.stringify(this.props.wishlist));
    }
  }

  addAmiiboToCollected = async () => {
    let { name, amiiboSeries, gameSeries, release, image, id } = this.props.amiibo;
    let amiibo = { name: name, amiiboSeries: amiiboSeries, gameSeries: gameSeries, release: release, image: image, id: id }
    if (this.checkExistingList(this.props.collected)) {
      await this.props.addToCollected(amiibo);
      localStorage.setItem('collected', JSON.stringify(this.props.collected));
    } else {
      await this.props.removeFromCollected(amiibo);
      localStorage.setItem('collected', JSON.stringify(this.props.collected));
    }
  }

  render() {
    if(this.props.amiibo) {
    let { name, amiiboSeries, gameSeries, release, image } = this.props.amiibo;
      return (
        <div className="CardExpanded">
          <div className="inner-card">
            <div className="card-image-container">
              <img className="image-expanded" src={image} alt={`${name} amiibo`}/>
            </div>
            <div className="card-info">
              <h2 className="card-name">{name}</h2>
              <p className="card-amiibo-series"><div className="bold-info">amiibo series: </div>{amiiboSeries}</p>
              <p className="card-game-series"><div className="bold-info">game series: </div>{gameSeries}</p>
              <p className="card-date"><div className="bold-info">release date: </div>{release.na}</p>
            </div>
            <div className="expanded-buttons">
              <button onClick={this.addAmiiboToWishlist} className="wish-button">{ this.checkExistingList(this.props.wishlist) ? 'add to wishlist' : 'remove from wishlist' }</button>
              <button onClick={this.addAmiiboToCollected} className="collect-button">{ this.checkExistingList(this.props.collected) ? 'add to collection' : 'remove from collection' }</button>
              <button onClick={() => this.props.history.goBack()} className="exit-button">back</button>
            </div>
        </div>
      </div>
    )
    } else {
      return null
    }
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

CardExpanded.propTypes = {
  addToWishlist: PropTypes.func,
  addToCollected: PropTypes.func,
  removeFromCollected: PropTypes.func,
  removeFromWishlist: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  amiibo: PropTypes.object,
  wishlist: PropTypes.array,
  collected: PropTypes.array
}