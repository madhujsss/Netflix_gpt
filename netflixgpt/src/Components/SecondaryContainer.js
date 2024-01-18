import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const SecondaryContainer = () => {
  const movie = useSelector(store => store.movies)
  
  return (
    <div className='bg-gray-300 '>
      <MovieList title={"Now playing"} movies={movie?.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movie?.upcoming} />
      <MovieList title={"Top rated"} movies={movie?.toprated} />
      <MovieList title={"Popular"} movies={movie?.popularMovies} />
     
     
    </div>
  )
}

export default SecondaryContainer
