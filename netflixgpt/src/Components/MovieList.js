import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {



  return (
    <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-black'>{title}</h1>
        <div className='flex overflow-x-scroll'>
          <div className='flex '>
        {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id} language= {movie.original_language} overview={movie.overview} release={movie.release_date} title={movie.title} vote={movie.vote_average}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
