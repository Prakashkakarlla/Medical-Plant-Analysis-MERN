// CardDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from './cardsData.json';
import Bargraph from './Bargraph';
import Barline from './Barline';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import './CardDetails.css';


function CardDetails() {
  const { id } = useParams();

  // Find the card with the matching id (use strict equality)
  const card = cardsData.find(card => card.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
<div className="card-details-container">
  <h1>{card.title}</h1>
  <div className="card-details-image">
  <CardMedia
    component="img"
    height="200"
    image={card.image}
    alt={card.title}
  />
  </div>
  <div className="card-details-content">
    <h1> Medical Properties</h1>
    <p>{card.description}</p>

  <h1>Yearly Analysis</h1>
    <Bargraph />
  
  <Barline />
  </div>
</div>

  );
}

export default CardDetails;
