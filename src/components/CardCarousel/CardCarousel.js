import React from 'react';
import Card from '../../containers/Card/Card.js';
import CardExpanded from '../../containers/CardExpanded/CardExpanded.js';

const CardCarousel = () => {
  return (
    <div className="CardCarousel">
      <Card />
      <CardExpanded />
    </div>
  );
}

export default CardCarousel;
