import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu">
      <NavLink exact to='/' className="nav-button home-button" activeStyle={{ color: '#a6a6eb' }}>home</NavLink>
      <NavLink to='/wishlist' className="nav-button wishlist-button" activeStyle={{ color: '#a6a6eb' }}>wishlist</NavLink>
      <NavLink to='/collected' className="nav-button collection-button" activeStyle={{ color: '#a6a6eb' }}>collected</NavLink>
    </div>
  );
}

export default Menu;