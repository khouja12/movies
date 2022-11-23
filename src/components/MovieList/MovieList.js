import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
const MovieList = ({ movies, search }) => {
  return (
    <div className='List'>
      {movies
        .filter(movie => movie.Title.toUpperCase().includes(search.toUpperCase()))
        .map(movie => <MovieCard movie={movie} key={movie.id}/>
        )}
        
    </div>
  )
}

export default MovieList