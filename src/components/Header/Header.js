import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <img className="star star-left" src={require(`../../styles/images/star2.png`)} alt="Star"/>
      <Link to='/' className="title">miibah</Link>
      <img className="star star-right" src={require(`../../styles/images/star2.png`)} alt="Star"/>
    </div>
  );
}

export default Header;
