import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import './style.css'; // Import the CSS file
import cardsData from './cardsData.json';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MultipleCards() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const cardsPerPage = 12; // Number of cards to display per page

  // Calculate the index range of the cards to display for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Filter cards based on search query
  const filteredCards = currentCards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to previous page
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    if (currentPage < Math.ceil(cardsData.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  function handleClick(id) {
    navigate(`/cardDetails/${id}`);
  }

  return (
    <div>
<div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Add a search icon or button if desired */}
      </div>
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <Card key={index} className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleClick(card.id)} size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination-container">
        <Button onClick={goToPrevPage} disabled={currentPage === 1}>&lt; Prev</Button>
        {[...Array(Math.ceil(cardsData.length / cardsPerPage)).keys()].map((pageNumber) => (
          <Button key={pageNumber} className="pagination-item" variant={pageNumber + 1 === currentPage ? "contained" : "outlined"} onClick={() => paginate(pageNumber + 1)}>
            {pageNumber + 1}
          </Button>
        ))}
        <Button onClick={goToNextPage} disabled={currentPage === Math.ceil(cardsData.length / cardsPerPage)}>&gt; Next</Button>
      </div>
 
      <div className="d-flex justify-content-center">
    <Link to='/login' className="btn btn-light btn-sm text-center">
        <span className="d-inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left me-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.646 12.354a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 9.707V14.5a.5.5 0 0 1-1 0V9.707L3.354 12.354a.5.5 0 0 1-.708 0z"/>
                <path fillRule="evenodd" d="M7.5 2a.5.5 0 0 1 .5.5v2.793l2.146-2.147a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7 5.293V2.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
            Logout
        </span>
    </Link>
    <h1>Welcome, {name}</h1>
</div>



    </div>
  );
}

export default MultipleCards;
