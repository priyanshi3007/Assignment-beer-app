import React from 'react';
import './BeerCard.css';

function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      <img src={beer.image} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.description}</p>
    </div>
  );
}

export default BeerCard;
