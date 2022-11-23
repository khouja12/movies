import React from 'react'
import {  Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";


const MovieCard = ({ movie }) => {
  const rate = {
    size: 30,
    value: movie.rate,
    edit: false,
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.NoteImbd}</Card.Text>
          <Card.Text>{movie.Years}</Card.Text>
          <Card.Text>{movie.Type}</Card.Text>

          <div className='rate'>
            <ReactStars  {...rate} />
          </div>
          <div className='btn'>
            <a href={movie.Trailer}><button> watch</button></a>
          </div>
        </Card.Body>

      </Card>
    </div>

  )
}

export default MovieCard