import React from 'react';

const Header = () => {
  return (
    <div className="Header">
      <img className="star star-left" src={require(`../../styles/images/star2.png`)} alt="Star"/>
      <h1 className="title">miibah</h1>
      <img className="star star-right" src={require(`../../styles/images/star2.png`)} alt="Star"/>
    </div>
  );
}

export default Header;
