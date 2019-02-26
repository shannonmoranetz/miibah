import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <NavLink to='/' className="nav-button home-button">home</NavLink>
        <NavLink to='/wishlist' className="nav-button wishlist-button">wishlist</NavLink>
        <NavLink to='/collected' className="nav-button collection-button">collected</NavLink>
      </div>
    );
  }
}

export default Menu;

Menu.propTypes = {}